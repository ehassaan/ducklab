
export interface IExpression {
  alias?: string;
  // expression?: string;
}

export interface IPlainField extends IExpression {
  name: string;
  // entity: string;
  namespace?: string[];
}

export interface ICalculatedColumn extends IExpression {
  // table?: string;
  // schema?: string;
  expression: string;
}
