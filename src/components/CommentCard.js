const CommentCard = ({ author, body, date }) => {
    date = `${date.slice(0, 10)} ${date.slice(11, 16)} `
    return (
        <section className="comment-card">
            <h3>{author}</h3>
            <p>{body}</p>
            <dt>{date}</dt>
        </section>
    )
}

export default CommentCard