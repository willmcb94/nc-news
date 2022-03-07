import { Link } from "react-router-dom";

const Header = () => {
    return (
        <section>
            <header><h1>NC-News</h1></header>
            <nav>

                <button>Articles</button>
                <button>Users</button>
                <button>Sign in</button>

            </nav>
        </section>
    )
}

export default Header