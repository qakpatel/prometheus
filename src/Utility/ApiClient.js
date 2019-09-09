import ApiConfig from "../Config/ApiConfig";
import axios from "axios";
const ApiClient = {
	executeRequest: (endpoint, headers = {}, params = {}, method = ApiConfig.METHODS.GET) => {
		return new Promise(function(resolve, reject) {
			let url = ApiConfig.API_BASE_URL + endpoint;
			axios.request({
				method: method,
				url: url,
				params: params,
				headers: headers
			}).then(function(response) {
                // to do handle
            }).catch(function(error) {
                // to do handle
            });
		});
	},
	executeMulipartRequest: (endpoint, headers = {}, params = {}, method = ApiConfig.METHODS.POST) => {
        let url = ApiConfig.API_BASE_URL + endpoint;
        let formData = new FormData();
        let keys = Object.keys(params);
        keys.forEach(function(key){
            formData.append(key, params[key]);
        });
        axios.request({
            method: method,
            url: url,
            params: formData,
            headers: headers
        }).then(function(response) {
            // to do handle
        }).catch(function(error) {
            // to do handle
        });
    }
};

export default ApiClient;
