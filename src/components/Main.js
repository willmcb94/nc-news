import { Route, Routes } from "react-router"
import ArticlePage from "./ArticlePage"
import Articles from "./Articles"
import ErrorPage from "./Error"
import Users from "./Users"


const Main = () => {



    return (
        <section>

            <Routes>
                <Route path="/" element={<Articles />}> </Route>
                <Route path="/articles" element={<Articles />}> </Route>
                <Route path="/users" element={<Users />} />
                <Route path={"/articles/:article_id"} element={<ArticlePage />}> </Route>
                <Route path="*" element={<ErrorPage />} />

            </Routes>
        </section>

    )
}

export default Main