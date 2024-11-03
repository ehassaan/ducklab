<template>
  <!-- <v-navigation-drawer location="left" v-model="drawer">
  </v-navigation-drawer> -->

  <v-app-bar density="compact">
    <!-- <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon> -->

    <v-toolbar-title>
      <Logo></Logo>
    </v-toolbar-title>
    <v-btn @click="toggleTheme">
      <v-icon inline-block align-middle :icon="isDark ? '$moon' : '$light'" />
      <span class="ml-2">{{ isDark ? 'Dark' : 'Light' }}</span>
    </v-btn>
  </v-app-bar>

  <v-main class="main" :scrollable="true">
    <div class="main-container">
      <router-view />
    </div>
  </v-main>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Logo from '@/components/Logo.vue';
import { useTheme } from 'vuetify';
import { useDark, useToggle } from '@vueuse/core';

const isDark = useDark();
const toggleDark = useToggle(isDark);

const theme = useTheme();
const drawer = ref(false);

function toggleTheme() {
  theme.global.name.value = isDark.value ? 'light' : 'dark';
  console.log(theme.name.value, theme.current.value.dark);
  toggleDark();
}


</script>
<style>
.main {
  height: 100%;
  width: 100%;
  overflow: auto;
}

.main-container {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}
</style>
