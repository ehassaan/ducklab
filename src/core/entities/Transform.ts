
import type { TabularDataset } from "./tabular/TabularDataset";

export enum TransformType {
  FILTER,
  SORT,
  GROUP,
  JOIN,
  COLUMNS,
}

export abstract class Transform {
  id: string;
  options: any;

  constructor(id: string, options: ITransformOptions) {
    this.options = options;
    this.id = id;
  }

  abstract getExpression(dataset: TabularDataset): string;
}

export interface ITransformOptions {
  type: TransformType;
  parameters: any;
}
