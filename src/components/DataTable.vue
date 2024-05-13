<template>
  <div class="table-container">
    <v-data-table-server :fixed-header="true" :items-per-page="itemsPerPage" :headers="columns" :items="props.rows"
      :items-length="1000" hide-actions :loading="loading" fixed-footer class="result" item-value="name"
      density="compact" :hide-no-data="true" @update:options="onRequest">

      <template v-slot:headers="{ columns, isSorted, getSortIcon, toggleSort }">
        <tr class="header-row">
          <template v-for="column in columns" :key="column.key">
            <td>
              <span class="table-cell cursor-pointer header" @click="() => toggleSort(column)">{{ column.title }}</span>
              <template v-if="isSorted(column)">
                <v-icon :icon="getSortIcon(column)"></v-icon>
              </template>
            </td>
          </template>
        </tr>
      </template>

      <!-- <template v-for="slot in columns" :key="slot.key" #[getHeaderSlotName(slot)]="{ column }">
        <span class="table-cell header">{{ column.title.toUpperCase() }}</span>
      </template> -->

      <template v-slot:item="{ item }">
        <tr>
          <td v-for="col in columns" :key="col.key" class="table-cell">{{ format(item[col.key], col) }}</td>
        </tr>
      </template>
      <template v-slot:bottom>
      </template>
    </v-data-table-server>
  </div>
</template>

<script setup lang="ts">
import type { TableColumn } from '@/entities/TableColumn';
import { ref, computed, type PropType } from 'vue';

let emit = defineEmits(["on-request"]);

let props = defineProps({
  columns: {
    type: Object as PropType<TableColumn[]>,
    default: () => []
  },
  rows: {
    type: Object as PropType<any[]>,
    default: () => []
  },
  loading: Boolean,
  pagination: Object as PropType<{
    page?: number,
    rowsPerPage?: number,
    sortBy?: string,
    descending?: boolean,
    rowsNumber?: number
  }>,
  maxTextLength: {
    type: Number,
    default: 80
  },
  rowsClipped: {
    type: Boolean,
    default: false
  }
});
let initialLoad = ref(true);

let columns = computed(() => props.columns.map(col => {
  return {
    ...col,
    key: col.key,
    title: col.label,
  };
}));

const itemsPerPage = ref(100);

function format(value: any, col: TableColumn) {
  console.log("DAtetime", col, value);
  if (col.type === "datetime") {
    return value.toLocaleString();
  }
  value = new String(value);
  if (!value) return value;
  if (value.length > props.maxTextLength) {
    return value.slice(0, props.maxTextLength) + '...';
  }
  return value;
}

function onRequest(params: any) {

  if (initialLoad.value) {
    initialLoad.value = false;
    return;
  }
  const { page, itemsPerPage, sortBy, groupBy, search } = params;
  // const filter = props.filter

  emit("on-request", {
    page: page,
    rowsPerPage: itemsPerPage,
    sortBy: sortBy,
    groupBy: groupBy,
    search: search
  });

}

</script>

<style lang="less" scoped>
.table-container {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin: 0;
  padding: 0;
  font-size: 12px !important;
}

.result {
  overflow: auto;
  background-color: rgb(var(--theme-color-cell-bg, blue));

  .table-cell {
    font-size: 12px;
    max-width: 200px;
    min-width: 50px;
    text-wrap: wrap;
    word-wrap: break-word;
    text-overflow: ellipsis;
    max-height: 40px;
    color: rgb(var(--theme-color-cell-text));
  }

  .header-row {
    background-color: rgb(var(--theme-color-header));
  }

  .header {
    font-weight: bold;
    cursor: pointer;
    max-width: 150px;
    color: rgb(var(--theme-color-background));
  }
}
</style>
