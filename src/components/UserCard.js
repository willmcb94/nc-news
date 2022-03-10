const UserCard = ({ username, avatar_url }) => {
    return (
        <section>
            <h3>{username}</h3>
            <img src={avatar_url} alt={`${username} avatar`} />
        </section>
    )
}

export default UserCard