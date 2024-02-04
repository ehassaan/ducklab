// Utilities
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { DuckdbDataSource } from '@/core/data/duckdb_wasm/DuckdbDataSource';
import { TabularDataset } from '@/core/entities/tabular/TabularDataset';
import { IFetchQuery } from '@/core/language/IFetchQuery';

export const useNotebookStore = defineStore('notebook', () => {
  const datasets = ref<TabularDataset[]>([]);
  const dsIndex = ref(1);
  const dataSource = ref<DuckdbDataSource>();

  function setDataSource(ds: DuckdbDataSource) {
    dataSource.value = ds;
  }

  function createCell(afterDataset: TabularDataset | null = null) {
    if (!dataSource.value) throw Error("Datasource is undefined");

    // let inputQuery = "select * from '<csv|parquet|cellname>'";
    let inputQuery = "select * from '*.csv'";
    let index = -1;
    if (afterDataset) {
      index = datasets.value.findIndex(ds => ds.id === afterDataset.id);
    }

    if (index >= 0) {
      inputQuery = `select * from '${datasets.value[index].name}'`;
    }
    const query: IFetchQuery = {
      fields: [{ expression: "*" }],
      from: { rawQuery: inputQuery }
    };
    const dataset = new TabularDataset(dsIndex.value, `dataset_${dsIndex.value}`, query, dataSource.value, []);
    datasets.value.splice(index + 1, 0, dataset);
    console.log(datasets.value, dsIndex.value);
    dsIndex.value++;
    return dataset;
  }

  function deleteCell(ds: TabularDataset) {
    for (let i = 0; i < datasets.value.length; i++) {
      if (datasets.value[i].id === ds.id) {
        datasets.value.splice(i, 1);
        return;
      }
    }
  }

  function getCellDataset(dsId: number) {
    for (let i = 0; i < datasets.value.length; i++) {
      if (datasets.value[i].id === dsId) {
        return datasets.value[i];
      }
    }
    return null;
  }

  function renameCell(ds: TabularDataset, name: string) {
    for (const ds of datasets.value) {
      if (ds.name === name) throw Error("Cannot have duplicate names");
    }
    ds.name = name;
  }

  return {
    setDataSource, createCell, renameCell, deleteCell, getDataset: getCellDataset, datasets, dataSource
  }

});

