const ArticleCard = ({ title, topic, created_at }) => {
    return (
        <section className="article-card">
            <h3>{title}</h3>
            <p>{topic}</p>
            <p>{created_at}</p>
        </section>
    )
}

export default ArticleCard