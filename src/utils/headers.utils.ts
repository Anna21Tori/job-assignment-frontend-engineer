import { getToken } from './token.util';

export const headers = () => {
  const currentToken = getToken();
  return {
    'Content-Type': 'application/json',
    ...(currentToken? { 
        Authorization: `Token ${currentToken}` 
    } : {}),
  };
}