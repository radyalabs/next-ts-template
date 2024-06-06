import type { Metadata } from 'next';

import { APP_TITLE } from '@/constants/config';
import Dashboard from '@/views/Dashboard';

export const metadata: Metadata = {
  title: `${APP_TITLE} - Dashboard`,
};

const DashboardPage = () => <Dashboard />;

export default DashboardPage;
