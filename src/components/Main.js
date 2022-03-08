import { Route, Routes } from "react-router"
import Articles from "./Articles"


const Main = () => {



    return (
        <section>

            <Routes>
                <Route path="/" element={<Articles />}> </Route>
                <Route path="/articles" element={<Articles />}> </Route>
                <Route path={"/articles/:paramTopic"} element={<Articles />}> </Route>


            </Routes>
        </section>

    )
}

export default Main