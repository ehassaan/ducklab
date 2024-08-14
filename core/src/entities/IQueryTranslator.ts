import type { IFetchQuery } from '@/language/IFetchQuery';

export interface IQueryTranslator {
  translate(query: IFetchQuery): any;
}
