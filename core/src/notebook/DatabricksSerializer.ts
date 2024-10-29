import { INotebookSerializer } from '@/notebook/INotebookSerializer';
import { Notebook } from '@/notebook/Notebook';
import { CellType, NotebookCell } from '@/notebook/NotebookCell';


export class DatabricksSerializer implements INotebookSerializer {

    linePrefix = "# MAGIC";
    cellHeader = {
        [CellType.MD]: "# MAGIC %md\n",
        [CellType.SQL_RAW]: "# MAGIC %sql\n",
        [CellType.SQL_VIEW]: "# MAGIC %sql\n",
        [CellType.TEXT]: "# MAGIC %md\n",
        [CellType.PYTHON]: "",
    };
    cellSeparator = "# COMMAND ----------";
    nbHeader = "# Databricks notebook source";

    private serializeCell(cell: NotebookCell) {
        let content = '';

        if (cell.type != CellType.PYTHON) {

            content = cell.input.split("\n").map(line => {
                // if (line === "") return this.linePrefix;
                return `${this.linePrefix} ${line}`;
            }).join("\n");

            content = this.cellHeader[cell.type] + content;
        }
        else {
            content = cell.input;
        }

        return content;
    }

    serialize(notebook: Notebook): string {
        let code = notebook.cells.map(cell => this.serializeCell(cell)).join(`\n\n${this.cellSeparator}\n\n`);
        code = `${this.nbHeader}\n${code}`;
        return code;
    }

    parse(content: string, id?: string): Notebook {

        let cells: NotebookCell[] = [];
        if (!content.startsWith(this.nbHeader)) {
            throw Error("Not a valid databricks notebook file");
        }
        content = content.replaceAll("\r\n", "\n");
        content = content.substring(content.indexOf("\n"));

        let notebook = new Notebook(id);

        for (let cellText of content.split(`\n${this.cellSeparator}\n`)) {

            if (cellText.startsWith("\n")) {
                cellText = cellText.substring(1);
            }
            if (cellText.endsWith("\n")) {
                cellText = cellText.substring(0, cellText.length - 1);
            }

            let result: { name: string, content: string, type: CellType; };

            try {
                result = this.parseCell(cellText);
            }
            catch (e) {
                console.error("Failed to parse cell: ", e);
                result = {
                    content: cellText,
                    name: 'MALFORMED',
                    type: CellType.TEXT
                };
            }
            const cell = new NotebookCell(Math.random().toString(), result.name, notebook, result.content);
            cell.setType(result.type);
            cells.push(cell);
        }
        notebook.cells = cells;
        return notebook;
    }

    private parseCell(cellText: string) {
        let cellType = CellType.PYTHON;

        if (cellText.startsWith(this.cellHeader[CellType.SQL_RAW])) {
            cellType = CellType.SQL_RAW;
            cellText = cellText.substring(this.cellHeader[CellType.SQL_RAW].length);
            cellText = this.removePrefix(cellText);
        }
        else if (cellText.startsWith(this.cellHeader[CellType.MD])) {
            cellType = CellType.MD;
            cellText = cellText.substring(this.cellHeader[CellType.MD].length);
            cellText = this.removePrefix(cellText);
        }

        return {
            content: cellText,
            name: "",
            type: cellType
        };
    }

    private removePrefix(cellText: string) {

        cellText = cellText.split("\n").map(line => {
            if (line.startsWith(`${this.linePrefix} `)) return line.substring(this.linePrefix.length + 1);
            if (line.startsWith(`${this.linePrefix}`)) return line.substring(this.linePrefix.length);
            return line;
        }).join("\n");

        return cellText;
    }
}