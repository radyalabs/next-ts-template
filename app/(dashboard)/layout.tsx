import type { ReactNode } from 'react';

import Layout from '@/components/layout/Layout';

const DashboardLayout = ({ children }: { children: ReactNode }) => (
  <Layout>{children}</Layout>
);

export default DashboardLayout;
