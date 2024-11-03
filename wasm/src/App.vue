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
  font-family: 'Open Sans';
}

:root {
  overflow: auto;
}
</style>