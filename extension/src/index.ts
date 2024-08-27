import * as vscode from 'vscode';
import { DucklabController } from "./controller/DucklabController";
import { NotebookSerializer } from './serializer/NotebookSerializer';
import { IsqlSerializer } from "@ducklab/core";
// import path from 'path';


export function activate(context: vscode.ExtensionContext) {

    // writeFile('context0.json');

    let serializer = new IsqlSerializer();
    context.subscriptions.push(
        vscode.workspace.registerNotebookSerializer('isql', new NotebookSerializer(serializer))
    );
    // writeFile('context1.json');
    context.subscriptions.push(new DucklabController());
    // writeFile('context2.json');

}

// function writeFile(fileName: string) {
//     let uri = vscode.workspace.workspaceFolders[0].uri;
//     uri = uri.with({ path: path.posix.join(uri.path, fileName) });
//     vscode.workspace.fs.writeFile(uri, Buffer.from("Completed Activation: " + Date.now()));
// }