import Follow from "components/follow.component";
import Avatar from "components/user-avatar.component";
import { IArticle } from "models/articles.model";
import { useState } from "react";
import { Link } from "react-router-dom";
import { formatDate } from "utils/date.utils";

interface IArticleItemProps {
  article: IArticle;
}

const ArticleItem = ({ article }: IArticleItemProps) => {
  const [favorited, setFavorited] = useState(article.favorited);
  const [favoritesCount, setFavoritesCount] = useState(article.favoritesCount);
  return (
    <div className="article-preview">
      <div className="article-meta">
        <Link to={`/profile/${article.author.username}`}>
          <Avatar src={`${article.author.image}`} />
        </Link>
        <div className="info">
          <Link to={`/profile/${article.author.username}`} className="author">
            {article.author.username}
          </Link>
          <span className="date">{formatDate(article.createdAt)}</span>
        </div>

        <Follow
          className="pull-xs-right"
          slug={`/articles/${article.slug}/favorite`}
          username={article.author.username}
          isFollowing={favorited}
          isPrimary={true}
          isProfile={false}
          changeFollow={setFavorited}
          changeFollowCount={setFavoritesCount}
        >
          <i className="ion-heart" /> {favoritesCount}
        </Follow>
      </div>
      <Link to={`/${article.slug}`} className="preview-link">
        <h1>{article.title}</h1>
        <p>{article.description}</p>
        <span>Read more...</span>
      </Link>
    </div>
  );
};
export default ArticleItem;
