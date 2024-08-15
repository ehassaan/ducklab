import type { ICalculatedColumn } from '@/language/IExpression';
import type { ISerializable } from '../ISerializable';
import type { ISqlConfig } from '../ISqlConfig';

export class CalculatedColumn implements ISerializable {
  expression: string;
  alias?: string;
  cfg: ISqlConfig;

  constructor(options: ICalculatedColumn, cfg: ISqlConfig) {
    this.expression = options.expression;
    this.alias = options.alias;
    this.cfg = cfg;
  }

  serialize(): string {
    return this.expression;
  }
}
