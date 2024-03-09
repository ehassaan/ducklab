<template>
  <div>
    <div class="container">
      <v-tabs v-model="tab">
        <v-tab value="notebooks">Files</v-tab>
      </v-tabs>
      <div class="toolbar">
        <v-btn class="toolbar-btn" @click="save" color="primary" size="sm" outline dense>
          <v-icon icon="$save"></v-icon>
          <v-tooltip activator="parent" top>Save Notebook</v-tooltip>
        </v-btn>
        <v-btn class="toolbar-btn" @click="openFile" color="primary" size="sm" outline dense>
          <v-icon icon="$file"></v-icon>
          <v-tooltip activator="parent" top>Open File</v-tooltip>
        </v-btn>
        <v-btn class="toolbar-btn" @click="openDir" color="primary" size="sm" outline dense>
          <v-icon icon="$folder"></v-icon>
          <v-tooltip activator="parent" top>Open Folder</v-tooltip>
        </v-btn>
        <v-btn class="toolbar-btn" @click="refresh" color="primary" size="sm" outline dense>
          <v-icon icon="$refresh"></v-icon>
          <v-tooltip activator="parent" top>Refresh</v-tooltip>
        </v-btn>
        <!-- <v-btn @click="() => onEvent('download')" color="primary" :disable="!selectedAny" size="sm" outline dense>
        <v-icon name="mdi-download"></v-icon>
        <v-tooltip activator="parent" top>Download</v-tooltip>
      </v-btn>
      <v-btn @click="() => onEvent('copy')" color="primary" :disable="!selectedAny" size="sm" outline dense>
        <v-icon name="mdi-content-copy"></v-icon>
        <v-tooltip activator="parent" top>Copy</v-tooltip>
      </v-btn>
      <v-btn @click="() => onEvent('cut')" color="primary" :disable="!selectedAny" size="sm" outline dense>
        <v-icon name="mdi-content-cut"></v-icon>
        <v-tooltip activator="parent" top>Cut</v-tooltip>
      </v-btn>
      <v-btn @click="() => onEvent('paste')" color="primary" size="sm" outline dense>
        <v-icon name="mdi-content-paste"></v-icon>
        <v-tooltip activator="parent" top>Paste</v-tooltip>
      </v-btn> -->
        <v-spacer class="hspacer"></v-spacer>
        <v-btn class="toolbar-btn delete-btn" @click="() => onToolbarAction('remove')" color="black"
          :disabled="!selectedAny" size="sm" outline dense>
          <v-icon icon="$delete"></v-icon>
          <v-tooltip activator="parent" top>Detach</v-tooltip>
        </v-btn>
      </div>

      <v-spacer class="vspacer"></v-spacer>

      <div class="drop-section">
        <v-progress-circular indeterminate class="loading" v-if="loading"></v-progress-circular>

        <div ref="dropZoneRef" class="dropzone">
          <div v-if="isOverDropZone" class="drop-overlay"></div>

          <div class="filelist" v-if="!loading">
            <NestedListItem @select="onSelect" :selectable="true" v-if="storageStore.root" :file="storageStore.root"
              @prompt-permission="requestPermission" @open-code="f => emit('open-code', f)"></NestedListItem>
          </div>
        </div>
      </div>
      <v-spacer class="vspacer"></v-spacer>
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
import { computed, onMounted, ref, watchEffect, type PropType } from 'vue';
import { useDropZone } from '@vueuse/core';
import type { FileSystemReference } from "@/entities/FileSystemReference";
import { useStorageStore } from "@/store/storage";
import NestedListItem from './NestedListItem.vue';
import constants from '@/constants/constants';


let emit = defineEmits([
  'import',
  'download',
  'copy',
  'cut',
  'paste',
  'remove',
  'save',
  'open-code'
]);

// let props = defineProps({
//   loading: Boolean
// })

let storageStore = useStorageStore();

let selected = ref<{ [key: string]: boolean }>({});
let tab = ref();
let error = ref('');
let showError = ref(false);
let dropZoneRef = ref();
let cwd = ref<FileSystemReference>();
let { isOverDropZone } = useDropZone(dropZoneRef, onDrop);
let selectedAny = computed(() => Object.values(selected.value).reduce((x, y) => x || y, false));
let loading = ref(false);

onMounted(async () => {
  cwd.value = storageStore.root;
  console.log("CWD: ", cwd.value);
  showError.value = !window.showDirectoryPicker;
  error.value = constants.ERROR_FS_API_NOT_SUPPORTED;

  await refresh();

});

async function refresh() {
  loading.value = true;
  try {
    await storageStore.refresh();
    emit("import", storageStore.root);
  }
  catch (err) {
    console.log("Failed to refresh: ", err);
  }
  finally {
    loading.value = false;
  }
}


async function openFile() {
  if (!window.showOpenFilePicker) {
    showError.value = true;
    error.value = constants.ERROR_FS_API_NOT_SUPPORTED
    return;
  }
  const files = await window.showOpenFilePicker({
    excludeAcceptAllOption: false,
    mode: 'read', multiple: true, types: [
      {
        description: "text",
        accept: {
          "text/csv": [".csv"]
        }
      },
      {
        description: "binary",
        accept: {
          "application/octect-stream": [".parquet"],
        }
      }
    ]
  }) as FileSystemFileHandle[];

  cwd.value = await storageStore.attachFiles(files);
  emit("import", storageStore.root);
}

function onSelect(selection: { [key: string]: boolean }) {
  console.log(selection);
  selected.value = selection;
}

async function openDir() {
  if (!window.showOpenFilePicker) {
    showError.value = true;
    error.value = constants.ERROR_FS_API_NOT_SUPPORTED
    return;
  }
  const dirHandle = await window.showDirectoryPicker({ mode: 'readwrite', multiple: false }) as FileSystemDirectoryHandle;
  cwd.value = await storageStore.attachDirectory(dirHandle);

  emit("import", storageStore.root);
}

function onToolbarAction(event: 'remove' | 'copy' | 'cut' | 'download') {
  const files: any[] = [];
  // for (let fil in selected.value) {
  //   if (selected.value[fil]) {
  //     let matches = files.filter(f => f.path === fil);
  //     if (matches && matches.length > 0) files.push(matches[0]);
  //   }
  // }
  emit(event, files);
}

function save() {
  emit('save');
}


function onDrop(files: File[] | null) {

  if (!files) return;

  // emit('import', createReferences(vmFolder.value, files));
}

async function requestPermission(file: FileSystemReference) {
  await file.handle?.requestPermission({
    mode: 'readwrite'
  });
  await storageStore.refresh();
  emit('import', storageStore.root);
}

</script>

<style lang="less" scoped>
.title {
  font-size: 2rem;
}

.container {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 8px;
  overflow: hidden;

  .loading {
    margin: 8px 0 8px 0;
    align-self: center;
  }

  .vspacer {
    border-bottom: solid rgb(var(--theme-color-border)) 2px;
    margin: 8px 0 0px 0;
    width: 100%;
    flex: 0;
  }

  .hspacer {
    border-left: solid rgb(var(--theme-color-border)) 2px;
    margin: 0 8px 8px 8px;
    height: 100%;
    flex: 0;
  }

  .drop-section {
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: auto;

    .dropzone {
      height: 100%;
      /* min-height: 200px; */
      width: 100%;
    }

    .drop-overlay {
      position: absolute;
      height: 100%;
      width: 100%;
      top: 0;
      left: 0;
      background-color: var(--theme-color-accent);
    }

    .listitem {
      align-items: center;
      display: flex;
      flex-direction: row;
      margin-right: auto;

      .checkbox {
        margin-right: 5px;
      }

      .filename {
        margin-left: 7px;
        display: inline-block;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }

    }
  }

  .toolbar {
    display: flex;
    flex-direction: row;
    margin: 8px 2px 0 2px;

    .toolbar-btn {
      margin: 0 2px 2px 0;
    }

    .delete-btn {
      // margin-left: auto;
    }
  }

}
</style>