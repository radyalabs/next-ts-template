export const BASE_API_URL = process.env.NEXT_PUBLIC_BASE_API_URL;

export const ENDPOINT = {
  IDENTITY: {
    LOGIN: '/identity/sign-in',
    PROFILE: '/identity/me',
    REFRESH: '/identity/refresh',
  },
  USER_MGMT: {
    USERS: '/user-management/users',
    USERS_BY_ID: (id: string) => `/user-management/users/${id}`,
    SCOPES: '/user-management/users/application-scopes',
  },
} as const;
