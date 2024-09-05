import { Suspense } from 'react';
import type { Metadata } from 'next';

import Loading from '@/app/(dashboard)/loading';

import UserManagementDetail from '#user-management/views/UserManagementDetail';

export const metadata: Metadata = {
  title: 'User Access Management Detail',
};

const UserManagementDetailPage = ({ params: { id } }: { params:{ id:string } }) => (
  <Suspense fallback={<Loading />}>
    <UserManagementDetail id={id} />
  </Suspense>
);

export default UserManagementDetailPage;
