

export interface FileSystemReference {
    name: string;
    type: "csv" | "parquet" | "folder" | "sql" | "html";
    path: string;
    handle?: FileSystemFileHandle | FileSystemDirectoryHandle;
    file?: File,
    isCode?: boolean,
    parent?: FileSystemReference;
    children: FileSystemReference[];
    permission: 'granted' | 'prompt' | 'denied';
}
