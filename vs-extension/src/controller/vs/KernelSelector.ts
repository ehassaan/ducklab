import { PythonExtension, ResolvedEnvironment } from '@vscode/python-extension';
import * as vscode from "vscode";
import { KernelManager } from '../python/KernelManager';
import { IKernelSpec, KernelType } from '../python/IKernelSpec';
import { KernelStatus } from '../IRunningKernel';
import { getResourceId } from '../utils';


export class KernelSelector {

    private _python: PythonExtension;
    readonly kernelManager = new KernelManager();
    private kernelMap: { [nbId: string]: string; } = {};
    private entry_script: string;
    private init_timeout_ms: number;

    async init(entry_script: string = null, init_timeout_ms = 60000) {
        if (!this._python) {
            this._python = await PythonExtension.api();
            await this._python.ready;
        }
        this.listenEnvironmentChangeEvent();
        entry_script = entry_script.replace("\r\n", "\n");
        this.entry_script = entry_script.split("\n").map(x => x.trim()).join("\n"); // remove whitespaces from eahc line
        this.init_timeout_ms = init_timeout_ms;
    }

    private async listEnvs() {
        // await this._python.environments.refreshEnvironments();
        console.log(this._python.environments.known);
        return this._python.environments.known;
    }

    async resolveKernel(notebook: vscode.NotebookDocument) {
        const nbId = getResourceId(notebook.uri);

        if (nbId in this.kernelMap) {
            const kernel = this.kernelManager.get(this.kernelMap[nbId]);
            if (kernel.status !== KernelStatus.Killed) {
                return kernel;
            }
            else {
                delete this.kernelMap[nbId];
                this.kernelManager.kill(nbId);
            }
        }
        if (!this._python) {
            this._python = await PythonExtension.api();
            await this._python.ready;
        }
        let envPath = this._python.environments.getActiveEnvironmentPath(notebook.uri);
        let env = await this._python.environments.resolveEnvironment(envPath);
        let spec: IKernelSpec;
        if (!env) {
            spec = await this.requestKernelSelection(notebook);
        }
        else {
            spec = this.fromEnvToSpec(env);
        }
        let kernel = await this.attachKernel(notebook, spec);
        return kernel;
    }

    public async requestKernelSelection(notebook: vscode.NotebookDocument) {
        let envs = await this.listEnvs();
        let kernels = envs.map(this.fromEnvToSpec);
        let selectedSpec = await this.showPickup(kernels, "Select Python Kernel");
        console.log("Selected Spec: ", selectedSpec);
        if (!selectedSpec) {
            return;
        }
        await this._python.environments.updateActiveEnvironmentPath(
            envs.filter(e => e.id === selectedSpec.id)[0],
            notebook.uri
        );
        return selectedSpec;
    }

    private async showPickup<T extends vscode.QuickPickItem>(items: T[], placeholder: string) {
        let selection = await vscode.window.showQuickPick<T>(items,
            {
                canPickMany: false,
                placeHolder: placeholder,
            });
        return selection;
    }

    public fromEnvToSpec(env: ResolvedEnvironment): IKernelSpec {
        return {
            id: env.id,
            label: `${env.environment.name} (${env.version.major}.${env.version.minor})`,
            envType: env.environment.type,
            type: KernelType.IPYKERNEL,
            path: env.path,
            version: env.version
        };
    }

    private async attachKernel(notebook: vscode.NotebookDocument, spec: IKernelSpec) {
        const nbId = getResourceId(notebook.uri);

        let paths = Object.keys(this.kernelMap).filter(k => k === nbId);
        if (paths.length > 0) {
            this.kernelManager.kill(this.kernelMap[paths[0]]);
            console.log("Disposed kernel: ", paths[0], this.kernelMap[paths[0]]);
        }
        let kernel = await this.kernelManager.launchKernel(spec);
        this.kernelMap[nbId] = kernel.id;
        await kernel.waitReady(this.init_timeout_ms);
        console.log("Init: ", this);
        if (this.entry_script) {
            console.log("Init entry_scirpt: ", this.entry_script);
            let res = await kernel.executeSync(this.entry_script, this.init_timeout_ms);
            console.log("init response: ", res);
        }
        console.log("Kernel Ready: ", kernel.status, kernel);
        return kernel;
    }

    public async getAttachedKernel(notebook: vscode.NotebookDocument) {
        const nbId = getResourceId(notebook.uri);
        if (this.kernelMap[nbId]) {
            const kernel = this.kernelManager.get(this.kernelMap[nbId]);
            if (!kernel) return;
            return kernel;
        }
        return;
    }

    public async killAttachedKernel(notebook: vscode.NotebookDocument) {
        const nbId = getResourceId(notebook.uri);
        if (nbId in this.kernelMap) {
            this.kernelManager.kill(this.kernelMap[nbId]);
        }
        return;
    }

    private listenEnvironmentChangeEvent() {
        this._python.environments.onDidChangeActiveEnvironmentPath(async (ev) => {
            let activeNb = vscode.window.activeNotebookEditor.notebook;
            console.log("Active env change event: ", ev, activeNb);
            if (activeNb.uri.fsPath !== ev.resource.uri.fsPath) {
                return;
            }
            let env = await this._python.environments.resolveEnvironment(ev.path);
            let spec = this.fromEnvToSpec(env);
            await this.attachKernel(activeNb, spec);
        });
    }

    public dispose() {
        this.kernelManager.dispose();
    }
}
