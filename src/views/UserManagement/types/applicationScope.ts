export interface ApplicationScope {
  name: string;
  scopes: Scope[];
}

export interface Scope {
  name: string;
  description: string;
}

export type ApplicationScopes = ApplicationScope[];
