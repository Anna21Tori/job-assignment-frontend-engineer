import Follow from "components/follow.component";
import Avatar from "components/user-avatar.component";
import { IArticle } from "models/articles.model";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { GetArticle } from "services/articles.service";
import { formatDate } from "utils/date.utils";

type ArticleParamsType = {
  slug: string;
};

const ArticlePage = () => {
  const [article, setArticle] = useState<IArticle | null>(null);
  const [favorited, setFavorited] = useState(false);
  const [following, setFollowing] = useState(false);
  const [favoritesCount, setFavoritesCount] = useState(0);
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
    }

    getArticle();
  }, [slug]);

  useEffect(() => {
    if (article) {
      setFavorited(article.favorited);
      setFollowing(article.author.following);
      setFavoritesCount(article.favoritesCount);
    }
  }, [article]);

  return (
    <>
      {article && (
        <div className="article-page page">
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
                <Follow
                  isPrimary={false}
                  username={article.author.username}
                  isFollowing={following}
                  slug={`/profiles/${article.author.username}/follow`}
                  isProfile={true}
                  changeFollow={setFollowing}
                  changeFollowCount={() => null}
                >
                  <i className={following ? "ion-minus-round" : "ion-plus-round"} />
                  &nbsp; Follow {article.author.username} <span className="counter">(10)</span>
                </Follow>
                &nbsp;&nbsp;
                <Follow
                  slug={`/articles/${article.slug}/favorite`}
                  username={article.author.username}
                  isFollowing={favorited}
                  isPrimary={true}
                  isProfile={false}
                  changeFollow={setFavorited}
                  changeFollowCount={setFavoritesCount}
                >
                  <i className="ion-heart" />
                  &nbsp; Favorite Post <span className="counter">{favoritesCount}</span>
                </Follow>
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
