<template>
    <div class="page-container">
        <div class="cells">
            <v-btn class="toolbar-btn" @click="newCell()" color="primary" size="sm" outline rounded>
                <v-tooltip activator="parent" top>New cell</v-tooltip>
                <v-icon icon="$plus" size="sm"></v-icon>
            </v-btn>
            <div class="cell-container" v-for="cell of notebookStore.cells" :key="cell.id">
                <CellComponent @new-cell="() => newCell(cell as any)" @delete-cell="() => deleteCell(cell as any)"
                    @cell-renamed="(name) => cellRenamed(cell as any, name)" :cell="(cell as any)">
                </CellComponent>
                <v-btn class="toolbar-btn" @click="newCell(cell as any)" color="primary" size="sm" outline rounded>
                    <v-tooltip activator="parent" top>New cell</v-tooltip>
                    <v-icon icon="$plus" size="sm"></v-icon>
                </v-btn>
            </div>
        </div>
        <v-snackbar v-model="showToast" :timeout="4000">{{ toastMsg }}</v-snackbar>
    </div>
</template>
<script lang="ts" setup>

import { TabularDataset, NotebookCell } from "@ducklab/core";
import { DuckdbDataSource } from "@/entities/duckdb_wasm/DuckdbDataSource";
import { useNotebookStore } from "@/store/notebook";
import { onMounted } from "vue";
import CellComponent from "@/components/CellComponent.vue";
import { PropType } from "vue";
import { ref } from "vue";
import { useStorageStore } from "@/store/storage";

let props = defineProps({
    dataSource: {
        type: Object as PropType<DuckdbDataSource>,
        required: true
    }
});
let notebookStore = useNotebookStore();
let storageStore = useStorageStore();
let showToast = ref(false);
let toastMsg = ref("");

onMounted(() => {
    notebookStore.setDataSource(props.dataSource);
    if (notebookStore.cells.length === 0) notebookStore.createCell();
});

function cellRenamed(ds: TabularDataset, name: string) {
    try {
        notebookStore.renameDataset(ds, name);
    }
    catch {
        null;
    }
}

function newCell(afterCell?: NotebookCell) {
    let cell = notebookStore.createCell(afterCell);
    console.log("Created: ", cell.id);
}

function deleteCell(cell: NotebookCell) {
    notebookStore.deleteCell(cell);
}

</script>
<style lang="less" scoped>
.page-container {
    display: flex;
    flex-direction: column;
    height: 100%;
    flex: 1;
    overflow-x: hidden;
    overflow-y: auto;

    .cells {
        display: flex;
        flex-direction: column;
        overflow-y: auto;
        scrollbar-width: 20px;
        width: 100%;
        flex: 1;
        margin: 5px;
        padding: 5px 25px 5px 25px;

        .cell-container {
            display: flex;
            flex-direction: column;
            align-items: stretch;
        }

        .toolbar-btn {
            margin-left: auto;
            margin-right: auto;
            padding: 5px;
        }
    }
}

.ds-name {
    min-width: 100px;
    padding: 5px;
    max-lines: 1;
    max-width: 250px;
    text-overflow: ellipsis;
    text-wrap: nowrap;
    overflow: hidden;
    text-transform: none;
}

.windows {
    flex: 1;
    display: flex;
}

.tab {
    padding: 2px;
}

.plus {
    width: 100%;
}

.window-container {
    display: flex;
    flex-direction: column;
    height: 100%;
}
</style>