const BASE_URL = "http://localhost:8080/api/v1";

interface IRegister {
  email: string;
  password: string;
  username?: string;
}
interface ILogin {
  email: string;
  password: string;
  persist?: boolean;
}
export const authService = async (path: string, body: IRegister) => {
  return await fetch(`${BASE_URL}/auth/${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(body),
  });
};

export const loginService = async ({ email, password, persist }: ILogin) => {
  const response = await fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({ email, password, persist }),
  });
  return await response.json();
};

// TODO: Add logout, refresh and me
