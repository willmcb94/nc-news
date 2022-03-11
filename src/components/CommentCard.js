import { Button } from "@mui/material"
import { useContext } from "react"
import { commentDelete } from "../api"
import { UserContext } from "../contexts.js/UserContext"

const CommentCard = ({ author, body, date, comment_id, setComments, comments }) => {

    const { user } = useContext(UserContext)

    if (date) { date = `${date.slice(0, 10)} ${date.slice(11, 16)}` }


    const handleDelete = async () => {
        const deleted = comments.filter(comment => {
            return comment.comment_ud === comment_id
        })

        try {
            setComments((currentComments) => {
                return currentComments.filter(comment => {
                    return comment.comment_id !== comment_id
                })
            })

            await commentDelete(comment_id)

        } catch (err) {

            setComments((currentComments) => {
                return [...currentComments, deleted]
            })
            alert('Failed to delete comment')
        }
    }
    return (
        <section className="comment-card">
            <h3>{author}</h3>
            <p>{body}</p>
            <dt>{date || 'today'}</dt>
            <div className="delete-holder">
                {user === author ? <Button size="small" variant="outlined" color="error" onClick={() => handleDelete(comment_id)}>
                    Delete
                </Button> : <button className="hidden">Delete</button>}
            </div>
        </section>
    )
}


export default CommentCard