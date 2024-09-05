import type {
  ApplicationScope,
  ApplicationScopes,
} from '#user-management/types/applicationScope';

const applicationScopesNormalizer = (data: ApplicationScopes): ApplicationScopes => (
  data || []).map(
  (el): ApplicationScope => ({
    name: el.name || '',
    scopes: el.scopes || [],
  }),
);

export default applicationScopesNormalizer;
