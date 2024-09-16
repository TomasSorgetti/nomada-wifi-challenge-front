import {
  IAuthCredentials,
  ILogin,
  IRegister,
} from "@/interfaces/auth.interface";

const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

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

export const deleteUserService = async ({
  email,
  password,
}: IAuthCredentials) => {
  const response = await fetch(`${BASE_URL}/users`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({ email, password }),
  });
  return await response.json();
};
