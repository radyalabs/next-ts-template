import type { NextFontWithVariable } from 'next/dist/compiled/@next/font';

import type { ThemeOptions } from '@mui/material';
import resolveConfig from 'tailwindcss/resolveConfig';

import tailwindConfig from '../../tailwind.config';

declare module '@mui/material/styles' {
  interface Palette {
    default: Palette['primary'];
    danger: Palette['primary'];
  }

  interface PaletteOptions {
    default?: PaletteOptions['primary'];
    danger?: PaletteOptions['primary'];
  }
}

export const APP_COMPANY = 'Radya Digital';
export const APP_TITLE = 'Radya Next Template';
export const APP_TOKEN_KEY = 'rad_token';
export const APP_REFRESH_KEY = 'rad_refresh_token';
export const INITIAL_PAGESIZE = 50;

const { theme } = resolveConfig(tailwindConfig);
const { colors } = theme || {};
const {
  primary,
  n,
  danger,
  success,
} = colors || {};

export const MUI_THEME = (
  rootElement: HTMLElement | null,
  font: NextFontWithVariable,
): ThemeOptions => ({
  components: {
    MuiPopover: {
      defaultProps: {
        container: rootElement,
        style: { fontFamily: font.style.fontFamily },
      },
    },
    MuiPopper: {
      defaultProps: {
        container: rootElement,
        style: { fontFamily: font.style.fontFamily },
      },
    },
    MuiModal: {
      defaultProps: {
        container: rootElement,
        style: { fontFamily: font.style.fontFamily },
      },
    },
  },
  typography: {
    fontFamily: font.style.fontFamily,
    button: {
      textTransform: 'none',
    },
  },
  palette: {
    primary: {
      50: primary['50'],
      100: primary['100'],
      200: primary['200'],
      300: primary['300'],
      400: primary['400'],
      500: primary['500'],
      600: primary['600'],
      700: primary['700'],
      800: primary['800'],
      900: primary['900'],
      contrastText: n['2'],
    },
    default: {
      50: n['4'],
      100: n['5'],
      200: n['6'],
      300: n['7'],
      400: n['8'],
      500: n['9'],
      600: n['10'],
      700: n['11'],
      800: n['12'],
      900: n['13'],
      contrastText: n['2'],
    },
    danger: {
      50: danger['50'],
      100: danger['100'],
      200: danger['200'],
      300: danger['300'],
      400: danger['400'],
      500: danger['500'],
      600: danger['600'],
      700: danger['700'],
      800: danger['800'],
      900: danger['900'],
      contrastText: n['2'],
    },
    success: {
      50: success['50'],
      100: success['100'],
      200: success['200'],
      300: success['300'],
      400: success['400'],
      500: success['500'],
      600: success['600'],
      700: success['700'],
      800: success['800'],
      900: success['900'],
      contrastText: n['2'],
    },
  },
});

export const MAX_TOASTS = 5;
