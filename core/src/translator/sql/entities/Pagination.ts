import type { ISerializable } from '../ISerializable';
import type { ISqlConfig } from '../ISqlConfig';

export class Pagination implements ISerializable {
  cfg: ISqlConfig;
  limit: number;
  offset: number;
  preview: boolean;

  constructor(cfg: ISqlConfig, opts?: PaginationOpts) {
    this.cfg = cfg;
    const defOpts = { limit: 200, offset: 0, preview: false };
    opts = { ...defOpts, ...opts };
    this.limit = opts.limit as any;
    this.offset = opts.offset as any;
    this.preview = opts.preview as any;
  }

  setPage(limit: number, offset: number) {
    this.limit = limit;
    this.offset = offset;
  }

  next() {
    this.offset += this.limit;
  }

  serialize() {
    switch (this.cfg.PAGINATION_SYNTAX) {
      case "LIMIT_SKIP":
        return `LIMIT ${this.limit},${this.offset}`;        
      case "OFFSET_LIMIT":
        return `OFFSET ${this.offset} LIMIT ${this.limit}`;
      case 'OFFSET_NEXT':
        return `ORDER BY 1\nOFFSET ${this.offset} ROWS FETCH NEXT ${this.limit} ROWS ONLY`;

      default:
        break;
    }
    throw Error("Unsupported PAGINATION_SYNTAX: " + this.cfg.PAGINATION_SYNTAX);
  }
}

export interface PaginationOpts {
  limit?: number;
  offset?: number;
  preview?: boolean;
}
