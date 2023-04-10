import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { LayoutProvider } from '@/contexts/LayoutContext';

import '@/styles/globals.css';

const App = ({
  Component,
  pageProps,
}: AppProps) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <LayoutProvider>
        <Component {...pageProps} />
      </LayoutProvider>
    </QueryClientProvider>
  );
};
export default App;
