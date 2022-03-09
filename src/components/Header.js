import { Link } from "react-router-dom"


const Header = () => {
    return (
        <section>
            <div className="header-nav">
                <header><h1 className="title">NC-News</h1></header>
                <nav className="nav">

                    <ul className="nav-ul">
                        <Link to="/articles" className="nav-text link">Articles</Link>
                        <li className="nav-text">Users</li>
                        <li className="nav-text">Sign in</li>
                    </ul>
                </nav>
            </div>



        </section>
    )
}

export default Header