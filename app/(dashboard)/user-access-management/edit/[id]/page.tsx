import { Suspense } from 'react';
import type { Metadata } from 'next';

import Loading from '@/app/(dashboard)/loading';
import { APP_TITLE } from '@/constants/config';
import UserManagementForm from '@/views/UserManagement/UserManagementForm';

export const metadata: Metadata = {
  title: `${APP_TITLE} - Edit User`,
};

const UserManagementEditPage = ({ params: { id } }: { params: { id: string } }) => (
  <Suspense fallback={<Loading />}>
    <UserManagementForm id={id} />
  </Suspense>
);

export default UserManagementEditPage;
