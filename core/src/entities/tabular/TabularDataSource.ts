import type { IFetchQuery } from '@/language/IFetchQuery';
import type { ITableInfo } from './ITableInfo';
import type { ITabularResultSet } from './ITabularResultSet';

export abstract class TabularDataSource {

  name: string;

  constructor(name: string) {
    this.name = name;
  }

  // abstract preview(params: ITabularExecuteOpts, limit: number, offset: number): Promise<ITabularResultSet>;
  // abstract fetch(): Promise<ITabularResultSet>;
  abstract query(params: ITabularExecuteOpts, limit?: number, offset?: number): Promise<ITabularResultSet>;
  abstract queryNative(query: string): Promise<ITabularResultSet>;
  abstract createView(name: string, query: IFetchQuery): Promise<void>;
  abstract getDatasets(): Promise<ITableInfo[]>;
}


export interface ITabularExecuteOpts {
  query?: IFetchQuery;
  rawQuery?: any;
}
