

export interface FileSystemReference {
    name: string;
    type: "csv" | "parquet" | "folder" | "isql" | "html";
    path: string;
    handle?: FileSystemFileHandle | FileSystemDirectoryHandle;
    file?: File,
    isCode?: boolean,
    parent?: FileSystemReference;
    children: FileSystemReference[];
    permission: 'granted' | 'prompt' | 'denied';
}
