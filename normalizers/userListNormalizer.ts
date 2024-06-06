import type { UserList, UserListResponse } from '@/types/user';
import { formatDate } from '@/utils';

const userListNormalizer = (data: UserListResponse): UserListResponse => {
  const {
    items, hasNextPage, page, pageSize,
  } = data || {};

  const listData = (items || []).map(
    (el): UserList => ({
      userId: el.userId || '-',
      username: el.username || '-',
      fullName: el.fullName || '-',
      email: el.email || '-',
      lastPasswordChangeAt: el.lastPasswordChangeAt || '-',
      statusRecord: el.statusRecord || '-',
      createdBy: el.createdBy || '',
      createdByFullName: el.createdByFullName || '',
      createdAt: el.createdAt ? formatDate(String(el.createdAt)) : '',
      lastUpdatedBy: el.lastUpdatedBy || '',
      lastUpdatedByFullName: el.lastUpdatedByFullName || '',
      lastUpdatedAt: el.lastUpdatedAt ? formatDate(String(el.lastUpdatedAt)) : '',
      userOrganizationStatus: el.userOrganizationStatus || 0,
    }),
  );

  return {
    items: listData,
    hasNextPage,
    page,
    pageSize,
  };
};

export default userListNormalizer;
