import { FileSystemReference } from "@/entities/FileSystemReference";
import { get, set } from "idb-keyval";
import { defineStore } from "pinia";
import { ref } from "vue";

const supportedTypes = ['csv', 'parquet', 'g.html', 'isql'];

export const useStorageStore = defineStore('storage', () => {
    const root = ref<FileSystemReference>();

    async function refresh() {
        const imported = await get("imported") as any;
        if (!imported) return;
        if (imported instanceof Array) {
            await attachFiles(imported);
        }
        if (imported.kind === "directory") {
            await attachDirectory(imported);
        }
        console.log("Refreshed");
    }

    async function attachFiles(files: (FileSystemFileHandle | FileSystemDirectoryHandle)[]) {
        const dirRef: FileSystemReference = {
            name: 'root',
            children: [],
            path: 'root/',
            permission: 'granted',
            type: 'folder'
        };
        for (const fil of files) {
            try {
                dirRef.children.push(await createReference(fil, dirRef));
            }
            catch (e) {
                console.log(`Skipping: ${fil.name}\t${e}`);
            }
        }
        root.value = dirRef;
        await set('imported', files);
        console.log("Import files: ", files);
        return dirRef;
    }

    async function attachDirectory(directory: FileSystemDirectoryHandle) {

        const dirRef = await createReference(directory);
        dirRef.path = './';
        console.log("reference: ", dirRef);
        if (dirRef.permission === 'prompt') {
            root.value = dirRef;
            console.log('returning');
            return root.value;
        }
        if (dirRef.permission === 'denied') await dirRef.handle?.requestPermission();

        root.value = await openRecursive(dirRef);

        await set('imported', directory);
        console.log("Import directory: ", directory);
        return root.value;
    }

    async function detachAll() {
        root.value = undefined;
        await set('imported', null);
    }

    return {
        root, attachDirectory, attachFiles, refresh, detachAll
    };
});

export async function createReference(file: FileSystemFileHandle | FileSystemDirectoryHandle,
    parent?: FileSystemReference): Promise<FileSystemReference> {

    const path = parent ? parent.path + file.name : file.name;

    if (file.kind == 'directory') {
        return {
            name: file.name,
            path: path + '/',
            children: [],
            type: 'folder',
            isCode: false,
            handle: file,
            permission: await file.queryPermission()
        };
    }
    let type: string | null = null;
    for (const typ of supportedTypes) {
        if (file.name.toLowerCase().endsWith(typ)) type = typ;
    }
    if (!type) throw Error("File type not supported");
    return {
        name: file.name,
        path: path,
        children: [],
        type: type as any,
        isCode: (type === 'isql') || (type === 'html'),
        handle: file,
        permission: await file.queryPermission(),
    };
}

async function openRecursive(directory: FileSystemReference) {
    if (directory.type !== 'folder') return directory;
    if (!directory.handle) return directory;

    for await (const fil of (directory.handle as any).values()) {
        try {
            const fileRef = await createReference(fil, directory);
            fileRef.parent = directory;
            if (fileRef.type === 'folder') {
                directory.children.push(await openRecursive(fileRef));
                continue;
            }
            fileRef.parent = directory;
            directory.children.push(fileRef);
        }
        catch (e) {
            console.log(`Skipping: ${fil.name}\t${e}`);
        }

    }
    return directory;
}

