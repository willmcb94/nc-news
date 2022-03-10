import { Link } from "react-router-dom"


const Header = () => {
    return (
        <section>
            <div className="header-nav">
                <header><h1 className="title">NC-News</h1></header>
                <nav className="nav">

                    <ul className="nav-ul">
                        <Link to="/articles" className="nav-text link">Articles</Link>
                        <Link to="/users" className="nav-text link">Users</Link>
                        <li className="nav-text link">Sign in</li>
                    </ul>
                </nav>
            </div>



        </section>
    )
}

export default Header