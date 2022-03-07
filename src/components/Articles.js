import { useEffect, useState } from "react"
import { fetchArticles } from "../api"
import ArticleCard from "./ArticleCard"

const Articles = () => {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        fetchArticles().then((articles) => {
            setArticles(articles)
        })
    })
    return (
        <div>
            <h2>Articles</h2>
            <section className="main-section">
                {articles.map((article, index) => {
                    return <ArticleCard key={`Article-${index}`} title={article.title} topic={article.topic} created_at={article.created_at} />
                })}

            </section>
        </div>
    )
}

export default Articles