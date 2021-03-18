import axios from "axios";

export default {
    findZip: function(latitude, longitude) {
        return axios.get(`https://api.radar.io/v1/geocode/reverse?coordinates=${latitude},${longitude}`, {
            headers: {
                'Authorization': 'prj_test_pk_3a33ed5045028dcee001b5b94598dcf547d3d5d7'
            }
        })
    }
}