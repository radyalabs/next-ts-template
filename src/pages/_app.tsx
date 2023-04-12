import type { AppProps } from 'next/app';
import { Inter } from '@next/font/google';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { LayoutProvider } from '@/contexts/LayoutContext';

import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

const App = ({
  Component,
  pageProps,
}: AppProps) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <main className={inter.className}>
        <LayoutProvider>
          <Component {...pageProps} />
        </LayoutProvider>
      </main>
    </QueryClientProvider>
  );
};
export default App;
