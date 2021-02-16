export interface TokenDecodeModel {
  access_token: string;
  token_type: string;
  refresh_token: string;
  expires_in: number;
  scope: string;
  role: string;
  userId: string;
  jti: string;
  email: string;

}
