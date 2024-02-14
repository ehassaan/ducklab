
<template>
  <div class="project-container">
    <Splitpanes class="splitpanes">
      <pane min-size="1" size="22" class="split-pane">
        <FileExplorer :files="allFiles" class="file-explorer" @import="onImport" @remove="onRemove" @save="onSave" @open-code="openCode"></FileExplorer>
      </pane>
      <Pane class="split-pane" min-size="40">
        <NotebookView :dataSource="duck" class="notebook"></NotebookView>
      </Pane>
    </Splitpanes>
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
import { Splitpanes, Pane } from 'splitpanes';
import { useNotebookStore } from '@/store/notebook';
import 'splitpanes/dist/splitpanes.css';

let allFiles = ref<FileSystemReference[]>([]);
let duck: DuckdbDataSource;
let storageStore = useStorageStore();
let notebookStore = useNotebookStore();

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

async function openCode(file: FileSystemReference) {
  await notebookStore.load(file);
}

async function onImport(file: FileSystemReference) {
  console.log("Imported: ", file);

  await duck.reset();
  await duck.importFile(file);
}

async function onSave() {
  await notebookStore.save();
  await storageStore.refresh();
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
  height: 100%;
}

.notebook {
  flex: 3.5;
  // border-left: 2px solid black;
  // border-left: 1px solid var(--theme-color-border);
}

.splitpanes :deep(.splitpanes__splitter) {
  min-width: 6px !important;
  // background: black;
  // background-color: black;
  background: rgb(var(--theme-color-primary));
}
</style>