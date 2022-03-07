import axios from "axios";


export const fetchArticles = () => {
    return axios
        .get("https://will-nc-news.herokuapp.com/api/articles")
        .then(({ data: { articles } }) => {
            return articles
        })

}