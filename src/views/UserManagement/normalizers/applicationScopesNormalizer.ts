import type {
  ApplicationScope,
  ApplicationScopes,
} from '@/views/UserManagement/types/applicationScope';

const applicationScopesNormalizer = (data: ApplicationScopes): ApplicationScopes => (
  data || []).map(
  (el): ApplicationScope => ({
    name: el.name || '',
    scopes: el.scopes || [],
  }),
);

export default applicationScopesNormalizer;
