const TOKEN_KEY = "token_key";

export const getToken = (): string | undefined => {
  return localStorage.getItem(TOKEN_KEY) || undefined;
};

export function setToken(token: string): void {
  localStorage.setItem(TOKEN_KEY, token);
}

export function clearToken(): void {
  localStorage.removeItem(TOKEN_KEY);
}
