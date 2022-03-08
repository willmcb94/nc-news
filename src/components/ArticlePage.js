import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { fetchArticleById } from "../api"

const ArticlePage = () => {
    const [article, setArticle] = useState()
    const { article_id } = useParams()
    console.log(article_id, 'article page')

    useEffect(() => {
        fetchArticleById(article_id).then((article) => {
            console.log(article, 'tester')
            setArticle(article)
        })
    }, [])
    console.log(article, 'articlepage')
    return (
        <section className="article-page">
            <h2>{article.title}</h2>

            <p>{article.body}</p>
            <h4>{article.author}</h4>
            <dl>
                <dt>{article.topic}</dt>
                <dt>{article.votes}</dt>
                <dt>{article.comments}</dt>

            </dl>
        </section>
    )
}

export default ArticlePage