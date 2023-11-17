import { IUserCredentials } from "models/user-credentials.model";

export async function LoginUser(user: IUserCredentials) {
    return fetch('http://localhost:3000/api/users/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(user),
      });
}