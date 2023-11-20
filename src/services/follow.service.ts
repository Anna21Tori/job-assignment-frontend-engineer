import { headers } from "../utils/headers.utils";

export async function SetFollow(slug: string, isFollowing: boolean) {
  return fetch(`http://localhost:3000/api${slug}`, {
    method: isFollowing ? "DELETE" : "POST",
    headers: { ...headers() },
  });
}
