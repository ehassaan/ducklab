import * as vscode from 'vscode';
import { DucklabController } from "./controller/DucklabController";
import { NotebookSerializer } from './serializer/NotebookSerializer';
import { IsqlSerializer } from "@ducklab/core";
import path from 'path';


export function activate(context: vscode.ExtensionContext) {

    // let uri = vscode.workspace.workspaceFolders[0].uri;

    // uri = uri.with({ path: path.posix.join(uri.path, 'context.json') });
    // vscode.workspace.fs.writeFile(uri, Buffer.from(JSON.stringify(context.workspaceState)));
    // context.subscriptions.push(new DucklabController());
    let serializer = new IsqlSerializer();
    context.subscriptions.push(
        vscode.workspace.registerNotebookSerializer('isql', new NotebookSerializer(serializer))
    );
}
