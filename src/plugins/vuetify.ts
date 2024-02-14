/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components';
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'
import { mdiFile, mdiFolder, mdiDelete, mdiPlus, mdiClose, mdiPlay, mdiArrowDown, mdiChevronDown, mdiChevronUp, mdiArrowUp, mdiChevronRight, mdiMoonFirstQuarter, mdiSunAngle, mdiLightbulb, mdiFloppy, mdiCodeBraces } from "@mdi/js";
import { useDark } from '@vueuse/core';


const isDark = useDark();

const classicLight = {
  dark: false,
  colors: {
    background: '#272822',
    surface: '#F8F8F2',
    'surface-bright': '#FFFFFF',
    'surface-light': '#EEEEEE',
    'surface-variant': '#424242',
    'on-surface-variant': '#EEEEEE',
    primary: '#F8F8F0',
    'primary-darken-1': '#1F5592',
    secondary: '#F8F8F0',
    'secondary-darken-1': '#018786',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
  },
}

const duckLabDark = {
  dark: true,
  colors: {
    background: '#171d1f',
    surface: '#F2B56B',
    primary: '#226368',
    secondary: '#024959',
    'primary-contrast': '#fff',
  }, //226368
}

const duckLabLight = {
  dark: false,
  colors: {
    background: '#fff',
    surface: '#024959',
    primary: '#024873',
    secondary: '#F2B56B',
    'primary-contrast': '#fff', // contrast primary
  },
}

// const duckLabLight = {
//   dark: false,
//   colors: {
//     background: '#fff',
//     surface: '#fff',
//     primary: '#44a',
//     secondary: '#F8F8F0',
//   },
// }

export default createVuetify({
  components,
  icons: {
    defaultSet: 'mdi',
    aliases: {
      ...aliases,
      file: mdiFile,
      folder: mdiFolder,
      delete: mdiDelete,
      plus: mdiPlus,
      play: mdiPlay,
      close: mdiClose,
      arrowDown: mdiArrowDown,
      arrowUp: mdiArrowUp,
      angleDown: mdiChevronDown,
      angleUp: mdiChevronUp,
      angleRight: mdiChevronRight,
      moon: mdiMoonFirstQuarter,
      light: mdiLightbulb,
      save: mdiFloppy,
      code: mdiCodeBraces
    },
    sets: {
      mdi,
    },
  },
  theme: {
    defaultTheme: isDark.value ? 'dark' : 'light',
    themes: {
      light: duckLabLight,
      dark: duckLabDark,
      // light: {
      //   colors: {
      //     primary: '#1867C0',
      //     secondary: '#5CBBF6',
      //   },
      // },
    },
  },
})
