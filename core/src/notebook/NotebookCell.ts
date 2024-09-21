import { Notebook } from '@/notebook/Notebook';
import { TabularDataset } from "@/entities/tabular/TabularDataset";
import { ITabularResultSet } from "@/entities/tabular/ITabularResultSet";
import { DataSourceUndefined } from '@/entities/exceptions';


export enum CellType {
    SQL_VIEW = 'SQL_VIEW',
    SQL_RAW = 'SQL_RAW',
    MD = 'MD',
    TEXT = 'TEXT',
    PYTHON = 'PYTHON'
}

export class NotebookCell {
    readonly id: string;
    name: string;
    notebook: Notebook;
    input = "";
    type: CellType = CellType.SQL_VIEW;
    public dataset?: TabularDataset;

    constructor(id: string, name: string, notebook: Notebook, input = "", type = CellType.SQL_VIEW) {
        this.id = id;
        this.name = name;
        this.notebook = notebook;
        this.input = input;
        this.type = type;
    }

    setInput(input: string) {
        this.input = input;
    }

    setType(type: CellType) {
        this.type = type;
    }

    async execute() {
        let items: ITabularResultSet = { columns: [], values: [] };
        if (!this.notebook.dataSource) throw new DataSourceUndefined("Please select DataSource");
        if (this.type === CellType.SQL_RAW) {
            items = await this.notebook.dataSource.query({
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
                }, this.notebook.dataSource, []);
            }
            this.dataset.name = this.name;
            items = await this.dataset.fetchPage(this.notebook.config.previewLimit, 0);
        }
        console.log("Execution result: ", items);
        return items;
    }
}

