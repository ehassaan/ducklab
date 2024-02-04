import type { IFieldInfo } from "./IFieldInfo";

export interface ITabularResultSet {
    columns: IFieldInfo[];
    values: any[];
}
