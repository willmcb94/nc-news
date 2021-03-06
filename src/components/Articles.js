import { useEffect, useState } from 'react';

import { useSearchParams } from 'react-router-dom';
import { fetchArticles } from '../api';
import ArticleCard from './ArticleCard';
import Sort from './Sort';
import TopicsDropdown from './TopicsDropdown';

const Articles = () => {
  const [searchParams] = useSearchParams();
  const paramTopic = searchParams.get('topic');
  const paramSort = searchParams.get('sort_by');
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setError(null);
    fetchArticles(paramTopic, paramSort)
      .then((articles) => {
        setArticles(articles);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
      });
  }, [paramTopic, paramSort]);

  if (error) {
    return <h2>Oops somethings gone wrong</h2>;
  }

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="main-section">
      <div className="sub-header-drop-down">
        <div className="sub-header-div">
          <h2 className="sub-header">Articles</h2>
        </div>
        <div className="topics-dropdown-div">
          <TopicsDropdown
            className="TopicsDropdown"
            paramTopic={paramTopic}
            paramSort={paramSort}
          />
          <Sort paramSort={paramSort} paramTopic={paramTopic} />
        </div>
      </div>
      <section className="articles-container">
        {articles.map((article, index) => {
          return (
            <ArticleCard
              key={`Article-${index}`}
              title={article.title}
              topic={article.topic}
              created_at={article.created_at}
              article_id={article.article_id}
            />
          );
        })}
      </section>
    </div>
  );
};

export default Articles;
