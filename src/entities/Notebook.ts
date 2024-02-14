import { NotebookCell } from "./NotebookCell";

export class Notebook {
    cells: NotebookCell[] = [];
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}