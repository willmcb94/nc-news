
import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { fetchArticles } from "../api"
import ArticleCard from "./ArticleCard"
import TopicsDropdown from "./TopicsDropdown"


const Articles = () => {
    const { paramTopic } = useParams()

    const [articles, setArticles] = useState([])

    useEffect(() => {
        if (!paramTopic) {
            fetchArticles().then((articles) => {

                setArticles(articles)
            })
        } else {
            fetchArticles(paramTopic).then((articles) => {

                setArticles(articles)
            })
        }
    }, [paramTopic])


    return (
        <div className="main-section">
            <div className="sub-header-drop-down">
                <div className="sub-header-div">
                    <h2 className="sub-header">Articles</h2>
                </div>
                <div className="topics-dropdown-div">
                    <TopicsDropdown paramTopic={paramTopic} />
                </div>
            </div>
            <section className="articles-container">
                {articles.map((article, index) => {
                    return <ArticleCard key={`Article-${index}`} title={article.title} topic={article.topic} created_at={article.created_at} article_id={article.article_id} />
                })}

            </section>

        </div>
    )
}

export default Articles