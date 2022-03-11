
import { useEffect, useState } from "react"
import { getComments } from "../api"
import CommentCard from "./CommentCard"

import PostComment from "./PostComment";

const Comments = (id) => {
    const [comments, setComments] = useState([])
    const [isLoading, setIsLoading] = useState(true)



    useEffect(() => {
        getComments(id).then((commentsGot) => {

            setComments(commentsGot)
            setIsLoading(false)

        })
    }, [id])

    if (isLoading) {
        return <h2>Loading...</h2>
    }

    return (


        <section className="comments-holder">
            <PostComment id={id} setComments={setComments} />
            {comments.slice(0).reverse().map((comment, index) => {
                return <CommentCard key={`Comment-${index}`} author={comment.author} date={comment.created_at} body={comment.body} comment_id={comment.comment_id} setComments={setComments} comments={comments} />
            })}
        </section>

    )

}



export default Comments