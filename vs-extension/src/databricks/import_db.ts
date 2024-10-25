
import { NotebookSerializer } from '@/serializer/NotebookSerializer';
import { DatabricksSerializer } from '@ducklab/core';
import vscode from "vscode";
// import { Utils } from 'vscode-uri';

export const importDatabricksPyFile = async (file: vscode.Uri) => {
    console.log("Import: ", file);
    try {
        let document = await vscode.workspace.openTextDocument(file);
        let text = document.getText();

        let serializerDb = new DatabricksSerializer();

        let array = new TextEncoder().encode(text);
        let serializer = new NotebookSerializer(serializerDb);
        let notebookData = await serializer.deserializeNotebook(array, null);
        // let fileDirectory = Utils.dirname(file);
        // let fileName = Utils.basename(file).replace(".py", ".isql");

        // let newUri = vscode.Uri.parse('untitled:' + vscode.Uri.joinPath(fileDirectory, fileName));
        await createUntitledNotebook(notebookData);
    }
    catch (e) {
        console.log("Error: ", e);
        vscode.window.showErrorMessage(String(e));
    }
};

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
