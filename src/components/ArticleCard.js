import { Link } from 'react-router-dom';

const ArticleCard = ({ title, topic, created_at, article_id }) => {
  return (
    <section className="article-card">
      <Link className="link-articles" to={`/articles/${article_id}`}>
        <h3>{title}</h3>
        <p>{topic}</p>
        <p>{created_at.slice(0, 10)}</p>
      </Link>
    </section>
  );
};

export default ArticleCard;
