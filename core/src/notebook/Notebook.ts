import { TabularDataSource } from '@/entities/tabular/TabularDataSource';
import { NotebookCell } from "@/notebook/NotebookCell";
import { randomUUID } from "crypto";


export interface IUserConfig {
    previewLimit?: number;
}

export interface INotebookConfig extends IUserConfig {
    previewLimit?: number;
}

export class Notebook {
    cells: NotebookCell[] = [];
    id: string;
    dataSource?: TabularDataSource;
    config: INotebookConfig;

    constructor(id?: string, config?: INotebookConfig, dataSource?: TabularDataSource) {
        this.id = id ?? randomUUID();
        this.dataSource = dataSource;
        this.config = config ?? {};
    }
}
