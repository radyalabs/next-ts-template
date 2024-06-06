import type { User } from '@/types/user';
import { formatDate } from '@/utils';

const userNormalizer = (data: User): User => (
  {
    userId: data.userId || '-',
    username: data.username || '-',
    fullName: data.fullName || '-',
    email: data.email || '-',
    lastPasswordChangeAt: data.lastPasswordChangeAt || '-',
    statusRecord: data.statusRecord || '-',
    createdBy: data.createdBy || '',
    createdByFullName: data.createdByFullName || '',
    createdAt: data.createdAt ? formatDate(data.createdAt) : '',
    lastUpdatedBy: data.lastUpdatedBy || '',
    lastUpdatedByFullName: data.lastUpdatedByFullName || '',
    lastUpdatedAt: data.lastUpdatedAt ? formatDate(data.lastUpdatedAt) : '',
    scopes: data.scopes || [],
    userOrganizationStatus: data.userOrganizationStatus || 0,
  }
);

export default userNormalizer;
