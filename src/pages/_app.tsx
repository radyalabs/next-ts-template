import type { AppProps } from 'next/app';

import { LayoutProvider } from '@/contexts/LayoutContext/LayoutContext';

import '@/styles/globals.css';

const App = ({
  Component,
  pageProps,
}: AppProps) => (
  <LayoutProvider>
    <Component {...pageProps} />
  </LayoutProvider>
);
export default App;
