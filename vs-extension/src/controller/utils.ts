
import vscode from "vscode";

export function getResourceId(uri: vscode.Uri) {
    const id = uri.fsPath.toLowerCase().replaceAll("/", "_").replaceAll("\\", "_");
    return id;
}