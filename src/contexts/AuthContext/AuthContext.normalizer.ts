import type { Profile } from '@/types/profile';

const profileNormalizer = (data: Profile): Profile => {
  const {
    userId,
    fullName,
    username,
    email,
    organizations,
    selectedOrganization,
    lastPasswordChangeAt,
    createdAt,
    createdBy,
    createdByFullName,
    lastUpdatedAt,
    lastUpdatedBy,
    lastUpdatedByFullName,
    scopes,
    profilePictureUri,
  } = data || {};

  return {
    userId: userId || '',
    fullName: fullName || '',
    username: username || '',
    email: email || '',
    lastPasswordChangeAt: lastPasswordChangeAt || '',
    createdAt: createdAt || '',
    createdBy: createdBy || '',
    createdByFullName: createdByFullName || '',
    lastUpdatedAt: lastUpdatedAt || '',
    lastUpdatedBy: lastUpdatedBy || '',
    lastUpdatedByFullName: lastUpdatedByFullName || '',
    scopes: scopes || [],
    profilePictureUri: profilePictureUri || '',
    organizations: organizations || [],
    selectedOrganization,
  };
};

export default profileNormalizer;
