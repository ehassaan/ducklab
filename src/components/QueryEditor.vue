<template>
  <div ref="editorDiv" class="query-input" contenteditable="true"></div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { ref } from 'vue';
import * as monaco from "monaco-editor";
import { useDark } from '@vueuse/core';
import { watchEffect } from 'vue';

let props = defineProps({
  modelValue: {
    type: String,
    default: ""
  }
});

let editorDiv = ref<HTMLDivElement>();
let emit = defineEmits(['update:model-value']);
let isDark = useDark();

let lastHeight = 0;

function updateHeight(editor: monaco.editor.IStandaloneCodeEditor) {
  if (editor.getContentHeight() === lastHeight) return;
  if (!editorDiv.value) return;

  let currHeight = editor.getContentHeight();
  console.log("ContentHeight: ", currHeight);

  const contentHeight = Math.min(800, currHeight) + 15;
  editorDiv.value.style.height = `${contentHeight}px`;
  try {
    editor.layout();
  } catch (err) {
    console.log(err);
  }
  lastHeight = currHeight;
}

watchEffect(() => {
  monaco.editor.setTheme(isDark.value ? 'vs-dark' : 'vs');
})

onMounted(() => {
  if (!editorDiv.value) throw Error("Editor Div not found");
  let myEditor = monaco.editor.create(editorDiv.value, {
    value: props.modelValue,
    language: "sql",
    theme: isDark.value ? 'vs-dark' : 'vs',
    automaticLayout: true,
    scrollBeyondLastLine: false,
    minimap: {
      enabled: false
    },
  });

  myEditor.onDidChangeModelContent(e => {
    emit('update:model-value', myEditor.getValue());
  });

  myEditor.onDidContentSizeChange(() => {
    updateHeight(myEditor);
  })

  myEditor.layout();
  // watch(props, (e) => {
  //   myEditor.setValue(e.modelValue);
  // }, {
  //   deep: true,
  //   immediate: false,
  // })
});

</script>

<style lang="less" scoped>
.query-input {
  height: 100%;
  width: 100%;
  border: solid 1px rgba(var(--theme-color-inactive, blue), 0.4);
  outline: none;
  padding: 5px;
  margin-top: 5px;
  margin-bottom: 5px;
}
.query-input:focus-within {
  border: solid 1px rgb(var(--theme-color-border, blue));
}
</style>
