import type { IFetchQuery } from '@/core/language/IFetchQuery';
import type { ITableInfo } from './ITableInfo';
import type { ITabularResultSet } from './ITabularResultSet';

export abstract class TabularDataSource {
  constructor(name: string) { }

  // abstract preview(params: ITabularExecuteOpts, limit: number, offset: number): Promise<ITabularResultSet>;
  // abstract fetch(): Promise<ITabularResultSet>;
  abstract query(params: ITabularExecuteOpts, limit: number, offset: number): Promise<ITabularResultSet>;
  abstract queryNative(query: string): Promise<ITabularResultSet>;
  abstract createView(name: string, query: IFetchQuery): Promise<void>;
  abstract getDatasets(): Promise<ITableInfo[]>;
}


export interface ITabularExecuteOpts {
  query?: IFetchQuery;
  rawQuery?: any;
}
