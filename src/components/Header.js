import { Link } from "react-router-dom";

const Header = () => {
    return (
        <section>
            <header><h1 className="title">NC-News</h1></header>
            <div className="nav-sub-header">
                <h2 className="sub-header">Articles</h2>
                <nav className="nav">
                    <ul className="nav-ul">
                        <li className="nav-text">Articles</li>
                        <li className="nav-text">Users</li>
                        <li className="nav-text">Sign in</li>
                    </ul>
                </nav>
            </div>

        </section>
    )
}

export default Header