<template>
  <v-app class="app" :full-height="true">
    <router-view />
  </v-app>
</template>

<script setup lang="ts">
import "@/theme/default.less";
</script>
<style>
.app {
  height: 100vh;
  width: 100vw;
}

:root {
  overflow: auto;  
}
</style>