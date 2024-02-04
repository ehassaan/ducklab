import type { IExpression } from '../../../language/IExpression';
import { ComparisonOp, LogicalOp, type IFilterGroup } from '../../../language/IFilter';
import type { ISerializable } from '../ISerializable';
import type { ISqlConfig } from '../ISqlConfig';
import { parseColumn } from './Column';

export class FilterGroup implements ISerializable {
  filt: IFilterGroup;
  cfg: ISqlConfig;

  constructor(filters: IFilterGroup, cfg: ISqlConfig) {
    this.filt = filters;
    this.cfg = cfg;
  }

  private prepareGroup(group: IFilterGroup): string | null {
    if (!group || !group.groups || group.groups.length === 0) {
      return null;
    }
    const lMap = {
      [LogicalOp.And]: this.cfg.OP_AND,
      [LogicalOp.Or]: this.cfg.OP_OR,
    };
    const groups = [];
    for (const grp of group.groups) {
      let grpQ: string | null = '';
      if ('left' in grp) {
        grpQ = this.prepareCondition(grp.left, grp.right, grp.condition);
      } else {
        grpQ = this.prepareGroup(grp);
        if (!grpQ) throw new Error(`Invalid filter group ${group}`);
      }
      groups.push(this.cfg.enclose(grpQ));
    }
    const query = groups.join(` ${lMap[group.op]} `);
    return query;
  }

  private prepareCondition(left: IExpression, right: IExpression, op: ComparisonOp) {
    const cMap = {
      [ComparisonOp.Equal]: this.cfg.OP_EQ,
      [ComparisonOp.LessThan]: this.cfg.OP_LESS,
      [ComparisonOp.LessEqual]: this.cfg.OP_LEQ,
      [ComparisonOp.GreaterThan]: this.cfg.OP_GRT,
      [ComparisonOp.GreaterEqual]: this.cfg.OP_GEQ,
      [ComparisonOp.NotEqual]: this.cfg.OP_NEQ,
    };
    const lCol = parseColumn(left, this.cfg);
    const rCol = parseColumn(right, this.cfg);

    const query = `${lCol.serialize()} ${cMap[op]} ${rCol.serialize()}`;
    return query;
  }

  serialize() {
    return this.prepareGroup(this.filt);
  }
}
