import { headers } from "../utils/headers.utils";

export async function GetProfileByUsername(username: string) {
  return fetch(`http://localhost:3000/api/profiles/${username}`, {
    method: "GET",
    headers: { ...headers() },
  });
}
