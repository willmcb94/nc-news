
import { useEffect, useState } from "react"
import { getComments } from "../api"
import CommentCard from "./CommentCard"

import PostComment from "./PostComment";

const Comments = (id) => {
    const [comments, setComments] = useState([])



    useEffect(() => {
        getComments(id).then((commentsGot) => {

            setComments(commentsGot)

        })
    }, [id])

    return (


        <section className="comments-holder">
            <PostComment id={id} setComments={setComments} />
            {comments.map((comment, index) => {
                return <CommentCard key={`Comment-${index}`} author={comment.author} date={comment.created_at} body={comment.body} comment_id={comment.comment_id} setComments={setComments} />
            })}
        </section>

    )

}



export default Comments