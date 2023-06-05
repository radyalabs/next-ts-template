export const BASE_API_URL = process.env.NEXT_PUBLIC_BASE_API_URL;
export const ENDPOINT = {
  IDENTITY: {
    LOGIN: 'identity/sign-in',
    PROFILE: 'identity/me',
  },
  MASTER: {
    VEHICLE: 'master-data/inventory/vehicle/list',
  },
  USER_MGMT: {
    USERS: 'user-management/users',
  },
};
