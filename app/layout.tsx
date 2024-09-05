import { type ReactNode } from 'react';
import type { Metadata, Viewport } from 'next';

import { ThemeProvider } from '@mui/material';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';

import ContextProvider from '@/components/layout/ContextProvider';
import { APP_TITLE, APP_TITLE_TEMPLATE } from '@/constants/config';
import { primary, secondary } from '@/lib/font';
import theme from '@/lib/theme';

import '@/styles/globals.scss';

export const metadata: Metadata = {
  title: {
    default: APP_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export const viewport: Viewport = {
  width: '1280',
  initialScale: 1,
  maximumScale: 1,
  userScalable: true,
};

const RootLayout = ({ children }: { children: ReactNode }) => (
  <html lang="en">
    <body id="__next" className={`${primary.variable} ${secondary.variable}`}>
      <AppRouterCacheProvider>
        <ThemeProvider theme={theme}>
          <ContextProvider>{children}</ContextProvider>
        </ThemeProvider>
      </AppRouterCacheProvider>
    </body>
  </html>
);

export default RootLayout;
