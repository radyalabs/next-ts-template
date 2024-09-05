import type { Metadata } from 'next';

import Dashboard from '#dashboard/views/Dashboard';

export const metadata: Metadata = {
  title: 'Dashboard',
};

const DashboardPage = () => <Dashboard />;

export default DashboardPage;
