const ArticleCard = ({ title, topic, created_at }) => {
    return (
        <section className="article-card">
            <h3>{title}</h3>
            <p>{topic}</p>
            <p>{created_at.slice(0, 10)}</p>
        </section>
    )
}

export default ArticleCard