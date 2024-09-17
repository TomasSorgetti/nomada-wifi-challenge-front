import { User } from "next-auth";
import { JWT } from "next-auth/jwt";

interface CustomToken extends JWT {
  accessToken?: string;
  refreshToken?: string;
  accessTokenExpires?: number;
  error?: string;
}

interface CustomUser extends User {
  id: string;
  accessToken?: string;
  refreshToken?: string;
  accessTokenExpires?: number;
}
interface RefreshTokenResponse {
  accessToken: string;
  refreshToken?: string;
  expiresIn: number;
}
