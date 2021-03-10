import axios from "axios";

export default {
    login: function(info) {
        return axios.post("/api/business/login", { ...info })
    },
    register: function(info) {
        return axios.post("/api/business/register", { ...info })
    },
    makePost: function(info) {
        return axios.post("/api/business/posts", { ...info })
    },
    allReviews: function() {
        return axios.get("/api/business/reviews")
    },
    allPosts: function() {
        return axios.get("/api/business/posts")
    },
    editPost: function(info) {
        return axios.put("/api/business/posts", { ...info })
    },
    deletePost: function(id) {
        return axios.delete("/api/business/posts", { id })
    }
}