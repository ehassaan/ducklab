import type { IFetchQuery } from '../../language/IFetchQuery';
import type { TabularDataSource } from './TabularDataSource';
import type { ITableInfo } from './ITableInfo';
import type { IFieldInfo } from './IFieldInfo';
import { IRawQuery } from '@/core/language/IRawQuery';

export class TabularDataset {
  protected _query: IFetchQuery;
  protected _columns: IFieldInfo[];
  protected _datasource: TabularDataSource;
  protected _name: string;

  constructor(name: string, query: IFetchQuery, datasource: TabularDataSource, columns: IFieldInfo[]) {
    this._query = query;
    this._columns = columns;
    this._datasource = datasource;
    this._name = name;
  }

  set name(name: string) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set query(query: IFetchQuery) {
    this._query = query;
  }

  get query() {
    return this._query;
  }

  setSourceQuery(inputQuery: string) {
    this.query.from = { rawQuery: inputQuery };
  }

  getSourceQuery() {
    return (this.query.from as IRawQuery).rawQuery;
  }

  setSort(sortMap: [{ key: string, order: "asc" | "desc" }]) {
    this.query.orderBy = [];
    for (const s of sortMap) {
      this.query.orderBy.push({
        column: { name: s.key },
        direction: s.order
      })
    }
  }

  get dataSource(): TabularDataSource {
    return this._datasource as TabularDataSource;
  }

  set dataSource(source: TabularDataSource) {
    this._datasource = source;
  }

  // async fetchData(): Promise<ITabularResultSet> {
  //   let results = await this.dataSource.query({
  //     query: this.query,
  //   });
  //   return results;
  // }

  async fetchPage(limit?: number, offset?: number) {
    await this.dataSource.createView(this.name, this.query);
    const results = await this.dataSource.query(
      {
        query: {
          fields: [{ expression: "*" }],
          from: { name: this.name, namespace: [] },
        },
      },
      limit,
      offset,
    );
    return results;
  }

  async info(): Promise<ITableInfo> {
    const schema = await this.dataSource.query({ rawQuery: this.query }, 1, 0);
    const query: IFetchQuery = JSON.parse(JSON.stringify(this.query));

    query.fields = [
      {
        expression: 'count(1)',
        alias: 'count',
      },
    ];

    const res = await this.dataSource.query(
      {
        query: query,
      },
      1,
      0,
    );
    return {
      name: this.name,
      schema: schema.columns,
      count: res.values[0][0],
      type: 'duckdb',
      query: this.query,
    };
  }

  toJSON(): ITableInfo {
    return {
      name: this._name,
      schema: this._columns,
      query: this.query,
      type: typeof this.dataSource,
    };
  }

}

