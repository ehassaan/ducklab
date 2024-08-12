export interface ISqlConfig {
  quote: (field: string) => string;
  combine: (fields: string[]) => string;
  enclose: (query: string) => string;
  SELECT: string;
  AS: string;
  WHERE: string;
  ORDERBY: string;
  FROM: string;
  SEP: string;
  PAGINATION_SYNTAX: "OFFSET_LIMIT" | "LIMIT_SKIP" | "OFFSET_NEXT",
  OP_EQ: string;
  OP_NEQ: string;
  OP_LESS: string;
  OP_LEQ: string;
  OP_GRT: string;
  OP_GEQ: string;
  OP_AND: string;
  OP_OR: string;
}
