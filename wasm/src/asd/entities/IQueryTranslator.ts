import type { IFetchQuery } from '@/core/language/IFetchQuery';

export interface IQueryTranslator {
  translate(query: IFetchQuery): any;
}
