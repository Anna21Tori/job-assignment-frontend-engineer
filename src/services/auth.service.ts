import { IUserCredentials } from "models/user-credentials.model";
import { headers } from "../utils/headers.utils";

export async function LoginUser(user: IUserCredentials) {
  return fetch("http://localhost:3000/api/users/login", {
    method: "POST",
    headers: { ...headers() },
    body: JSON.stringify({ user }),
  });
}

export async function GetCurrentUser() {
  return fetch("http://localhost:3000/api/user", {
    method: "GET",
    headers: { ...headers() },
  });
}
