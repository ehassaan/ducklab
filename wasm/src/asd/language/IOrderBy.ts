import { ICalculatedColumn, IPlainField } from "./IExpression";

export interface IOrderBy {
  column: ICalculatedColumn | IPlainField;
  direction: "asc" | "desc";
}
