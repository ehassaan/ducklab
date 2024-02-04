
<template>
    <div class="cell-toolbar">
        <v-btn class="toolbar-btn" @click="emit('new')" color="primary" size="sm" outline dense>
          <v-tooltip activator="parent" top>New cell</v-tooltip>
          <v-icon icon="$plus" size="sm"></v-icon>
        </v-btn>
        <v-btn class="toolbar-btn" @click="emit('execute')" color="primary" size="sm" outline dense>
          <v-tooltip activator="parent" top>Run (Shift+Enter)</v-tooltip>
          <v-icon icon="$play" size="sm"></v-icon>
        </v-btn>
        <v-btn class="toolbar-btn right" @click="emit('delete')" color="red" size="sm" outline dense>
          <v-tooltip activator="parent" top>Delete cell</v-tooltip>
          <v-icon icon="$delete" size="sm"></v-icon>
        </v-btn>
    </div>
</template>

<script lang="ts" setup>

let emit = defineEmits(['execute', 'delete', 'new']);

</script>
<style lang="less" scoped>
.cell-toolbar {
    display: flex;
    // position: absolute;
    // right: 5px;
    // top: 5px;
    // z-index: 1000;
    flex-direction: row;
    padding: 2px;
    background-color: var(--theme-color-cell-bg);

    .toolbar-btn {
      margin: 2px;
    }

    .right {
      // margin-left: auto;
    }
}
</style>