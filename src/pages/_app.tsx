import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {LayoutProvider} from '@/contexts/LayoutContext/LayoutContext';
import Header from '@/components/layout/Header/Header';
import Sidebar from '@/components/layout/Sidebar/Sidebar';
import Content from '@/components/layout/Content/Content';

export default function App({ Component, pageProps }: AppProps) {
  return(
      <LayoutProvider>
        <Header />
        <Sidebar />
        <Content>
          <Component {...pageProps} />
        </Content>
      </LayoutProvider>
  )
}
