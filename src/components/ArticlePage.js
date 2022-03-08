import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { fetchArticleById } from "../api"

const ArticlePage = () => {
    const [article, setArticle] = useState({})
    const { article_id } = useParams()
    console.log(article_id, 'article page')

    useEffect(() => {
        fetchArticleById(article_id).then((article) => {
            console.log(article, 'tester')
            setArticle(article)
        })
    }, [article_id])


    return (
        <section className="article-main-section">
            <h2>{article.title}</h2>
            <article className="article-body-info">
                <p className="article-body">{article.body}</p>
                <span className="article-info">
                    <h4>{article.author}</h4>
                    <dl>
                        <dt>{article.topic}</dt>
                        <dt>Votes - {article.votes}</dt>
                        <dt>{article.comments}</dt>
                    </dl>
                </span>
            </article>
        </section>
    )
}

export default ArticlePage