import type { ReactNode } from 'react';

import Content from '@/components/layout/Content';
import Header from '@/components/layout/Header';
import Sidebar from '@/components/layout/Sidebar';

const Layout = ({ children }: { children: ReactNode }) => (
  <div className="relative bg-neutral">
    <Header />
    <div className="relative">
      <Sidebar />
      <Content>
        {children}
      </Content>
    </div>
  </div>
);

export default Layout;
