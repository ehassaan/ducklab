
import type { IEntity } from "./IEntity";
import type { ICalculatedColumn, IPlainField } from "./IExpression";
import type { IFilterGroup } from "./IFilter";
import { IOrderBy } from "./IOrderBy";
import { IRawQuery } from "./IRawQuery";


export interface IFetchQuery {
  fields: (IPlainField|ICalculatedColumn)[];
  filters?: IFilterGroup;
  from: IEntity | IRawQuery;
  orderBy?: IOrderBy[];
}
