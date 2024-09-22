import * as vscode from 'vscode';
import { DucklabController } from "./controller/DucklabController";
import { NotebookSerializer } from './serializer/NotebookSerializer';
import { IsqlSerializer, DatabricksSerializer } from "@ducklab/core";
import { Utils } from "vscode-uri";
// import { activateKernel } from "./kernel";


export function activate(context: vscode.ExtensionContext) {

    // writeFile('context0.json');
    const base_path = vscode.workspace.workspaceFolders[0].uri.fsPath;
    console.log("Base Path: ", base_path, vscode.workspace.workspaceFolders[0].uri);
    console.log("asd", Object.keys(vscode.notebooks));

    let serializerSql = new IsqlSerializer();
    context.subscriptions.push(
        vscode.workspace.registerNotebookSerializer('isql', new NotebookSerializer(serializerSql))
    );

    vscode.commands.registerCommand("ducklab.importDatabricksPy", async (file: vscode.Uri) => {
        console.log("Import: ", file);

        try {
            let document = await vscode.workspace.openTextDocument(file);
            let text = document.getText();

            let serializerDb = new DatabricksSerializer();

            let array = new TextEncoder().encode(text);
            let serializer = new NotebookSerializer(serializerDb);
            let notebookData = await serializer.deserializeNotebook(array, null);

            let fileDirectory = Utils.dirname(file);
            let fileName = Utils.basename(file).replace(".py", ".isql");

            let newUri = vscode.Uri.parse('untitled:' + vscode.Uri.joinPath(fileDirectory, fileName));
            await createUntitledNotebook(notebookData);
        }

        catch (e) {
            console.log("Error: ", e);
            vscode.window.showErrorMessage(String(e));
        }

    });

    // let serializerDb = new DatabricksSerializer();

    // context.subscriptions.push(
    // vscode.workspace.registerNotebookSerializer('ducklab-db', new NotebookSerializer(serializerDb))
    // );

    // // writeFile('context1.json');
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


async function createUntitledNotebook(notebookData: vscode.NotebookData) {

    // let edit = vscode.NotebookEdit.insertCells(0, notebookData.cells);
    // edit.newNotebookMetadata = notebookData.metadata;
    let notebook = await vscode.workspace.openNotebookDocument("isql", notebookData);
    vscode.window.showNotebookDocument(notebook);

    // vscode.workspace.applyEdit(edit).then(async (success) => {
    //     if (success) {

    //     } else {
    //         vscode.window.showInformationMessage('Failed to import notebook');
    //     }
    // });
}

// function writeFile(fileName: string) {
//     let uri = vscode.workspace.workspaceFolders[0].uri;
//     uri = uri.with({ path: path.posix.join(uri.path, fileName) });
//     vscode.workspace.fs.writeFile(uri, Buffer.from("Completed Activation: " + Date.now()));
// }