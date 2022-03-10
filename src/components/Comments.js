import { useEffect, useState } from "react"
import { getComments } from "../api"
import CommentCard from "./CommentCard"

const Comments = (id) => {
    const [comments, setComments] = useState([])

    useEffect(() => {
        getComments(id).then((commentsGot) => {

            setComments(commentsGot)

        })
    }, [id])

    return (
        <section className="comments-holder">
            <section className="comment-post"><h3>Post a comment</h3>
                <input className="comment-input"></input>
            </section>
            {comments.map((comment, index) => {
                return <CommentCard key={`Comment-${index}`} author={comment.author} date={comment.created_at} body={comment.body} />
            })}
        </section>
    )

}



export default Comments