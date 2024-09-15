const BASE_URL = "http://localhost:8080/api/v1";

interface IAuth {
  email: string;
  password: string;
  persist?: boolean;
  username?: string;
}
export const authService = async (path: string, body: IAuth) => {
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

// TODO: Add logout, refresh and me
