import type { IFetchQuery } from '@/core/language/IFetchQuery';
import type { IFieldInfo } from "./IFieldInfo";

export interface ITableInfo {
    name: string;
    type: string;
    // format: DatasetFormat;
    namespace?: string[];
    schema: IFieldInfo[];
    count?: number;
    query: IFetchQuery;
    rawQuery?: string;
}

// export enum DatasetFormat {
//     Tabular = 'tabular',
//     Hierarchical = 'hierarchical',
// }
