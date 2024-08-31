import {
  SqlTranslator,
  ITableInfo,
  IFieldInfo,
  ICalculatedColumn,
  ITabularResultSet,
  IFetchQuery,
  TabularDataSource,
  type ITabularExecuteOpts,
} from '@ducklab/core';
import * as arrow from 'apache-arrow';
import { Database } from "duckdb-async";


export class DuckdbDataSource extends TabularDataSource {
  private _tr: SqlTranslator;
  public readonly opts: Required<DuckOptions>;
  private _db: Database | null = null;

  constructor(name: string, duckOpts: DuckOptions) {
    super(name);
    this._tr = new SqlTranslator();
    this.opts = {
      supportedTypes: [".csv", ".parquet"],
      batchSize: 10000,
      previewLimit: 1000,
      rawLimit: -1,
      extensions: [],
      dbPath: "./temp_duckdb.db",
      dataPath: "./data/",
      ...duckOpts,
    };
  }

  public async _init() {
    console.log("Init duckdb");
    const db = await Database.create(this.opts.dbPath);
    await db.exec(`set file_search_path='${this.opts.dataPath}';`);
    console.log("Init duckdb: ", db);
    return db;
  }

  public async test(): Promise<void> {
    if (!this._db) {
      await this.connect();
      return;
    }
    await this.queryNative('SELECT 1');
  }

  public async connect(): Promise<void> {
    if (!this._db) {
      this._db = await this._init();
    }
    await this.test();
    await this.loadExtensions();
  }

  private async loadExtensions(): Promise<void> {
    for (const ext of this.opts.extensions ?? []) {
      const res = await this.queryNative(`INSTALL ${ext}\nLOAD ${ext}`);
      console.log(`Loaded: ${ext}`, res);
    }
  }

  private async executeNative(query: string): Promise<ITabularResultSet> {
    if (!this._db) {
      await this.connect();
    }
    if (!this._db) {
      throw Error("Database could not be initialized");
    }
    const res = await this._db.all(query);
    console.log("Response: ", res);
    if (res.length === 0) {
      return {
        columns: [],
        values: []
      };
    }
    else {
      const arrowRes = arrow.tableFromJSON(res);
      const transformed = this.transformResultset(arrowRes);
      return transformed;
    }

  }

  public async reset() {
  }


  getJsonType(type: any) {
    if (arrow.DataType.isInt(type)) return "number";
    if (arrow.DataType.isFloat(type)) return "number";
    if (arrow.DataType.isDecimal(type)) return "number";
    if (arrow.DataType.isBool(type)) return "boolean";
    if (arrow.DataType.isDate(type)) return "datetime";
    return "string";
  }

  private transformResultset(resultset: any): ITabularResultSet {
    console.log("Transforming: ", resultset);
    const items: any[] = [];
    const columns: IFieldInfo[] = [];
    if (!resultset.schema.fields) {
      resultset.schema.fields = {};
    }
    for (const col of resultset.schema.fields) {
      columns.push({
        name: col.name,
        type: this.getJsonType(col.type),
      });
    }
    for (let i = 0; i < resultset.numRows; i++) {
      items.push({ _index: i, ...resultset.get(i).toJSON() });
    }
    return {
      columns: columns,
      values: items,
    };
  }

  private addLimit(rawQuery: string, limit: number, offset: number) {
    rawQuery = rawQuery.trim();
    if (rawQuery.endsWith(';')) {
      rawQuery = rawQuery.substring(0, rawQuery.length - 1);
    }
    return `select * from (${rawQuery}) offset ${offset} limit ${limit};`;
  }

  public async createView(name: string, query: IFetchQuery) {
    const sql = this._tr.translate(query);
    await this.queryNative(`CREATE OR REPLACE VIEW '${name}' AS (${sql})`);
  }

  public async queryNative(query: string, limit?: number) {
    const result = await this.executeNative(query);
    console.log("executed: ", result);
    if (limit != null && limit >= 0 && result.values.length >= limit) {
      result.values = result.values.slice(0, limit);
    }
    return {
      columns: result.columns,
      values: result.values
    };
  }

  public async query(params: ITabularExecuteOpts, limit?: number, offset?: number) {
    if (!offset) offset = 0;
    if (params.rawQuery != null) {
      return await this.queryNative(params.rawQuery, limit ?? this.opts.rawLimit);
    }
    if (!params.query) {
      throw Error("Query must be provided");
    }
    const sql = this._tr.translate(params.query, limit ?? this.opts.previewLimit, offset);
    console.log(sql);
    return await this.queryNative(sql);
  }

  public async getDatasets(): Promise<ITableInfo[]> {
    const results = await this.queryNative(`
        SELECT TABLE_SCHEMA as "schema",
        TABLE_NAME as "table",
        COLUMN_NAME as "column",
        COLUMN_DEFAULT as "default",
        DATA_TYPE as "type",
        CHARACTER_MAXIMUM_LENGTH as max_len
        from INFORMATION_SCHEMA.COLUMNS
        where TABLE_SCHEMA not in ('pg_catalog', 'temp');
        `);
    console.log(results);
    return this.createDatasets(results);
  }

  protected createDatasets(data: ITabularResultSet): ITableInfo[] {
    const infos: { [key: string]: ITableInfo; } = {};
    for (const col of data.values) {
      if (!(col.table in infos)) {
        infos[col.table] = {
          name: col.table,
          type: 'duckdb',
          namespace: [col.schema],
          schema: [] as IFieldInfo[],
          query: {
            fields: [{ expression: "*" } as ICalculatedColumn],
            from: { name: col.name, namespace: col.schema }
          },
        };
      }
      infos[col.table].schema.push({
        name: col.column,
        type: col.type,
        default: col.default,
        maxSize: col.max_len,
      });
    }
    return Object.values(infos);
  }

  dispose() {
    this._db?.close();
  }
}

export interface DuckOptions {
  batchSize?: number;
  extensions?: string[];
  supportedTypes?: string[];
  previewLimit?: number;
  rawLimit?: number;
  dbPath?: string;
  dataPath: string;
}
