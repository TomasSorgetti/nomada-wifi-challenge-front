export interface IAuthCredentials {
  email: string;
  password: string;
}

export interface IRegister extends IAuthCredentials {
  username?: string;
}

export interface ILogin extends IAuthCredentials {
  persist?: boolean;
}
