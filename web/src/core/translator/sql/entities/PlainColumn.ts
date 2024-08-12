import type { IPlainField } from '@/core/language/IExpression';
import type { ISerializable } from '../ISerializable';
import type { ISqlConfig } from '../ISqlConfig';

export class PlainColumn implements ISerializable {
  column: string;
  // table?: string;
  namespace?: string[];
  alias?: string;
  cfg: ISqlConfig;

  constructor(options: IPlainField, cfg: ISqlConfig) {
    this.column = options.name;
    // this.table = options.entity;
    this.namespace = options.namespace;
    this.alias = options.alias;
    this.cfg = cfg;
  }

  serialize(): string {
    const parts = [];
    if (this.namespace && this.namespace.length > 0) {
      for (const p of this.namespace) parts.push(this.cfg.quote(p));
    }
    // if (this.table) {
    //   parts.push(this.cfg.quote(this.table));
    // }
    parts.push(this.cfg.quote(this.column));

    return this.cfg.combine(parts);
  }
}
