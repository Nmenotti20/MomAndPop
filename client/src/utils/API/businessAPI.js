import axios from "axios";

export default {
    login: function(info) {
        return axios.post("/api/business/login", { ...info })
    },
    register: function(info) {
        return axios.post("/api/business/register", { ...info })
    },
    makePost: function(info) {
        return axios.post("/api/business/reviews", { ...info })
    },
    findBusinesses: function(query) {
        return axios.get("/api/business/findBusinesses", { query })
    },
    allReviews: function() {
        return axios.get("/api/business/reviews")
    },
    editReview: function(info) {
        return axios.put("/api/business/reviews", { ...info })
    },
    deleteReview: function(id) {
        return axios.delete("/api/business/reviews", { id })
    }
}