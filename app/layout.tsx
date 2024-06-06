import { type ReactNode } from 'react';
import type { Metadata, Viewport } from 'next';
import { Quicksand, Rubik } from 'next/font/google';

import { ThemeProvider } from '@mui/material';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';

import ContextProvider from '@/components/layout/ContextProvider';
import theme from '@/lib/theme';

import '@/styles/globals.scss';

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

export const metadata: Metadata = {
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
    <body id="__next" className={`${rubik.variable} ${quicksand.variable}`}>
      <AppRouterCacheProvider>
        <ThemeProvider theme={theme}>
          <ContextProvider>{children}</ContextProvider>
        </ThemeProvider>
      </AppRouterCacheProvider>
    </body>
  </html>
);

export default RootLayout;
