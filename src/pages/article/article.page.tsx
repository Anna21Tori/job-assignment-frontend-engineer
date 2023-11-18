import Avatar from "components/user-avatar.component";
import { IUserContext, UserContext } from "contexts/user.context";
import { IArticle } from "models/articles.model";
import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { GetArticle } from "services/articles.service";
import { formatDate } from "utils/date.utils";

type ArticleParamsType = {
  slug: string;
};

const ArticlePage = () => {
  const { currentUser } = useContext<IUserContext>(UserContext);
  const [article, setArticle] = useState<IArticle | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { slug } = useParams<ArticleParamsType>();

  useEffect(() => {
    async function getArticle() {
      const response = await GetArticle(slug);

      if (!response.ok) {
        console.log("Article was not found!");
        //display not found page
      } else {
        const data = await response.json();
        setArticle(data.article);
      }
      setIsLoading(false);
    }

    getArticle();
  }, [slug]);

  return (
    <>
      {article && (
        <div className="article-page content-page">
          <div className="banner">
            <div className="container">
              <h1>{article.title}</h1>

              <div className="article-meta">
                <Link to={`/profile/${article.author.username}`}>
                  <Avatar src={article.author.image} />
                </Link>
                <div className="info">
                  <Link to={`/profile/${article.author.username}`} className="author">
                    {article.author.username}
                  </Link>
                  <span className="date">{formatDate(article.createdAt)}</span>
                </div>
                <button className="btn btn-sm btn-outline-secondary">
                  <i className="ion-plus-round" />
                  &nbsp; Follow {article.author.username} <span className="counter">(10)</span>
                </button>
                &nbsp;&nbsp;
                <button className="btn btn-sm btn-outline-primary">
                  <i className="ion-heart" />
                  &nbsp; Favorite Post <span className="counter">{article.favoritesCount}</span>
                </button>
              </div>
            </div>
          </div>

          <div className="container page">
            <div className="row article-content">
              <div className="col-md-12">{article.body}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ArticlePage;
