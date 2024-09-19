import * as vscode from 'vscode';
import { DucklabController } from "./controller/DucklabController";
import { NotebookSerializer } from './serializer/NotebookSerializer';
import { IsqlSerializer } from "@ducklab/core";
// import { activateKernel } from "./kernel";


export function activate(context: vscode.ExtensionContext) {

    // writeFile('context0.json');
    const base_path = vscode.workspace.workspaceFolders[0].uri.fsPath;
    console.log("Base Path: ", base_path, vscode.workspace.workspaceFolders[0].uri);
    console.log("asd", Object.keys(vscode.notebooks));

    let serializer = new IsqlSerializer();
    context.subscriptions.push(
        vscode.workspace.registerNotebookSerializer('isql', new NotebookSerializer(serializer))
    );
    // writeFile('context1.json');
    context.subscriptions.push(new DucklabController({
        base_path: base_path,
        db_path: `${base_path}/duck.db`,
    }));
    // context.subscriptions.push({
    //     dispose: () => { },
    //     label: 'asd'
    // });

    // activateKernel(context);

    // writeFile('context2.json');

}

// function writeFile(fileName: string) {
//     let uri = vscode.workspace.workspaceFolders[0].uri;
//     uri = uri.with({ path: path.posix.join(uri.path, fileName) });
//     vscode.workspace.fs.writeFile(uri, Buffer.from("Completed Activation: " + Date.now()));
// }