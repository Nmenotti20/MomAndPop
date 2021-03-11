import axios from "axios";

export default {
    login: function(info) {
        return axios.post("/api/user/login", { ...info })
    },
    register: function(info) {
        return axios.post("/api/user/register", { ...info })
    },
    makeReview: function(info) {
        return axios.post("/api/user/reviews", { ...info })
    },
    findAllBusinesses: function() {
        return axios.get('/api/user/findAllBusinesses')
    },
    findBusinesses: function(query) {
        return axios.get("/api/user/findBusinesses/" + query)
    },
    allReviews: function() {
        return axios.get("/api/user/reviews")
    },
    editReview: function(info) {
        return axios.put("/api/user/reviews", { ...info })
    },
    deleteReview: function(id) {
        return axios.delete("/api/user/reviews", { id })
    }
}