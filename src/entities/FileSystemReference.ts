

export interface FileSystemReference {
    name: string;
    type: "csv" | "parquet" | "folder" | "sqlnb" | "g.html";
    path: string;
    handle?: FileSystemHandle;
    file?: File,
    isCode?: boolean,
    parent?: FileSystemReference;
    children: FileSystemReference[];
    permission: 'granted' | 'prompt' | 'denied';
}
