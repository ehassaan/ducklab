
import * as vscode from "vscode";
import { INotebookSerializer, Notebook } from '@ducklab/core';
import { CellType, NotebookCell } from '@ducklab/core';

export class NotebookSerializer implements vscode.NotebookSerializer {

  serializer: INotebookSerializer;

  languageMap = {
    sql: CellType.SQL_RAW,
    "sql-view": CellType.SQL_VIEW,
    plaintext: CellType.TEXT,
    markdown: CellType.MD
  };

  cellTypeMap = {
    SQL_RAW: "sql",
    SQL_VIEW: "sql-view",
    TEXT: "plaintext",
    MD: "markdown"
  };

  constructor(serializer: INotebookSerializer) {
    this.serializer = serializer;
  }

  private createCellData(cell: NotebookCell): vscode.NotebookCellData {
    let cellKind = cell.type === CellType.MD ? vscode.NotebookCellKind.Markup : vscode.NotebookCellKind.Code;


    let languageId;
    if (!(cell.type in this.cellTypeMap)) {
      languageId = CellType.TEXT;
    }
    else {
      languageId = this.cellTypeMap[cell.type];
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
    console.log("Loaded: ", nbData);
    return nbData;
  }

  async serializeNotebook(
    data: vscode.NotebookData,
    _token: vscode.CancellationToken
  ): Promise<Uint8Array> {

    let notebook = new Notebook();
    for (let i = 0; i < data.cells.length; i++) {
      let name = data.cells[i].metadata?.name ?? 'unnamed';
      let cellType;
      if (!(data.cells[i].languageId in this.languageMap)) {
        cellType = CellType.TEXT;
      }
      else {
        cellType = this.languageMap[data.cells[i].languageId];
      }
      let cell = new NotebookCell(i.toString(), name, notebook, data.cells[i].value, cellType);
      notebook.cells.push(cell);
    }

    try {
      let content = this.serializer.serialize(notebook);
      console.log("Saving:\n", notebook, content);

      return new TextEncoder().encode(content);
    }
    catch (e) {
      console.error("Error: ", e);
    }
    return new TextEncoder().encode("");

  }
}

