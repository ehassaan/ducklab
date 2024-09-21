
import { prepareTable } from './table';
import { encloseParenthesis, quoteDouble } from './helpers/enclose_fields';
import { dotCombine } from './helpers/combine';
import { PlainColumn } from '@/translator/sql/entities/PlainColumn';
import { CalculatedColumn } from '@/translator/sql/entities/CalculatedColumn';
import { FilterGroup } from '@/translator/sql/entities/FilterGroup';
import { Pagination } from '@/translator/sql/entities/Pagination';
import type { ISqlConfig } from './ISqlConfig';
import type { IQueryTranslator } from '@/entities/IQueryTranslator';
import type { IFilterGroup } from '@/language/IFilter';
import type { ICalculatedColumn, IExpression, IPlainField } from '@/language/IExpression';
import type { IFetchQuery } from '@/language/IFetchQuery';
import type { IEntity } from '@/language/IEntity';
import { IRawQuery } from '@/language/IRawQuery';
import { IOrderBy } from '@/language/IOrderBy';

export class SqlTranslator implements IQueryTranslator {
  cfg: ISqlConfig;
  pagination: Pagination;

  constructor(config?: ISqlConfig) {
    this.cfg = {
      quote: quoteDouble,
      combine: dotCombine,
      enclose: encloseParenthesis,
      SELECT: 'SELECT',
      AS: 'AS',
      WHERE: 'WHERE',
      ORDERBY: 'ORDER BY',
      FROM: 'FROM',
      SEP: ',',
      PAGINATION_SYNTAX: "OFFSET_LIMIT",
      OP_EQ: '=',
      OP_NEQ: '!=',
      OP_LESS: '<',
      OP_LEQ: '<=',
      OP_GRT: '>',
      OP_GEQ: '>=',
      OP_AND: 'AND',
      OP_OR: 'OR',
    };

    if (config) this.cfg = { ...this.cfg, ...config };
    this.pagination = new Pagination(this.cfg);
  }

  next() {
    this.pagination.next();
  }

  setPage(limit: number, offset: number) {
    this.pagination.setPage(limit, offset);
  }

  translateChunk() {
    throw new Error('Not implemented');
  }

  translate(query: IFetchQuery, limit?: number, offset?: number): string {
    let sql = '';
    sql = this.prepareQuery(query);
    if (limit != null || offset != null) {
      const page = new Pagination(this.cfg, { limit, offset });
      sql += `\n${page.serialize()}`;
    }
    return sql;
  }

  prepareWhereCond(group: IFilterGroup | undefined): string | null {
    if (!group) return null;
    const grp = new FilterGroup(group, this.cfg);
    return grp.serialize();
  }

  prepareColumn(col: IExpression): string {
    if ('expression' in col) {
      return new CalculatedColumn(col as ICalculatedColumn, this.cfg).serialize();
    } else {
      return new PlainColumn(col as IPlainField, this.cfg).serialize();
    }
  }

  prepareSelectCols(cols: IExpression[]): string {
    let selector = '';
    for (const col of cols) {
      selector += this.prepareColumn(col) + this.cfg.SEP;
    }
    return selector.substring(0, selector.length - this.cfg.SEP.length);
  }

  prepareTableName(table: IEntity): string {
    return prepareTable(table, this.cfg);
  }

  prepareRawQuery(query: IRawQuery) {
    let q = `(${query.rawQuery})`;
    if (query.alias) q += ` ${this.cfg.AS} ${this.cfg.quote(query.alias)}`;
    return q;
  }

  prepareOrderBy(orderby: IOrderBy[] | undefined): string | null {
    if (!orderby || orderby.length === 0) return null;
    let q = '';
    console.log(orderby);
    for (const ord of orderby) {
      q += ` ${this.prepareColumn(ord.column)} ${ord.direction}`;
    }
    return q.trim();
  }

  prepareQuery(qry: IFetchQuery): string {
    let from = '';
    if ('name' in qry.from) from = this.prepareTableName(qry.from);
    else if ('rawQuery' in qry.from) from = this.prepareRawQuery(qry.from);
    else from = this.prepareQuery(qry.from);
    let query = `${this.cfg.SELECT} ${this.prepareSelectCols(qry.fields)}\n${this.cfg.FROM} ${from}`;
    const where = this.prepareWhereCond(qry.filters);
    if (where) {
      query += `\n${this.cfg.WHERE} ${where}`;
    }
    const orderby = this.prepareOrderBy(qry.orderBy);
    if (orderby) {
      query += `\n${this.cfg.ORDERBY} ${orderby}`;
    }
    return query;
  }
}
