export interface IUser {
  username: string;
  email: string;
  bio: string;
  image: string;
  token: string;
}

export interface IUserProfile {
  username: string;
  email: string;
  bio: string;
  image: string;
  following: boolean;
}
