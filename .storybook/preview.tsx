import { ThemeProvider } from '@mui/material';
import type { Decorator, Preview } from '@storybook/react';
import { withThemeByClassName, withThemeFromJSXProvider } from '@storybook/addon-themes';

import '@/styles/globals.scss';
import { primary, secondary } from '@/lib/font';

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

  tags: ['autodocs']
};

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
  (Story) => (
    <main className={`${primary.variable} ${secondary.variable} `} id="__next">
      <Story />
    </main>
  ),
];

export default preview;
