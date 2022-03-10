import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { fetchArticleById, patchArticleVote } from "../api"
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';
import Comments from "./Comments";




const ArticlePage = () => {

    const [article, setArticle] = useState({})
    const { article_id } = useParams()
    const [isLoading, setIsLoading] = useState(true)
    const [voteChange, setVoteChange] = useState(0);
    const [showComments, setShowComments] = useState(false)


    useEffect(() => {
        fetchArticleById(article_id).then((article) => {

            article.date = article.created_at.slice(3, 21)
            setArticle(article)
            setIsLoading(false)

        })
    }, [article_id, showComments])

    const handleVote = async (votecrement) => {

        setVoteChange(voteChange + votecrement)
        try {
            await patchArticleVote(article.article_id, { inc_votes: votecrement })
        } catch (err) {
            setVoteChange(voteChange - votecrement)
            alert("Vote unsuccesful please try again")
        }
    }


    if (isLoading) {
        return <h2>Loading...</h2>
    }
    return (
        <section>
            <section className="article-main-section">
                <h2>{article.title}</h2>
                <article className="article-body-info">
                    <p className="article-body">{article.body}</p>
                    <span className="article-body-vote">
                        <span className="vote-span">
                            <IconButton color="success" onClick={() => { handleVote(1) }} disabled={voteChange === 1}><ThumbUpIcon className="vote" /></IconButton>
                            <dt>{article.votes + voteChange}</dt>
                            <IconButton color="error" onClick={() => { handleVote(-1) }} disabled={voteChange === -1} ><ThumbDownIcon className="vote" /></IconButton>
                        </span>
                        <span className="article-info">

                            <dt>{`Author: ${article.author}`}</dt>
                            <dt>{`Topic: ${article.topic}`}</dt>
                            <dt>{article.date}</dt>

                            <IconButton onClick={() => { setShowComments(showComments => !showComments) }}><CommentIcon className="view-comment" /> </IconButton>
                        </span>
                    </span>
                </article>
            </section>

            {showComments ? <Comments id={article_id} /> : null}



        </section>
    )
}

export default ArticlePage