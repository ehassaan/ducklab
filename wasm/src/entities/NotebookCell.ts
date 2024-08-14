import { TabularDataset, ITabularResultSet } from "@ducklab/core";
import { DuckdbDataSource } from "@/entities/duckdb_wasm/DuckdbDataSource";

export enum CellType {
    SQL_VIEW = 'SQL_VIEW',
    SQL_RAW = 'SQL_RAW'
}

export class NotebookCell {
    // notebook: Notebook;
    dataset: TabularDataset;
    type: CellType = CellType.SQL_VIEW;
    input = "";
    readonly id: string;
    dataSource: DuckdbDataSource;
    limit?: number;

    constructor(id: string, dataSource: DuckdbDataSource, dataset: TabularDataset) {
        this.id = id;
        this.dataset = dataset;
        this.dataSource = dataSource;
        this.input = dataset.getSourceQuery();
        this.limit = dataSource.opts.previewLimit;
    }

    setInput(input: string) {
        this.input = input;
        if (this.type === CellType.SQL_VIEW) {
            this.dataset.setSourceQuery(input);
        }
    }

    setType(type: CellType) {
        this.type = type;
        this.limit = type === CellType.SQL_VIEW ? this.dataSource.opts.previewLimit : this.dataSource.opts.rawLimit;
    }

    async execute() {
        let items: ITabularResultSet = { columns: [], values: [] };
        if (this.type === CellType.SQL_RAW) {
            items = await this.dataset.dataSource.query({
                rawQuery: this.input
            }, this.limit, 0);
        }
        else {
            items = await this.dataset.fetchPage(this.limit, 0);
        }
        console.log("Execution result: ", items);
        return items;
    }
}