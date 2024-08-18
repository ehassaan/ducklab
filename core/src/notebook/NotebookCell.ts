import { Notebook } from '@/notebook/Notebook';
import { TabularDataset } from "@/entities/tabular/TabularDataset";
import { TabularDataSource } from "@/entities/tabular/TabularDataSource";
import { ITabularResultSet } from "@/entities/tabular/ITabularResultSet";
import { DataSourceUndefined } from '@/entities/exceptions';


export enum CellType {
    SQL_VIEW = 'SQL_VIEW',
    SQL_RAW = 'SQL_RAW',
    MD = 'MD',
    TEXT = 'TEXT'
}

export class NotebookCell {
    readonly id: string;
    name: string;
    notebook: Notebook;
    input = "";
    type: CellType = CellType.SQL_VIEW;
    private dataset?: TabularDataset;
    private dataSource?: TabularDataSource;

    constructor(id: string, name: string, notebook: Notebook, input = "") {
        this.id = id;
        this.name = name;
        this.notebook = notebook;
        this.input = input;
        this.dataSource = notebook.dataSource;
    }

    setInput(input: string) {
        this.input = input;
    }

    setType(type: CellType) {
        this.type = type;
        // this.limit = type === CellType.SQL_VIEW ? this.dataSource.opts.previewLimit : this.dataSource.opts.rawLimit;
    }

    async execute() {
        let items: ITabularResultSet = { columns: [], values: [] };
        if (!this.dataSource) throw new DataSourceUndefined("Please select DataSource");
        if (this.type === CellType.SQL_RAW) {
            items = await this.dataSource.query({
                rawQuery: this.input
            }, this.notebook.config.previewLimit, 0);
        }
        else {
            if (!this.dataset) {
                this.dataset = new TabularDataset(this.name, {
                    fields: [{
                        expression: '*'
                    }],
                    from: {
                        rawQuery: this.input
                    }
                }, this.dataSource, []);
            }
            items = await this.dataset.fetchPage(this.notebook.config.previewLimit, 0);
        }
        console.log("Execution result: ", items);
        return items;
    }
}

