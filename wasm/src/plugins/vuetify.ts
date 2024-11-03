/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';

// Composables
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg';
import { mdiFile, mdiFolder, mdiDelete, mdiPlus, mdiClose, mdiPlay, mdiArrowDown, mdiChevronDown, mdiChevronUp, mdiArrowUp, mdiChevronRight, mdiMoonFirstQuarter, mdiSunAngle, mdiLightbulb, mdiFloppy, mdiCodeBraces, mdiRefresh, mdiGithub } from "@mdi/js";
import { useDark } from '@vueuse/core';


const isDark = useDark({ initialValue: 'light' });

const duckLabDark = {
  dark: true,
  colors: {
    background: '#171d1f',
    surface: '#F2B56B',
    primary: '#226368',
    secondary: '#024959',
    'primary-contrast': '#fff',
    shadow: '#fff'
  }, //226368
};

const duckLabLight = {
  dark: false,
  colors: {
    background: '#fff',
    surface: '#024959',
    primary: '#024873',
    secondary: '#F2B56B',
    'primary-contrast': '#fff', // contrast primary
    shadow: '#000'
  },
};


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
      code: mdiCodeBraces,
      refresh: mdiRefresh,
      github: mdiGithub
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
});
