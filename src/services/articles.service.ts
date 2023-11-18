import { headers } from "../utils/headers.utils";

export async function GetArticles(limit: number, offset: number) {
  return fetch(`http://localhost:3000/api/articles?limit=${limit}&offset=${offset}`, {
    method: "GET",
    headers: { ...headers() },
  });
}

export async function GetUserArticles(limit: number, offset: number, author: string) {
  return fetch(`http://localhost:3000/api/articles?limit=${limit}&offset=${offset}&author=${author}`, {
    method: "GET",
    headers: { ...headers() },
  });
}

export async function GetArticle(slug: string) {
  return fetch(`http://localhost:3000/api/articles/${slug}`, {
    method: "GET",
    headers: { ...headers() },
  });
}
