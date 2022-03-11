import { useContext } from "react"
import { commentDelete } from "../api"
import { UserContext } from "../contexts.js/UserContext"

const CommentCard = ({ author, body, date, comment_id, setComments }) => {

    const { user } = useContext(UserContext)
    date = `${date.slice(0, 10)} ${date.slice(11, 16)} `
    const handleDelete = async () => {
        try {
            setComments((currentComments) => {
                return currentComments.filter(comment => {
                    return comment.comment_id !== comment_id
                })
            })

            await commentDelete(comment_id)

        } catch (err) {

            alert('Failed to delete comment')
        }
    }
    return (
        <section className="comment-card">
            <h3>{author}</h3>
            <p>{body}</p>
            <dt>{date}</dt>
            {user === author ? <button onClick={() => handleDelete(comment_id)}>Delete</button> : <button className="hidden">Delete</button>}
        </section>
    )
}

export default CommentCard