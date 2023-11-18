import { IUserProfile } from "./user.model";

export interface IArticle {
  slug: string;
  title: string;
  description: string;
  body: string;
  tagList: string[];
  createdAt: string;
  updatedAt: string;
  favorited: boolean;
  favoritesCount: number;
  author: IUserProfile;
}

export interface IArticlesResponse {
  articles: IArticle[];
  articlesCount: number;
}
