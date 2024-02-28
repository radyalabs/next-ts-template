import { Suspense } from 'react';
import type { Metadata } from 'next';

import { APP_TITLE } from '@/constants/config';
import UserManagementList from '@/views/UserManagement/UserManagementList';

import Loading from '../loading';

export const metadata: Metadata = {
  title: `${APP_TITLE} - User Access Management`,
};

const UserManagementListPage = () => (
  <Suspense fallback={<Loading />}>
    <UserManagementList />
  </Suspense>
);

export default UserManagementListPage;
