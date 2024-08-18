
import * as vscode from "vscode";
import { INotebookSerializer, Notebook } from '@ducklab/core';
import { CellType, NotebookCell } from '@ducklab/core';


export class NotebookSerializer implements vscode.NotebookSerializer {

  serializer: INotebookSerializer;

  constructor(serializer: INotebookSerializer) {
    this.serializer = serializer;
  }

  private createCellData(cell: NotebookCell): vscode.NotebookCellData {
    let cellKind = cell.type === CellType.MD ? vscode.NotebookCellKind.Markup : vscode.NotebookCellKind.Code;

    let languageId = 'plaintext';

    switch (cell.type) {
      case CellType.MD:
        languageId = 'markdown';
        break;
      case CellType.SQL_VIEW:
        languageId = 'sql-view';
        break;
      case CellType.SQL_RAW:
        languageId = 'sql';
        break;
      default:
        languageId = 'plaintext';
    }
    let cellData = new vscode.NotebookCellData(cellKind, cell.input, languageId);
    cellData.metadata = {
      id: cell.id,
      name: cell.name,
      type: cell.type
    };
    return cellData;
  }

  async deserializeNotebook(
    content: Uint8Array,
    _token: vscode.CancellationToken
  ): Promise<vscode.NotebookData> {
    var textContent = new TextDecoder().decode(content);

    let notebook = this.serializer.parse(textContent);

    let cells = notebook.cells.map(cell => this.createCellData(cell));

    let nbData = new vscode.NotebookData(cells);
    nbData.metadata = {
      notebook: notebook.id
    };
    return nbData;
  }

  async serializeNotebook(
    data: vscode.NotebookData,
    _token: vscode.CancellationToken
  ): Promise<Uint8Array> {

    let notebook = new Notebook();
    for (let i = 0; i < notebook.cells.length; i++) {
      let name = data.cells[i].metadata?.name ?? 'unnamed';
      let cell = new NotebookCell(i.toString(), name, notebook, data.cells[i].value);
      notebook.cells.push(cell);
    }

    let content = this.serializer.serialize(notebook);

    return new TextEncoder().encode(content);
  }
}

