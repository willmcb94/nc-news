
import { useContext } from "react";
import { Link } from "react-router-dom"
import { UserContext } from "../contexts.js/UserContext";


const Header = () => {


    const { user, setUser } = useContext(UserContext);

    const handleSignIn = () => {
        setUser("")

    }
    return (
        <section>
            <div className="header-nav">
                <header><h1 className="title">NC-News</h1></header>
                <nav className="nav">

                    <ul className="nav-ul">
                        <Link to="/articles" className="nav-text link">Articles</Link>
                        <Link to="/users" className="nav-text link">Users</Link>
                        {user === "" ? <Link to="/users" className="nav-text link">Sign in</Link> : <li onClick={handleSignIn} className="nav-text link sign-out">{user} Sign out</li>}
                    </ul>
                </nav>
            </div>



        </section>
    )
}

export default Header