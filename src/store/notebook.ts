// Utilities
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { DuckdbDataSource } from '@/core/data/duckdb_wasm/DuckdbDataSource';
import { TabularDataset } from '@/core/entities/tabular/TabularDataset';
import { IFetchQuery } from '@/core/language/IFetchQuery';
import { CellType, NotebookCell } from '@/entities/NotebookCell';
import { FileSystemReference } from '@/entities/FileSystemReference';
import { createReference } from './storage';


export const useNotebookStore = defineStore('notebook', () => {
  // const datasets = ref<TabularDataset[]>([]);
  const cells = ref<NotebookCell[]>([]);
  const dsIndex = ref(1);
  const dataSource = ref<DuckdbDataSource>();
  const unsavedChanges = ref(true);
  const currFile = ref<FileSystemReference>({
    name: 'untitled.sql',
    children: [],
    path: '',
    permission: 'denied',
    type: 'sql',
    isCode: true
  });

  function setDataSource(ds: DuckdbDataSource) {
    dataSource.value = ds;
  }

  function createCell(afterCell: NotebookCell | null = null) {
    if (!dataSource.value) throw Error("Datasource is undefined");

    // let inputQuery = "select * from '<csv|parquet|cellname>'";
    let inputQuery = "select * from '*.csv'";
    let index = -1;
    if (afterCell) {
      index = cells.value.findIndex(ds => ds.id === afterCell.id);
    }

    if (index >= 0) {
      inputQuery = `select * from '${cells.value[index].dataset.name}'`;
    }
    const query: IFetchQuery = {
      fields: [{ expression: "*" }],
      from: { rawQuery: inputQuery }
    };
    const dataset = new TabularDataset(`dataset_${dsIndex.value}`, query, dataSource.value, []);
    const cell = new NotebookCell(Math.random().toString(), dataSource.value, dataset);
    cells.value.splice(index + 1, 0, cell);
    dsIndex.value++;
    unsavedChanges.value = true;
    return cell;
  }

  function deleteCell(cell: NotebookCell) {
    for (let i = 0; i < cells.value.length; i++) {
      if (cells.value[i].id === cell.id) {
        cells.value.splice(i, 1);
        unsavedChanges.value = true;
        return;
      }
    }
  }

  function getCell(cellId: string) {
    for (let i = 0; i < cells.value.length; i++) {
      if (cells.value[i].id === cellId) {
        return cells.value[i];
      }
    }
    return null;
  }

  function renameDataset(ds: TabularDataset, name: string) {
    for (const cell of cells.value) {
      if (cell.dataset.name === name) throw Error("Cannot have duplicate names");
    }
    ds.name = name;
  }

  function exportToSql() {
    let content = "";
    for (const cell of cells.value) {
      content += `-- %% ${cell.type} - ${cell.dataset.name}\n${cell.input}\n`;
    }
    return content;
  }

  async function load(fileRef: FileSystemReference) {
    if (!fileRef.handle || fileRef.type === "folder") return;

    const file = await fileRef.handle.getFile();
    const text = await file.text();
    console.log(text);

    if (!dataSource.value) throw Error("Datasource is null");

    const _cells: NotebookCell[] = [];
    cells.value = [];

    for (const qry of text.split("-- %%")) {
      if (qry === "") continue;
      const result = parseCell("-- %%" + qry);
      const query = {
        fields: [{ expression: "*" }],
        from: { rawQuery: result.query }
      };
      const dataset = new TabularDataset(result.name, query, dataSource.value, []);
      const cell = new NotebookCell(Math.random().toString(), dataSource.value, dataset);
      cell.setType(result.type);
      _cells.push(cell as NotebookCell);
    }
    cells.value = _cells;
    currFile.value = fileRef;
    unsavedChanges.value = false;
    console.log("Loaded: ", fileRef);
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
    cells, dataSource, unsavedChanges, currFile
  }

});

async function getNewFileHandle(): Promise<FileSystemFileHandle> {
  const options = {
    types: [
      {
        description: 'SQL file',
        accept: {
          'text/sql': ['.sql'],
        },
      },
    ],
  };
  const handle = await window.showSaveFilePicker(options);
  return handle;
}

function parseCell(cellText: string) {
  let cellType = CellType.SQL_VIEW;
  const firstLine = cellText.split("\n")[0];
  const parts = firstLine.slice(5).split("-");
  console.log("Header: " + firstLine);
  if (parts.length < 2) throw Error("Cell identifiers are malformed");

  if (parts[0].trim() == CellType.SQL_RAW) {
    cellType = CellType.SQL_RAW;
  }
  else if (parts[0].trim() == CellType.SQL_VIEW) {
    cellType = CellType.SQL_VIEW;
  }
  else throw Error("Cell identifiers are malformed");

  const query = cellText.slice(firstLine.length + 1);
  return {
    query: query.slice(0, query.length - 1),
    name: parts[1].trim(),
    type: cellType
  }
}