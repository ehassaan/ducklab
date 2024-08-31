<template>
  <div class="container" @keydown="onKeyChange" @keyup="onKeyChange" @focusout="onFocusOut">
    <div class="cell-sidebar">
      <div class="inputs">
        <div v-if="props.cell.type !== CellType.SQL_RAW" class="text-field" color="primary">
          <label>Name</label>
          <input @input="onNameInput" :value="props.cell.name" :class="{ error: !isNameValid }" ref="nameInput" />
        </div>
        <v-select class="dropdown" :model-value="cellType" @update:model-value="onTypeChange" :items="['View', 'Raw']"
          density="compact" :hide-details="true">
          <template #label>
            <label class="dropdown-label">Cell Type</label>
          </template>

          <template #selection="{ item }">

            <span style="font-size: 12px; padding-left: 5px;">{{ item.title }}</span>
          </template>

          <template #item="{ props, item }">
            <v-list-item v-bind="props" density="compact">
              <template #title>
                <v-tooltip activator="parent" top>{{ item.value === 'View' ? constants.TOOLTIP_CELLTYPE_VIEW :
                  constants.TOOLTIP_CELLTYPE_RAW }}</v-tooltip>

                <span style="font-size: 12px"> {{
                  item.title }}</span>
              </template>
            </v-list-item>
          </template>
        </v-select>
      </div>
      <CellToolbar class="toolbar" @execute="execute" @delete="emit('delete-cell')" @new="emit('new-cell')">
      </CellToolbar>
    </div>
    <QueryEditor class="console" :model-value="input" @update:model-value="onInput">
    </QueryEditor>
    <TableLayout :columns="columns" :rows="rows" :class="{ table: true }" @on-request="onRequest" :loading="loading"
      :pagination="pagination" :rows-clipped="rows.length === limit">
    </TableLayout>

    <div class="note">
      <p v-if="rows.length === limit">Showing first {{ rows.length }} rows only</p>
      <p v-if="executionTime" class="execution-time">Executed in {{ executionTime }}s</p>
    </div>

    <v-snackbar v-model="showError" :timeout="-1" color="primary">{{ error }}

      <template v-slot:actions>
        <v-btn variant="text" @click="showError = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script setup lang="ts">
import TableLayout from '@/components/DataTable.vue';
import type { TableColumn } from '@/entities/TableColumn';
import { ref } from 'vue';
import { PropType } from 'vue';
import CellToolbar from './CellToolbar.vue';
import QueryEditor from "./QueryEditor.vue";
import { useNotebookStore } from '@/store/notebook';
import constants from '@/constants/constants';
import { onMounted } from 'vue';
import { computed } from 'vue';
import { CellType, NotebookCell } from '@ducklab/core';


let props = defineProps({
  cell: {
    type: Object as PropType<NotebookCell>,
    required: true
  }
});
let emit = defineEmits(['new-cell', 'delete-cell', 'cell-renamed']);
let columns = ref<TableColumn[]>([]);
let rows = ref<any[]>([]);
let loading = ref(false);
let pagination = ref({
  // page: 1, rowsNumber: 1000, rowsPerPage: 50, 
  sortBy: undefined
});
let showError = ref(false);
let error = ref(null);
let notebookStore = useNotebookStore();
let nameInput = ref<HTMLInputElement | null>(null);
let isNameValid = ref(true);
let keyMap: { [key: string]: boolean; } = {};

let cellType = computed(() => props.cell.type === CellType.SQL_RAW ? "Raw" : "View");
let input = computed(() => props.cell.input);
let limit = computed(() => props.cell.notebook.config.previewLimit);
let executionTime = ref<number | null>(null);

onMounted(() => {
  console.log("Mounted: ", props.cell.input);
});

function onTypeChange(type: string) {
  props.cell.setType(type === 'Raw' ? CellType.SQL_RAW : CellType.SQL_VIEW);
  notebookStore.unsavedChanges = true;
}

function onNameInput(event: any) {
  let idx = notebookStore.cells.findIndex(cell => cell.name === event.target.value);
  isNameValid.value = idx < 0;
  notebookStore.unsavedChanges = true;
  if (isNameValid.value) {
    emit('cell-renamed', event.target.value);
  }
}

async function onKeyChange(event: KeyboardEvent) {
  keyMap[event.key] = event.type === 'keydown';
  if (keyMap['Shift'] && keyMap["Enter"]) {
    event.preventDefault();
    await execute();
  }
}

function onInput(input: string) {
  props.cell.setInput(input);
  notebookStore.unsavedChanges = true;
}

async function onFocusOut() {
  keyMap = {};
}

async function execute() {
  console.log("Running: ", props.cell.input);
  executionTime.value = null;
  let startDt = Date.now();
  await fetchResults();
  executionTime.value = (Date.now() - startDt) / 1000;
}

async function fetchResults() {
  rows.value = [];
  columns.value = [];
  showError.value = false;
  error.value = null;
  // pagination.value.page = 1;
  // pagination.value.sortBy = undefined;
  // pagination.value.rowsNumber = 0;

  try {
    loading.value = true;
    let items = await props.cell.execute();
    columns.value = items.columns.map(item => ({ key: item.name, label: item.name, type: item.type }));
    rows.value = items.values;
    // pagination.value.rowsNumber = rows.value.length;
    loading.value = false;
  }
  catch (e: any) {
    console.log(e);
    error.value = e;
    showError.value = true;
    loading.value = false;
  }
}

async function onRequest(params: any) {
  console.log("Req args: ", params);
  loading.value = true;

  if (params.sortBy) {
    props.cell.dataset?.setSort(params.sortBy);
  }
  await fetchResults();
  pagination.value.sortBy = params.sortBy;
  // pagination.value.rowsNumber = rows.value.length;
  loading.value = false;
}

</script>

<style lang="less" scoped>
.container:focus-within {
  // background-color: var(--theme-color-background-alternate);
  // background-color: rgb(var(--theme-color-secondary));
}

.container {
  // flex: 1;
  // padding: 5px;
  margin: 7px;
  background-color: rgb(var(--theme-color-secondary));
  box-shadow: 1px 2px 3px 2px var(--theme-color-shadow);
  display: grid;
  grid-template-columns: minmax(auto, 1fr) minmax(0, 10fr);
  grid-template-rows: auto auto auto;
  height: auto;
  position: relative;
  grid-template-areas:
    'sidebar console'
    'table table'
    'note note';

  .cell-sidebar {
    grid-area: sidebar;
    display: flex;
    flex-direction: column;
    margin: 5px;
    align-self: start;

    .toolbar {
      margin: 5px;
    }

    .inputs {
      display: flex;
      flex-direction: row;
      align-items: flex-end;

      .error {
        border-color: var(--theme-color-error, blue) !important;
      }

      .text-field {
        display: flex;
        flex-direction: column;
        font-size: 12px;
        color: var(--theme-color-primary, blue);

        label {
          margin-right: 5px;
          margin-left: 3px;
          font-size: 8px;
        }

        input {
          padding: 3px;
          border-bottom: 1px solid rgba(var(--theme-color-inactive), 0.4);
          outline: none;
          height: 24px;
          width: 100px;
          box-sizing: border-box;
        }

        input:hover {
          border-bottom: 1px solid;
          border-color: var(--theme-color-border, blue);
        }

        input:focus {
          border-bottom: 2px solid;
          border-color: var(--theme-color-border, blue);
        }
      }

      .dropdown {
        width: 90px;

        .dropdown-label {
          font-size: 8px !important;
          margin-left: 4px;
        }
      }
    }


  }

  .console {
    grid-area: console;
    width: 100%;
    min-height: 50px;
  }

  .table {
    grid-area: table;
    max-height: 400px;
  }

  .hidden {
    display: none;
  }

  .note {
    font-size: 10px;
    padding: 5px 8px 1px 8px;
    color: rgb(var(--theme-color-background));
    background-color: rgb(var(--theme-color-header));
    width: 100%;
    grid-area: note;
    display: flex;
    flex-direction: row;

    .execution-time {
      margin-left: auto;
    }
  }

}
</style>
