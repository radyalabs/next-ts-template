import type { Decorator, Preview, StoryFn } from '@storybook/react';
import { withThemeByClassName, withThemeFromJSXProvider } from '@storybook/addon-themes';

import '@/styles/globals.scss';
import { ThemeProvider } from '@mui/material';
import { Quicksand, Rubik } from 'next/font/google';

import theme from '@/lib/theme';

const preview: Preview = {
  parameters: {
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
      light: theme,
      dark: theme,
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
  (Story: StoryFn) => (
    <main className={`${rubik.variable} ${quicksand.variable} `} id="__next">
      <Story />
    </main>
  ),
];

export default preview;
