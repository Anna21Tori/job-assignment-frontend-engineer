const TOKEN_KEY = 'token';

export const getToken = (): string | undefined  => {
  return localStorage.getItem(TOKEN_KEY) || undefined;
}
