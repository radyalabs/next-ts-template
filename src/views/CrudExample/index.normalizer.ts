import type {
  User,
  UserListResponse,
} from 'src/views/CrudExample/index.types';

const userListNormalizer = (data: UserListResponse): UserListResponse => {
  const {
    items,
    hasNextPage,
    page,
    pageSize,
  } = data || {};

  const listData = (items || []).map((el): User => ({
    username: el.username || '',
    fullName: el.fullName || '',
    createdAt: el.createdAt || '',
    createdByName: el.createdByName || '',
    userId: el.userId || '',
    lastPasswordChangeAt: el.lastPasswordChangeAt || '',
  }));
  return {
    items: listData,
    hasNextPage,
    page,
    pageSize,
  };
};

export default userListNormalizer;
