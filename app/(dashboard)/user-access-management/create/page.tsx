import { Suspense } from 'react';
import type { Metadata } from 'next';

import Loading from '@/app/(dashboard)/loading';

import UserManagementForm from '#user-management/views/UserManagementForm';

export const metadata: Metadata = {
  title: 'Create User',
};

const UserManagementCreatePage = () => (
  <Suspense fallback={<Loading />}>
    <UserManagementForm />
  </Suspense>
);

export default UserManagementCreatePage;
