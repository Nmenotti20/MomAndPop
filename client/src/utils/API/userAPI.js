import axios from "axios";

export default {
    login: function(info) {
        return axios.post("/api/user/login", { ...info })
    },
    register: function(data) {
        return axios.post("/api/user/register", data, {
            headers: {
                'Content-Type': `multipart/form-data; boundary=${data._boundary}`
            }
        })
    },
    makeReview: function(info) {
        return axios.post("/api/user/reviews", { ...info }, {
            headers: {
                'Authorization': `Bearer ${document.cookie.split(';')[0].split('=')[1]}`
            }
        })
    },
    findOneUser: function() {
        return axios.get('/api/user/findOneUser', {
            headers: {
                'Authorization': `Bearer ${document.cookie.split(';')[0].split('=')[1]}`
            }
        })
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
    },
    updateInfo: function(data){
        return axios.put('/api/user/findOneUser',data, {
            headers: {
                'Authorization': `Bearer ${document.cookie.split(';')[0].split('=')[1]}`
            }
        })
    },



}