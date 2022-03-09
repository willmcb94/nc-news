import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { fetchArticleById, patchArticleVote } from "../api"
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import IconButton from '@mui/material/IconButton';




const ArticlePage = () => {

    const [article, setArticle] = useState({})
    const { article_id } = useParams()
    const [votes, setVotes] = useState(0)
    const [voteChange, setVoteChange] = useState(0);


    useEffect(() => {
        fetchArticleById(article_id).then((article) => {

            setArticle(article)
            setVotes(article.votes)

        })
    }, [article_id])

    const handleVote = async (votecrement) => {
        try {
            setVotes(votes + votecrement)
            setVoteChange(voteChange + votecrement)
            await patchArticleVote(article.article_id, { inc_votes: votecrement })
        } catch (err) {
            alert("Vote unsuccesful please try again")
        }
    }


    return (
        <section className="article-main-section">
            <h2>{article.title}</h2>
            <article className="article-body-info">
                <span className="article-body-vote">
                    <p className="article-body">{article.body}</p>
                    <span className="vote-span">
                        <IconButton color="success" onClick={() => { handleVote(1) }} disabled={voteChange === 1}><ThumbUpIcon className="vote" /></IconButton>
                        <dt>{votes}</dt>
                        <IconButton color="error" onClick={() => { handleVote(-1) }} disabled={voteChange === -1} ><ThumbDownIcon className="vote" /></IconButton>
                    </span>
                </span>
                <span className="article-info">
                    <h4>{article.author}</h4>
                    <dl>
                        <dt>{article.topic}</dt>

                        <dt>{article.comments}</dt>

                    </dl>
                </span>
            </article>
        </section>
    )
}

export default ArticlePage