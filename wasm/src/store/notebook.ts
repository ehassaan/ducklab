// Utilities
import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import { TabularDataset, IFetchQuery, IsqlSerializer, Notebook, NotebookCell, CellType, TabularDataSource } from '@ducklab/core';
// import { CellType, NotebookCell } from '@/entities/NotebookCell';
import { FileSystemReference } from '@/entities/FileSystemReference';
import { createReference } from './storage';
// import { type DuckdbDataSource } from '@/entities/duckdb_wasm/DuckdbDataSource';


export const useNotebookStore = defineStore('notebook', () => {
  // const datasets = ref<TabularDataset[]>([]);
  // const cells = ref<NotebookCell[]>([]);
  const notebook = ref<Notebook>(new Notebook());
  const dsIndex = ref(1);
  let dataSource: TabularDataSource | undefined;
  const unsavedChanges = ref(false);
  const currFile = ref<FileSystemReference>({
    name: 'untitled.isql',
    children: [],
    path: '',
    permission: 'denied',
    type: 'isql',
    isCode: true
  });

  function setDataSource(ds: any) {
    notebook.value.dataSource = ds;
    dataSource = ds;
  }

  function initNotebook() {
    createCell();
    unsavedChanges.value = false;
  }

  function createCell(afterCell: NotebookCell | null = null) {
    if (!notebook.value.dataSource) throw Error("Datasource is undefined");

    // let inputQuery = "select * from '<csv|parquet|cellname>'";
    let inputQuery = "select * from '*.csv'";
    let index = -1;
    if (afterCell) {
      index = notebook.value.cells.findIndex(ds => ds.id === afterCell.id);
    }

    if (index >= 0) {
      inputQuery = `select * from '${notebook.value.cells[index].name}'`;
    }
    const query: IFetchQuery = {
      fields: [{ expression: "*" }],
      from: { rawQuery: inputQuery }
    };
    const dataset = new TabularDataset(`dataset_${dsIndex.value}`, query, notebook.value.dataSource, []);
    const cell = new NotebookCell(Math.random().toString(), dataset.name, notebook.value as Notebook, inputQuery, CellType.SQL_VIEW);
    cell.dataset = dataset;
    notebook.value.cells.splice(index + 1, 0, cell);
    dsIndex.value++;
    unsavedChanges.value = true;
    return cell;
  }

  function deleteCell(cell: NotebookCell) {
    for (let i = 0; i < notebook.value.cells.length; i++) {
      if (notebook.value.cells[i].id === cell.id) {
        notebook.value.cells.splice(i, 1);
        unsavedChanges.value = true;
        return;
      }
    }
  }

  function getCell(cellId: string) {
    for (let i = 0; i < notebook.value.cells.length; i++) {
      if (notebook.value.cells[i].id === cellId) {
        return notebook.value.cells[i];
      }
    }
    return null;
  }

  function renameDataset(ds: TabularDataset, name: string) {
    for (const cell of notebook.value.cells) {
      if (cell.name === name) throw Error("Cannot have duplicate names");
    }
    ds.name = name;
  }

  function exportToSql() {
    const serializer = new IsqlSerializer();
    const result = serializer.serialize(notebook.value as Notebook);
    return result;
  }

  async function load(fileRef: FileSystemReference) {
    if (!fileRef.handle || fileRef.type === "folder") return;

    const file = await fileRef.handle.getFile();
    const text = await file.text();
    console.log(text);

    const serializer = new IsqlSerializer();
    const nb = serializer.parse(text, fileRef.name);
    nb.dataSource = dataSource;
    notebook.value = nb;
    currFile.value = fileRef;
    dsIndex.value = notebook.value.cells.length + 1;
    unsavedChanges.value = false;

  }

  async function save() {
    const sql = exportToSql();
    console.log("Saving: ", sql);
    if (!currFile.value.handle) {
      const localHandle = await getNewFileHandle();
      currFile.value = await createReference(localHandle);
    }
    if (!currFile.value.handle) throw Error("Failed to save file");
    const writable = await (currFile.value.handle as FileSystemFileHandle).createWritable();
    await writable.write(sql);
    await writable.close();
    unsavedChanges.value = false;
  }

  return {
    setDataSource, createCell, renameDataset, deleteCell,
    getCell, load, exportToSql, save,
    cells: computed(() => notebook.value.cells), dataSource: notebook.value.dataSource,
    unsavedChanges,
    initNotebook,
    currFile
  };

});

async function getNewFileHandle(): Promise<FileSystemFileHandle> {
  const options = {
    types: [
      {
        description: 'SQL file',
        accept: {
          'text/sql': ['.isql'],
        },
      },
    ],
  };
  const handle = await window.showSaveFilePicker(options);
  return handle;
}
