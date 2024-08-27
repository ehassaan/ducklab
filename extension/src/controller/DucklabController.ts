
import * as vscode from "vscode";
import { DuckdbDataSource } from '../data/duckdb/DuckdbDataSource';
import { IFieldInfo } from '@ducklab/core';

// polyfill
(BigInt.prototype as any).toJSON = function () {
    return this.toString();
};


export class DucklabController {

    readonly id = 'ducklab-controller';
    readonly notebookType = 'isql';
    readonly supportedLanguages = ['sql', 'markdown', 'plaintext'];
    readonly label = 'In-Memory';
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
        console.log("Initialized: ", this);
        this.ds = new DuckdbDataSource(this.id, {});

        this._controller.supportedLanguages = this.supportedLanguages;
        this._controller.supportsExecutionOrder = true;

        this.onDidChangeSelectedNotebooks = this._controller.onDidChangeSelectedNotebooks;
        this._controller.executeHandler = this.executeHandler.bind(this);
    }

    executeHandler(cells: vscode.NotebookCell[], notebook: vscode.NotebookDocument, controller: vscode.NotebookController) {
        for (const cell of cells) {
            this._doExecution(cell);
        }
    }

    dispose(): void {
        this.ds.dispose();
    }

    private getRow(cols: IFieldInfo[], obj: any) {
        let row = "";
        for (let k of cols) {
            row += `<td>${obj[k.name]}</td>`;
        }
        return `<tr>${row}</tr>`;
    }

    private async _doExecution(cell: vscode.NotebookCell): Promise<void> {
        const execution = this._controller.createNotebookCellExecution(cell);
        execution.executionOrder = ++this._executionOrder;
        execution.start(Date.now()); // Keep track of elapsed time to execute cell.

        try {
            const results = await this.ds.queryNative(cell.document.getText());
            console.log("results: ", results.values.slice(0, 10));

            let text = `<table>
            <thead>${results.columns.map(c => '<th>' + c.name + '</th>').join("\n")}</thead>
            <tbody>${results.values.map(row => this.getRow(results.columns, row)).join("\n")}</tbody>
            </table>`;

            execution.replaceOutput([
                new vscode.NotebookCellOutput([
                    vscode.NotebookCellOutputItem.text(text, "text/html")
                ])
            ]);
            execution.end(true, Date.now());
        }

        catch (e) {
            console.log("Exception during execution: ", e);
            execution.replaceOutput(new vscode.NotebookCellOutput([
                vscode.NotebookCellOutputItem.error(new Error(e.message))
            ]));
            execution.end(false, Date.now());
        }

    }
}