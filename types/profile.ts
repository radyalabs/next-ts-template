import type { AuditTrail } from '@/types/responses';

export interface Profile extends AuditTrail {
  userId: string;
  username: string;
  fullName: string;
  lastPasswordChangeAt: string;
  email: string;
  profilePictureUri: string;
  scopes: string[];
  organizations: Organization[];
  selectedOrganization?: Organization;
}

export interface Organization {
  organizationId: string;
  name: string;
}
