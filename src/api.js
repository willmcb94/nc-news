import axios from "axios";


export const fetchArticles = (topic) => {

    if (!topic) {
        return axios
            .get(`https://will-nc-news.herokuapp.com/api/articles`)
            .then(({ data: { articles } }) => {

                return articles
            })
    } else {
        return axios
            .get(`https://will-nc-news.herokuapp.com/api/articles?topic=${topic}`)
            .then(({ data: { articles } }) => {
                return articles
            })
    }
}

export const fetchTopics = () => {

    return axios
        .get("https://will-nc-news.herokuapp.com/api/topics")
        .then(({ data: { topics } }) => {

            return topics
        })
}

export const fetchArticleById = (id) => {
    console.log(`https://will-nc-news.herokuapp.com/api/articles/${id}`)
    console.log(id, 'in api')
    return axios
        .get(`https://will-nc-news.herokuapp.com/api/articles/${id}`)
        .then((data) => {

            return data.data
        })
}