import LoginIcon from '@mui/icons-material/Login';
import { IconButton } from '@mui/material';
import { useContext } from 'react';
import { UserContext } from '../contexts.js/UserContext';

const UserCard = ({ username, avatar_url }) => {
    const { setUser } = useContext(UserContext);

    const handleSignIn = () => {
        setUser(username)


    }
    return (
        <section className="user-card">
            <h3>{username}</h3>
            <img className="avatar" src={avatar_url} alt={`${username} avatar`} />
            <span className="sign-in">
                <IconButton color="inherit" onClick={() => { handleSignIn() }}>
                    SIGN IN
                    <LoginIcon />
                </IconButton>
            </span>

        </section>
    )
}

export default UserCard