/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */

// Plugins
import { loadFonts } from './webfontloader'
import vuetify from './vuetify'
import pinia from '../store'
import router from '../router'
import { registerMonaco } from './monaco'

// Types
import type { App } from 'vue'

export function registerPlugins(app: App) {
  loadFonts();

  app
    .use(vuetify)
    .use(router)
    .use(pinia);

  registerMonaco();
}

