import { IArticlesResponse } from "models/articles.model";
import { useEffect, useState } from "react";
import { GetArticles, GetUserArticles } from "services/articles.service";
import ArticleItem from "./article-item.component";

interface IArticlesListProps {
  isGlobalFeed: boolean;
  username?: string;
}

const LIMIT = 10;

/*
    TODO:
        - pagination or lazy loading
        - remember state of current page
        - infomation when article list is empty
        - filtering by tags
        - 
*/
const ArticlesList = ({ isGlobalFeed, username }: IArticlesListProps) => {
  const [articleResponse, setArticleResponse] = useState<IArticlesResponse | null>(null);
  const [currentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getArticles() {
      const offset = LIMIT * (currentPage - 1);
      const response = !username ? await GetArticles(LIMIT, offset) : await GetUserArticles(LIMIT, offset, username);

      if (!response.ok) {
        console.log("Something went wrong!");
        //show information on screen
      } else {
        const data = await response.json();
        setArticleResponse(data);
      }
      setIsLoading(false);
    }
    setIsLoading(true);
    getArticles();
  }, [isGlobalFeed, currentPage]);

  return (
    <>
      {articleResponse && articleResponse.articles.map((article, id) => <ArticleItem key={id} article={article} />)}
      {isLoading && <div className="py-2">Loading articles...</div>}
    </>
  );
};
export default ArticlesList;
