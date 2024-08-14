import { ComparisonOp, type IFilter } from '@/language/IFilter';
import type { ISqlConfig } from './ISqlConfig';

export function prepareFilters(filters: IFilter[], cfg: ISqlConfig, prepareCol: any) {
  let query = '';
  const conditionMap = {
    [ComparisonOp.Equal]: cfg.OP_EQ,
    [ComparisonOp.LessThan]: cfg.OP_LESS,
    [ComparisonOp.LessEqual]: cfg.OP_LEQ,
    [ComparisonOp.GreaterThan]: cfg.OP_GRT,
    [ComparisonOp.GreaterEqual]: cfg.OP_GEQ,
    [ComparisonOp.NotEqual]: cfg.OP_NEQ,
  };

  for (const filt of filters) {
    query += prepareCol({ ...filt.left, alias: null }) + ' ' + conditionMap[filt.condition];
    if (typeof filt.right === 'string') {
      query += ' ' + filt.right;
    } else {
      query += ' ' + prepareCol({ ...filt.right, alias: null });
    }
    query += ' ' + cfg.OP_AND + ' ';
  }

  return query.substring(0, query.length - cfg.OP_AND.length - 2);
}
