
<template>
  <div class="project-container">
    <FileExplorer :files="allFiles" class="file-explorer" @import="onImport" @remove="onRemove"></FileExplorer>
    <NotebookView :dataSource="duck" class="notebook"></NotebookView>
    <div class="scrollbar"></div>
  </div>
</template>
<script lang="ts" setup>
import FileExplorer from '@/components/file-explorer/FileExplorer.vue';
import { ref } from 'vue';
import { DuckdbDataSource } from '@/core/data/duckdb_wasm/DuckdbDataSource';
import NotebookView from './NotebookView.vue';
import { onBeforeMount } from 'vue';
import { FileSystemReference } from '@/entities/FileSystemReference';
import { useStorageStore } from '@/store/storage';

let allFiles = ref<FileSystemReference[]>([]);
let duck: DuckdbDataSource;
let storageStore = useStorageStore();

onBeforeMount(async () => {
  duck = new DuckdbDataSource("default", {
    batchSize: 200,
    extensions: ['autocomplete', 'tpch', 'json']
  })
  await duck.connect();
});

async function onRemove(files: FileSystemReference[]) {
  console.log("removing: ", files);
  await storageStore.detachAll();
}

async function onImport(file: FileSystemReference) {
  console.log("Imported: ", file);

  await duck.reset();
  await duck.importFile(file);
}

</script>
<style lang="less" scoped>
.project-container {
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
}

.file-explorer {
  flex: 1;
}

.notebook {
  flex: 3.2;
}
</style>