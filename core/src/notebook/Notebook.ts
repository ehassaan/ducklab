import { TabularDataSource } from '@/entities/tabular/TabularDataSource';
import { NotebookCell } from "@/notebook/NotebookCell";
import crypto from "crypto";


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
        if (window && window.crypto) {
            this.id = id ?? window.crypto.randomUUID();
        }
        else {
            this.id = id ?? crypto.randomUUID();
        }
        this.dataSource = dataSource;
        this.config = config ?? {};
    }
}
