import { TabularDataSource, type ITabularExecuteOpts } from '@/core/entities/tabular/TabularDataSource';
import { SqlTranslator } from '@/core/translator/sql/SqlTranslator';
import type { ITableInfo } from '@/core/entities/tabular/ITableInfo';
import { initDuckdb } from "./init";
import { DuckDBDataProtocol, AsyncDuckDBConnection, AsyncDuckDB } from '@duckdb/duckdb-wasm';
import * as arrow from 'apache-arrow';
import type { FileSystemReference } from '@/entities/FileSystemReference';
import type { IFieldInfo } from '@/core/entities/tabular/IFieldInfo';
import type { ICalculatedColumn } from '@/core/language/IExpression';
import type { ITabularResultSet } from '@/core/entities/tabular/ITabularResultSet';
import { IFetchQuery } from '@/core/language/IFetchQuery';

export class DuckdbDataSource extends TabularDataSource {
  private _tr: SqlTranslator;
  public readonly opts: Required<DuckOptions>;
  private _conn: AsyncDuckDBConnection | null = null;
  private db: AsyncDuckDB | null = null;

  constructor(name: string, duckOpts: DuckOptions) {
    super(name);
    this._tr = new SqlTranslator();
    this.opts = {
      supportedTypes: [".csv", ".parquet"],
      batchSize: 10000,
      defaultLimit: 1000,
      extensions: [],
      ...duckOpts,
    };
  }

  public async init() {
    this.db = await initDuckdb()
  }

  public async test(): Promise<void> {
    if (!this._conn) {
      await this.connect();
      return;
    }
    await this.queryNative('SELECT 1');
  }

  public async connect(): Promise<void> {
    if (!this.db) await this.init();
    if (!this.db) throw Error("db could not be initialized");
    this._conn = await this.db.connect();
    if (!this._conn) throw Error("duckdb: Failed to connect");
    await this.test();
    await this.loadExtensions();
  }

  private async loadExtensions(): Promise<void> {
    for (const ext of this.opts.extensions ?? []) {
      // const res = await this.queryNative(`INSTALL ${ext}\nLOAD ${ext}`);
      // console.log(`Loaded: ${ext}`, res);
    }
  }

  private async *executeNativeBatch(query: string): AsyncGenerator<ITabularResultSet> {
    if (!this._conn) await this.connect();
    if (!this._conn) return;
    const res = await this._conn.query(query);
    let count = 0;
    for await (const batch of res.batches) {
      const res = this.transformBatch(batch);
      if (count + res.values.length > this.opts.batchSize) {
        console.log("Slicing: ", count, this.opts.batchSize, batch, res);
        res.values = res.values.slice(0, this.opts.batchSize - count);
      }
      count = count + res.values.length;
      yield res;
    }
  }

  public async importFile(file: FileSystemReference) {
    if (!this.db) throw Error("db is not initialized correctly");
    if (file.type === "folder") {
      console.log("dirhandle: ", file.handle);
      for (const fil of file.children) {
        await this.importFile(fil);
      }
      return;
    }
    else if (!file.handle) return;

    // return if file type is not supported
    else if (this.opts.supportedTypes.filter(t => file.name.toLowerCase().endsWith(t)).length === 0) {
      console.log(`Skipping file: ${file.path}`);
    }
    else {
      console.log("Registering: ", file.path, file);
      await this.db.registerFileHandle(file.path, await file.handle.getFile(), DuckDBDataProtocol.BROWSER_FILEREADER, true);
    }
  }

  public async dropFile(file: FileSystemReference) {
    if (!this.db) throw Error("db is not initialized correctly");
    await this.db.dropFile(file.path);
  }

  public async reset() {
    if (!this.db) throw Error("db is not initialized correctly");
    await this.db.dropFiles();
  }

  public async listFiles() {
    if (!this.db) throw Error("db is not initialized correctly");
    return await this.db.globFiles('*');
  }

  public async importRemoteFile(url: string) {
    if (!this.db) throw Error("db is not initialized correctly");
    await this.db.registerFileURL(url, url, DuckDBDataProtocol.HTTP, false);
  }


  getJsonType(type: any) {
    if (arrow.DataType.isInt(type)) return "number";
    if (arrow.DataType.isFloat(type)) return "number";
    if (arrow.DataType.isDecimal(type)) return "number";
    if (arrow.DataType.isBool(type)) return "boolean";
    if (arrow.DataType.isDate(type)) return "datetime";
    return "string";
  }

  private transformBatch(batch: any) {
    const items: any[] = [];
    const columns: IFieldInfo[] = [];
    for (const col of batch.schema.fields) {
      columns.push({
        name: col.name,
        type: this.getJsonType(col.type),
      });
    }
    for (let i = 0; i < batch.numRows; i++) {
      items.push({ _index: i, ...batch.get(i).toJSON() });
    }
    return {
      columns: columns,
      values: items,
    }
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

  public async queryNative(query: string) {
    let values: any[] = [];
    let columns: IFieldInfo[] = [];
    for await (const batch of this.executeNativeBatch(query)) {
      values = values.concat(batch.values);
      columns = batch.columns;
    }
    return {
      columns,
      values
    }
  }

  public async query(params: ITabularExecuteOpts, limit?: number, offset?: number) {
    if (!offset) offset = 0;
    if (!limit) limit = this.opts.defaultLimit;
    if (params.rawQuery != null && limit != null && offset != null) {
      // const raw = this.addLimit(params.rawQuery, limit, offset);
      return await this.queryNative(params.rawQuery);
    }
    if (!params.query) throw Error("Query must be provided");
    const sql = this._tr.translate(params.query, limit, offset);
    console.log(sql);
    return await this.queryNative(sql);
  }

  // public async execute(params: ITabularExecuteOpts): Promise<ITabularResultSet> {
  //   // const sql = this._tr.translate(params.query);
  //   throw Error('Not implemented');
  //   // let results = await this.query(sql);
  //   // return results;
  //   // await this.queryAsync(sql);
  //   // return mapNativeToResultSet(results.recordset, results.recordset.columns);
  // }


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
    const infos: { [key: string]: ITableInfo } = {};
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
}

export interface DuckOptions {
  batchSize?: number;
  extensions?: string[];
  supportedTypes?: string[];
  defaultLimit?: number;
}
