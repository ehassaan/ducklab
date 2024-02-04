/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}



interface Window extends Window{
  showOpenFilePicker: any,
  showDirectoryPicker: any,
  requestPermission: any
}


interface FileSystemHandle extends FileSystemHandle {
  queryPermission: any;
  requestPermission: any;
  getFile: any;
}
