import axios from "axios";


export const fetchArticles = (topic) => {

    // if (!topic) {
    const params = { topic }
    return axios
        .get(`https://will-nc-news.herokuapp.com/api/articles`, { params })
        .then(({ data: { articles } }) => {

            return articles
        })
    // } else {
    //     return axios
    //         .get(`https://will-nc-news.herokuapp.com/api/articles?topic=${topic}`)
    //         .then(({ data: { articles } }) => {
    //             return articles
    //         })
    // }
}

export const fetchTopics = () => {

    return axios
        .get("https://will-nc-news.herokuapp.com/api/topics")
        .then(({ data: { topics } }) => {

            return topics
        })
}

export const fetchArticleById = (id) => {


    return axios
        .get(`https://will-nc-news.herokuapp.com/api/articles/${id}`)
        .then((data) => {

            return data.data
        })
}

export const patchArticleVote = (id, voteUpdate) => {
    return axios
        .patch(`https://will-nc-news.herokuapp.com/api/articles/${id}`, voteUpdate)

}