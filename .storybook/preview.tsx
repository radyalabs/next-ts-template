import type { Decorator, Preview } from '@storybook/react';
import { withThemeByClassName, withThemeFromJSXProvider } from '@storybook/addon-themes';

import '../src/styles/globals.css';
import { ThemeProvider } from '@mui/material';
import { Quicksand, Rubik } from 'next/font/google';

import { MUI_THEME } from '@/constants/config';
import { createTheme } from '@mui/material/styles';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

const rubik = Rubik({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-rubik',
});

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-quicksand',
});

// @ts-ignore
export const decorators: Decorator = [
  withThemeFromJSXProvider({
    themes: {
      light: createTheme(MUI_THEME(null, rubik)),
      dark: createTheme(MUI_THEME(null, rubik)),
    },
    defaultTheme: 'light',
    Provider: ThemeProvider,
  }),
  withThemeByClassName({
    themes: {
      // nameOfTheme: 'classNameForTheme',
      light: '',
      dark: 'dark',
    },
    defaultTheme: 'light',
  }),
// @ts-ignore
  (Story) => (
    <main className={`${rubik.variable} ${quicksand.variable} `}>
      <Story />
    </main>
  ),
];

export default preview;
