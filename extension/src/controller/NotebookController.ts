
import * as vscode from "vscode";
import { IFieldInfo, ITabularResultSet } from '@ducklab/core';
import { PythonExtension, ResolvedEnvironment } from '@vscode/python-extension';
import { IKernelSpec, KernelType } from './python/IKernelSpec';
import { KernelManager } from './python/KernelManager';
import { IRunningKernel } from './IRunningKernel';
import { MessageType, OutputMessage } from './messaging';
import { IDisposable } from '@/disposable';


function fromEnvToSpec(env: ResolvedEnvironment): IKernelSpec {
    return {
        id: env.id,
        label: `${env.environment.name} (${env.version.major}.${env.version.minor})`,
        envType: env.environment.type,
        type: KernelType.IPYKERNEL,
        path: env.path,
        version: env.version
    };
}

export class NotebookController implements IDisposable {

    readonly id = 'ducklab-controller';
    readonly notebookType = 'isql';
    readonly supportedLanguages = ['sql', 'markdown', 'plaintext', 'python'];
    readonly label: string = 'Ducklab';
    readonly description?: string | undefined;
    readonly detail?: string | undefined;
    readonly supportsExecutionOrder = true;
    readonly kernelManager = new KernelManager();
    private kernelMap: { [nbId: string]: string; } = {};

    onDidChangeSelectedNotebooks: vscode.Event<{ readonly notebook: vscode.NotebookDocument; readonly selected: boolean; }>;

    private readonly _controller: vscode.NotebookController;
    private _executionOrder = 0;
    private _python: PythonExtension;

    constructor() {
        console.log("SelectionController constructor");

        try {
            this._controller = vscode.notebooks.createNotebookController(this.id, this.notebookType, this.label,
                (cells, notebook, controller) => {
                    return this.executeHandler(cells, notebook, controller);
                }
            );
            this._controller.interruptHandler = (notebook) => {
                if (this.kernelMap[notebook.uri.fsPath]) {
                    this.kernelManager.get(this.kernelMap[notebook.uri.fsPath])?.interrupt();
                }
            };
            this._controller.onDidChangeSelectedNotebooks(({ notebook, selected }) => {
                console.log("NotebookSelection: ", selected, notebook);
            });
            this._controller.supportsExecutionOrder = this.supportsExecutionOrder;
            this._controller.supportedLanguages = this.supportedLanguages;
            vscode.commands.registerCommand("ducklab.listKernels", () => this.requestKernelSelection());
            this.listenEnvironmentChangeEvent();
        }
        catch (e) {
            console.log(e);
        }
    }

    public getInnerController() {
        return this._controller.id;
    }

    private async attachKernel(notebook: vscode.NotebookDocument, spec: IKernelSpec) {
        let paths = Object.keys(this.kernelMap).filter(k => k === notebook.uri.fsPath);
        if (paths.length > 0) {
            this.kernelManager.kill(this.kernelMap[paths[0]]);
            console.log("Disposed kernel: ", paths[0], this.kernelMap[paths[0]]);
        }
        let kernel = await this.kernelManager.launchKernel(spec);
        this.kernelMap[notebook.uri.fsPath] = kernel.id;
        await kernel.waitReady(90);
        console.log("Kernel Ready: ", kernel.status, kernel);
        return kernel;
    }

    async executeHandler(cells: vscode.NotebookCell[], notebook: vscode.NotebookDocument, controller: vscode.NotebookController) {
        console.log("Execute: ", notebook);
        try {
            let kernel = await this.resolveKernel(notebook);
            for (let cell of cells) {
                await this._doExecution(cell, kernel);
            }
        }
        catch (err) {
            console.log("Failed: ", err);
        }
    }

    dispose(): void {
        this._controller.dispose();
        this.kernelManager.dispose();
        // Object.values(this.kernels).map(kernel => kernel.dispose());
    }

    private async listenEnvironmentChangeEvent() {
        if (!this._python) {
            this._python = await PythonExtension.api();
            await this._python.ready;
        }
        this._python.environments.onDidChangeActiveEnvironmentPath(async (ev) => {
            let activeNb = vscode.window.activeNotebookEditor.notebook;
            console.log("Active env change event: ", ev, activeNb);
            if (activeNb.uri.fsPath !== ev.resource.uri.fsPath) {
                return;
            }
            let env = await this._python.environments.resolveEnvironment(ev.path);
            let spec = fromEnvToSpec(env);
            await this.attachKernel(activeNb, spec);
        });
    }

    private async listEnvs() {
        await this._python.environments.refreshEnvironments();
        console.log(this._python.environments.known);
        // let kernels = this._python.environments.known.map(fromEnvToSpec);
        // console.log(kernels);
        return this._python.environments.known;
    }

    private async resolveKernel(notebook: vscode.NotebookDocument) {
        if (notebook.uri.fsPath in this.kernelMap) {
            return this.kernelManager.get(this.kernelMap[notebook.uri.fsPath]);
        }
        if (!this._python) {
            this._python = await PythonExtension.api();
            await this._python.ready;
        }
        let envPath = this._python.environments.getActiveEnvironmentPath(notebook.uri);
        let env = await this._python.environments.resolveEnvironment(envPath);
        let spec: IKernelSpec;
        if (!env) {
            spec = await this.requestKernelSelection();
        }
        else {
            spec = fromEnvToSpec(env);
        }
        let kernel = await this.attachKernel(notebook, spec);
        return kernel;
    }

    private async requestKernelSelection() {
        let envs = await this.listEnvs();
        let kernels = envs.map(fromEnvToSpec);
        let selectedSpec = await this.showPickup(kernels, "Select Python Kernel");
        console.log("Selected Spec: ", selectedSpec);
        if (!selectedSpec) {
            return;
        }
        await this._python.environments.updateActiveEnvironmentPath(envs.filter(e => e.id === selectedSpec.id)[0]);
        return selectedSpec;
    }

    async showPickup<T extends vscode.QuickPickItem>(items: T[], placeholder: string) {
        let selection = await vscode.window.showQuickPick<T>(items,
            {
                canPickMany: false,
                placeHolder: placeholder,
            });
        return selection;
    }

    private getRow(cols: IFieldInfo[], obj: any) {
        let row = "";
        for (let k of cols) {
            row += `<td>${obj[k.name]}</td>`;
        }
        return `<tr>${row}</tr>`;
    }

    private getEllipsesRow(results: ITabularResultSet) {
        let row = {};
        for (let col of results.columns) {
            row[col.name] = "...";
        }
        return row;
    }

    private renderTable(results: ITabularResultSet): string {
        let values = results.values;
        if (results.values.length > 50) {
            values = results.values.slice(0, 5);
            values.push(this.getEllipsesRow(results));
            values = values.concat(results.values.slice(results.values.length - 5));
        }
        let text = `<table class="ducklab-table">
        <thead><tr>${results.columns.map(c => '<th>' + c.name + '</th>').join("\n")}</tr></thead>
        <tbody>${values.map(row => this.getRow(results.columns, row)).join("\n")}</tbody>
        </table>
        <style>
        // .ducklab-table thead, .ducklab-table tbody {
        //     display: block;
        // }
        // .ducklab-table tbody {
        //     height: 100px;
        //     overflow: auto;
        // }
        </style>
        `;
        return text;
    }

    private async _doExecution(cell: vscode.NotebookCell, kernel: IRunningKernel): Promise<void> {
        let failed = false;
        const execution = this._controller.createNotebookCellExecution(cell);

        execution.executionOrder = ++this._executionOrder;
        execution.start(Date.now()); // Keep track of elapsed time to execute cell.
        await execution.clearOutput();
        let output = new vscode.NotebookCellOutput([]);
        await execution.replaceOutput(output);

        try {
            let resEmitter = await kernel.execute(cell.document.getText());
            resEmitter.on(async (event) => {
                console.log("Result: ", cell.index, event.msgType, event.content);
                if (event.msgType === MessageType.Output) {
                    const msg = (event as OutputMessage);

                    if (msg.content.contentType === "text/html") {
                        await execution.appendOutput(new vscode.NotebookCellOutput([
                            vscode.NotebookCellOutputItem.text(msg.content.data, msg.content.contentType)
                        ]));
                    }
                    else {
                        await execution.appendOutputItems([
                            vscode.NotebookCellOutputItem.stdout(msg.content.data)
                        ], output);
                    }
                }
                if (event.msgType === MessageType.Error) {
                    console.log("Error: ", event);
                    failed = true;
                    await execution.appendOutput(new vscode.NotebookCellOutput([
                        vscode.NotebookCellOutputItem.stderr(event.content.traceback)
                    ]));
                }
            });
            resEmitter.onDispose(() => {
                console.log("Response emitter Disposed: ", cell.index);
                execution.end(!failed, Date.now());
            });
        }

        catch (e) {
            console.log("Exception during execution: ", e);
            // await execution.replaceOutput(new vscode.NotebookCellOutput([
            //     vscode.NotebookCellOutputItem.error(new Error(e.message))
            // ]), cell);
            execution.end(false, Date.now());
        }
    }
}