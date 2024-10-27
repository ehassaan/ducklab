import * as vscode from 'vscode';
import { NotebookSerializer } from './serializer/NotebookSerializer';
import { IsqlSerializer } from "@ducklab/core";
import { DucklabPythonController } from './controller/DucklabPythonController';
import { importDatabricksPyFile } from './databricks/import_db';
import { DucklabSparkController } from './controller/DucklabSparkController';
import os from "os";
import fs from "fs";


export function activate(context: vscode.ExtensionContext) {

    // writeFile('context0.json');
    const base_path = vscode.workspace.workspaceFolders[0].uri.fsPath;
    // console.log("Base Path: ", base_path, vscode.workspace.workspaceFolders[0].uri);
    // console.log("vscode.notebook: ", Object.keys(vscode.notebooks));

    fs.realpath(os.tmpdir(), (err, path) => {
        if (err) throw Error("Temp directory not accessible");

        try {
            context.subscriptions.push(new DucklabPythonController({ tempPath: path, workingDir: base_path }));
            context.subscriptions.push(new DucklabSparkController({ tempPath: path, workingDir: base_path }));
        }
        catch (ex) {
            console.log("Failed: ", ex);
        }
    });

    let serializerSql = new IsqlSerializer();
    context.subscriptions.push(
        vscode.workspace.registerNotebookSerializer('isql', new NotebookSerializer(serializerSql))
    );

    vscode.commands.registerCommand("ducklab.importDatabricksPy", importDatabricksPyFile);

}

// function writeFile(fileName: string) {
//     let uri = vscode.workspace.workspaceFolders[0].uri;
//     uri = uri.with({ path: path.posix.join(uri.path, fileName) });
//     vscode.workspace.fs.writeFile(uri, Buffer.from("Completed Activation: " + Date.now()));
// }
