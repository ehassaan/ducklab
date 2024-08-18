import { Notebook } from '@/notebook/Notebook';

export interface INotebookSerializer {
    serialize(notebook: Notebook): string;
    parse(content: string, id?: string): Notebook;
}