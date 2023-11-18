import Avatar from "components/user-avatar.component";
import { IArticle } from "models/articles.model";
import { title } from "process";
import { Link } from "react-router-dom";
import { formatDate } from "utils/date.utils";

interface IArticleItemProps {
  article: IArticle;
}

const ArticleItem = ({ article }: IArticleItemProps) => {
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
        <button className="btn btn-outline-primary btn-sm pull-xs-right">
          <i className="ion-heart" /> ${article.favoritesCount}
        </button>
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
