import type { IExpression } from './IExpression';

export interface IFilter {
  left: IExpression;
  right: IExpression;
  condition: ComparisonOp;
}

export interface IFilterGroup {
  op: LogicalOp;
  groups: (IFilter | IFilterGroup)[];
}

export enum ComparisonOp {
  LessThan = 'lt',
  GreaterThan = 'gt',
  Equal = 'eq',
  GreaterEqual = 'ge',
  LessEqual = 'le',
  NotEqual = 'ne',
}

export enum LogicalOp {
  And = 'and',
  Or = 'or',
  // Not="not"
}
