import * as vscode from 'vscode';
import { DucklabController } from "./controller/DucklabController";
import { IsqlSerializer } from './serializer/IsqlSerializer';

export function activate(context: vscode.ExtensionContext) {
    context.subscriptions.push(new DucklabController());
    context.subscriptions.push(
        vscode.workspace.registerNotebookSerializer('ducklab', new IsqlSerializer())
    );
}

