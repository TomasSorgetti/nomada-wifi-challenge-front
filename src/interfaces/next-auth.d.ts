export interface ICredentials {
  email: string;
  password: string;
}

export interface AuthenticatedUser {
  id: string;
  email: string;
}

export interface IAuthorize {
  user?: AuthenticatedUser;
  accessToken?: string;
  refreshToken?: string;
  expiresIn?: number;
}
export interface IToken {
  user?: AuthenticatedUser;
  accessToken?: string | null;
  refreshToken?: string | null;
  expiresIn?: number | null;
  error?: string | null;
}