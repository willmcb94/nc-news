import LoginIcon from '@mui/icons-material/Login';

const UserCard = ({ username, avatar_url }) => {
    return (
        <section className="user-card">
            <h3>{username}</h3>
            <img className="avatar" src={avatar_url} alt={`${username} avatar`} />
            <span className="sign-in">
                <label >SIGN IN</label>
                <LoginIcon />
            </span>

        </section>
    )
}

export default UserCard