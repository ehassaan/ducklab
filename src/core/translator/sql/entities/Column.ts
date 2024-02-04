
import type { ICalculatedColumn, IExpression, IPlainField } from '@/core/language/IExpression';
import type { ISqlConfig } from '../ISqlConfig';
import { CalculatedColumn } from './CalculatedColumn';
import { PlainColumn } from './PlainColumn';

export function parseColumn(col: IExpression, cfg: ISqlConfig): PlainColumn | CalculatedColumn {
  if ('expression' in col) {
    return new CalculatedColumn(col as ICalculatedColumn, cfg);
  } else {
    return new PlainColumn(col as IPlainField, cfg);
  }
}
