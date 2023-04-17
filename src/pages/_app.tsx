import { useEffect, useState } from 'react';
import type { AppProps } from 'next/app';

import { createTheme, StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import { Inter } from '@next/font/google';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { AuthProvider } from '@/contexts/AuthContext';
import { LayoutProvider } from '@/contexts/LayoutContext';

import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

const App = ({
  Component,
  pageProps,
}: AppProps) => {
  const queryClient = new QueryClient();
  const [rootElement, setRootElement] = useState<HTMLElement | null>(null);
  useEffect(() => {
    if (document) {
      setRootElement(document.getElementById('__next'));
    }
  }, []);
  const theme = createTheme({
    components: {
      MuiPopover: {
        defaultProps: {
          container: rootElement,
        },
      },
      MuiPopper: {
        defaultProps: {
          container: rootElement,
        },
      },
    },
    typography: {
      fontFamily: 'Inter',
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <main className={inter.className}>
          <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
              <LayoutProvider>
                <Component {...pageProps} />
              </LayoutProvider>
            </ThemeProvider>
          </StyledEngineProvider>
        </main>
      </AuthProvider>
    </QueryClientProvider>
  );
};
export default App;
