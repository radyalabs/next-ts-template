export interface LoginResponse {
  expirationSeconds: number,
  mustChangePassword: boolean,
  passwordExpirationDays: number,
  token: string,
}
