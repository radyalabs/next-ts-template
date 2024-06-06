import type { CredentialResponse, GsiButtonConfiguration } from 'google-one-tap';

export interface GoogleSSOProps extends GsiButtonConfiguration {
  clientId: string;
  className?: string;
  uxMode?: 'popup' | 'redirect';
  callback?: (credential: CredentialResponse) => void
}
