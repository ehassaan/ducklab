import { TabularDataSource } from '@/entities/tabular/TabularDataSource';
import { NotebookCell } from "@/notebook/NotebookCell";

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
        if (typeof window !== "undefined" && window.crypto) {
            this.id = id ?? window.crypto.randomUUID();
        }
        else {
            this.id = id ?? require('crypto').randomUUID();
        }
        this.dataSource = dataSource;
        this.config = config ?? {};
    }
}
