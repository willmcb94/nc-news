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

export const getComments = (id) => {

    return axios
        .get(`https://will-nc-news.herokuapp.com/api/articles/${id.id}/comments`).then(({ data }) => {

            return data.comments
        })
}

export const getUsers = () => {
    return axios
        .get(`https://will-nc-news.herokuapp.com/api/users`)
        .then(({ data: { users } }) => {

            return users
        })
}

export const postComment = ({ id }, body) => {

    console.log(id)
    return axios
        .post(`https://will-nc-news.herokuapp.com/api/articles/${id}/comments`, body)
        .then(({ data: { comment } }) => {
            console.log(comment)
            return comment
        })
}