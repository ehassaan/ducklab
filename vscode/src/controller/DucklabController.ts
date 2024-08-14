
import * as vscode from "vscode";
import { DuckdbDataSource } from "@/data/duckdb/DuckdbDataSource";


export class DucklabController implements vscode.NotebookController {

    readonly id = 'ducklab-controller';
    readonly notebookType = 'ducklab';
    readonly supportedLanguages = ['sql'];
    readonly label = 'My Notebook';
    readonly description?: string | undefined;
    readonly detail?: string | undefined;
    readonly supportsExecutionOrder?: boolean | undefined;
    onDidChangeSelectedNotebooks: vscode.Event<{ readonly notebook: vscode.NotebookDocument; readonly selected: boolean; }>;

    private readonly _controller: vscode.NotebookController;
    private _executionOrder = 0;

    ds: DuckdbDataSource;

    constructor() {
        this._controller = vscode.notebooks.createNotebookController(
            this.id,
            this.notebookType,
            this.label
        );
        this.ds = new DuckdbDataSource(this.id, {});

        this._controller.supportedLanguages = this.supportedLanguages;
        this._controller.supportsExecutionOrder = true;

        this.onDidChangeSelectedNotebooks = this._controller.onDidChangeSelectedNotebooks;
    }

    createNotebookCellExecution(cell: vscode.NotebookCell): vscode.NotebookCellExecution {
        return this._controller.createNotebookCellExecution(cell);
    }

    executeHandler(cells: vscode.NotebookCell[], notebook: vscode.NotebookDocument, controller: vscode.NotebookController) {
        for (const cell of cells) {
            this._doExecution(cell);
        }
    }

    interruptHandler(notebook: vscode.NotebookDocument): void | Thenable<void> | undefined {

    }


    updateNotebookAffinity(notebook: vscode.NotebookDocument, affinity: vscode.NotebookControllerAffinity) {
        throw new Error("Method not implemented.");
    }

    dispose(): void {
        this.ds.dispose();
    }

    private async _doExecution(cell: vscode.NotebookCell): Promise<void> {
        const execution = this.createNotebookCellExecution(cell);
        execution.executionOrder = ++this._executionOrder;
        execution.start(Date.now()); // Keep track of elapsed time to execute cell.

        const results = await this.ds.queryNative(cell.document.getText());

        // let text = `<table><thead>${results.columns.map(c => '<th>' + c + '</th>').join("\n")}</thead>

        // </table>`;

        // for (const row of results.values) {
        //     for (const col of results.columns) {
        //         text += "<td>"
        //     }
        // }

        execution.replaceOutput([
            new vscode.NotebookCellOutput([
                vscode.NotebookCellOutputItem.json(results, "application/x-table")
            ],)
        ]);
        execution.end(true, Date.now());
    }
}