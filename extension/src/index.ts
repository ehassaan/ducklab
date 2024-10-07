import * as vscode from 'vscode';
import { NotebookSerializer } from './serializer/NotebookSerializer';
import { IsqlSerializer, DatabricksSerializer } from "@ducklab/core";
import { Utils } from "vscode-uri";
import { NotebookController } from './controller/NotebookController';
import { importDatabricksPyFile } from './databricks/import_db';


export function activate(context: vscode.ExtensionContext) {

    // writeFile('context0.json');
    // const base_path = vscode.workspace.workspaceFolders[0].uri.fsPath;
    // console.log("Base Path: ", base_path, vscode.workspace.workspaceFolders[0].uri);
    // console.log("vscode.notebook: ", Object.keys(vscode.notebooks));

    let serializerSql = new IsqlSerializer();
    context.subscriptions.push(
        vscode.workspace.registerNotebookSerializer('isql', new NotebookSerializer(serializerSql))
    );

    // vscode.commands.registerCommand("ducklab.importDatabricksPy", importDatabricksPyFile);

    // let serializerDb = new DatabricksSerializer();

    // context.subscriptions.push(
    // vscode.workspace.registerNotebookSerializer('ducklab-db', new NotebookSerializer(serializerDb))
    // );\

    // // writeFile('context1.json');
    // context.subscriptions.push(new DucklabController({
    //     base_path: base_path,
    //     db_path: `${base_path}/duck.db`,
    // }));
    // context.subscriptions.push(new SQLController({
    //     base_path: base_path,
    //     db_path: `${base_path}/duck.db`
    // }));
    try {
        // new NotebookController();
        context.subscriptions.push(new NotebookController());
    }
    catch (ex) {
        console.log("Failed: ", ex);
    }
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
