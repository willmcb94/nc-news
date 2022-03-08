import { Route, Routes } from "react-router"
import ArticlePage from "./ArticlePage"
import Articles from "./Articles"


const Main = () => {



    return (
        <section>

            <Routes>
                <Route path="/" element={<Articles />}> </Route>
                <Route path="/articles" element={<Articles />}> </Route>
                <Route path={"/articles?topic=:paramTopic"} element={<Articles />}> </Route>
                <Route path={"/articles/:article_id"} element={<ArticlePage />}> </Route>


            </Routes>
        </section>

    )
}

export default Main