<template>
  <div class="project-container">
    <Splitpanes class="splitpanes">
      <pane min-size="1" size="22" class="split-pane">
        <v-progress-circular indeterminate class="loading" v-if="loading"></v-progress-circular>

        <FileExplorer v-if="!loading" class="file-explorer" @import="onImport" @remove="onRemove" @save="onSave"
          @open-code="openCode"></FileExplorer>
      </pane>
      <Pane class="split-pane" min-size="40">
        <div class="tabs">
          <div class="tab">{{ notebookStore.currFile?.name }} {{ notebookStore.unsavedChanges ? '*' : '' }}</div>
        </div>
        <NotebookView :dataSource="duck" class="notebook"></NotebookView>
      </Pane>
    </Splitpanes>
    <div class="scrollbar"></div>
  </div>
</template>

<script lang="ts" setup>
import FileExplorer from '@/components/file-explorer/FileExplorer.vue';
import { onBeforeUnmount, ref } from 'vue';
import { DuckdbDataSource } from '@/entities/duckdb_wasm/DuckdbDataSource';
import NotebookView from './NotebookView.vue';
import { onBeforeMount } from 'vue';
import { FileSystemReference } from '@/entities/FileSystemReference';
import { useStorageStore } from '@/store/storage';
import { Splitpanes, Pane } from 'splitpanes';
import { useNotebookStore } from '@/store/notebook';
import 'splitpanes/dist/splitpanes.css';

let duck: DuckdbDataSource;
let storageStore = useStorageStore();
let notebookStore = useNotebookStore();
let loading = ref(false);

onBeforeMount(async () => {
  duck = new DuckdbDataSource("default", {
    batchSize: 50000,
    previewLimit: 200,
    rawLimit: 1000,
    extensions: []
  });
  loading.value = true;
  try {
    await duck.connect();
  }
  catch (err) {
    console.log(err);
  }
  loading.value = false;
  window.onbeforeunload = beforeUnload;
});

function beforeUnload(event: BeforeUnloadEvent) {
  if (notebookStore.unsavedChanges) {
    event.preventDefault();
  }
}

async function onRemove(files: FileSystemReference[]) {
  console.log("removing: ", files);
  await storageStore.detachAll();
}

async function openCode(file: FileSystemReference) {
  await notebookStore.load(file);
}

async function onImport(file: FileSystemReference) {
  console.log("Importing: ", file);

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

.loading {
  display: block;
  margin: 12px auto 8px auto;
}

.splitpanes :deep(.splitpanes__splitter) {
  min-width: 6px !important;
  // background: black;
  // background-color: black;
  background: rgb(var(--theme-color-primary));
}

.tabs {
  padding: 2px;
  background-color: rgb(var(--theme-color-tabs-bg));

  .tab {
    padding: 0 5px 0 5px;
    font-size: 14px;
    color: rgb(var(--theme-color-tabs-text));
    border-right: 1px solid rgb(var(--theme-color-tabs-text));
    max-width: 120px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
}
</style>