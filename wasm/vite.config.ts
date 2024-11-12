// Plugins
import vue from '@vitejs/plugin-vue';
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';

// Utilities
import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'node:url';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: { transformAssetUrls }
    }),
    // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
    vuetify({
      autoImport: true,
    }),
  ],
  base: process.env.BASE_URL ?? "/",
  define: { 'process.env': {} },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
    extensions: [
      '.js',
      '.json',
      '.jsx',
      '.mjs',
      '.ts',
      '.tsx',
      '.vue',
    ],
  },
  build: {
    rollupOptions: {
      logLevel: 'debug',
      // output: {
      // manualChunks: function (id, arg2) {
      //   if (!id.includes("node_modules")) {
      //     return "app";
      //   }
      //   else if (id.includes("node_modules/vue/") || id.includes("node_modules/@vue/")) {
      //     return 'vuejs';
      //   }
      //   else if (id.includes("node_modules/apache-arrow")
      //     || id.includes("node_modules/flatbuffers")
      //     || id.includes("node_modules/@ducklab")
      //     || id.includes("node_modules/@duckdb")
      //   ) {
      //     return "ducklab";
      //   }
      //   else if (id.includes("node_modules/monaco-editor")) {
      //     return "monaco";
      //   }
      //   else if (id.includes("node_modules/vuetify")
      //   ) {
      //     return "vuetify";
      //   }
      //   console.log("Default chunking: ", id);
      // }
      // }
    }
  },
  assetsInclude: ['*/*.otf'],
  server: {
    port: 3000,
  },
});
