import axios from "axios";

export default {
    login: function(info) {
        return axios.post("/api/business/login", { ...info })
    },
    register: function(data) {
        return axios.post("/api/business/register", data, {
            headers: {
                'Content-Type': `multipart/form-data; boundary=${data._boundary}`
            }
        })
    },
    find: function() {
        return axios.get('/api/business/profile', {
            headers: {
                'Authorization': `Bearer ${document.cookie.split(';')[0].split('=')[1]}`
            }
        })
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
    },
    updateInfo: function(data){
        return axios.put("/api/business/profile",data, {
            headers: {
                'Authorization': `Bearer ${document.cookie.split(';')[0].split('=')[1]}`
            }
        })
    },

    reply: function(data) {
        return axios.post("/api/business/bizReply", { ...data }, {
        headers: {
            'Authorization': `Bearer ${document.cookie.split(';')[0].split('=')[1]}`
        }
        })
    }

}