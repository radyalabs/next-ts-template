import { Suspense } from 'react';
import type { Metadata } from 'next';

import UserManagementList from '#user-management/views/UserManagementList';

import Loading from '../loading';

export const metadata: Metadata = {
  title: 'User Access Management',
};

const UserManagementListPage = () => (
  <Suspense fallback={<Loading />}>
    <UserManagementList />
  </Suspense>
);

export default UserManagementListPage;
