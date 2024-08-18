import { INotebookSerializer } from '@/notebook/INotebookSerializer';
import { Notebook } from '@/notebook/Notebook';
import { CellType, NotebookCell } from '@/notebook/NotebookCell';


export class IsqlSerializer implements INotebookSerializer {

    private serializeCell(cell: NotebookCell) {
        let content = `-- %% ${cell.type} | ${cell.id}\n${cell.input}\n`;
        return content;
    }

    serialize(notebook: Notebook): string {
        let code = "";
        for (let cell of notebook.cells) {
            code += this.serializeCell(cell) + '\n';
        }
        return code;
    }

    parse(content: string, id?: string): Notebook {

        let cells: NotebookCell[] = [];

        let notebook = new Notebook(id);

        for (const cellText of content.split("-- %%")) {
            if (cellText === "") continue;

            let result: { name: string, content: string, type: CellType; };

            try {
                result = this.parseCell(cellText);
            }
            catch (e) {
                console.error("Failed to parse cell: ", e);
                result = {
                    content: cellText,
                    name: 'MALFORMED',
                    type: CellType.SQL_RAW
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
        let cellType = CellType.SQL_VIEW;
        const firstLine = cellText.split("\n")[0];
        const parts = firstLine.slice(5).split("|");
        console.log("Header: " + firstLine);

        if (parts.length < 2) throw Error("Cell identifiers are malformed");

        if (parts[0].trim() == CellType.SQL_RAW) {
            cellType = CellType.SQL_RAW;
        }
        else if (parts[0].trim() == CellType.SQL_VIEW) {
            cellType = CellType.SQL_VIEW;
        }
        else throw Error("Cell identifiers are malformed");

        const content = cellText.slice(firstLine.length + 1);
        return {
            content: content.slice(0, content.length - 1),
            name: parts[1].trim(),
            type: cellType
        };
    }
}