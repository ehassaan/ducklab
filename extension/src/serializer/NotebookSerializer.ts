
import * as vscode from "vscode";
import { INotebookSerializer, Notebook } from '@ducklab/core';
import { CellType, NotebookCell } from '@ducklab/core';

export class NotebookSerializer implements vscode.NotebookSerializer {

  serializer: INotebookSerializer;

  languageMap = {
    sql: CellType.SQL_RAW,
    "sql-view": CellType.SQL_VIEW,
    plaintext: CellType.TEXT,
    markdown: CellType.MD,
    python: CellType.PYTHON
  };

  cellTypeMap = {
    [CellType.SQL_RAW]: "sql",
    [CellType.SQL_VIEW]: "sql-view",
    [CellType.TEXT]: "plaintext",
    [CellType.MD]: "markdown",
    [CellType.PYTHON]: "python"
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
    console.log(textContent);
    let notebook = this.serializer.parse(textContent);
    console.log("Desierialized: ", notebook.cells);

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
      let langId = data.cells[i].languageId as keyof (typeof this.languageMap);
      if (!(langId in this.languageMap)) {
        cellType = CellType.TEXT;
      }
      else {
        cellType = this.languageMap[langId];
      }
      let cell = new NotebookCell(crypto.randomUUID(), name, notebook, data.cells[i].value, cellType);
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

