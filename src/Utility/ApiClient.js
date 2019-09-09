import ApiConfig from "../Config/ApiConfig";
import axios from "axios";
axios.defaults.baseURL = ApiConfig.API_BASE_URL;
axios.defaults.headers.common["Authorization"] = "";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.timeout = 5000;
const ApiClient = {
	executeRequest: (endpoint, headers = {}, params = {}, method = ApiConfig.METHODS.GET, token = null) => {
		return new Promise(function(resolve, reject) {
			let requestData = {
				method: method,
				url: endpoint,
				headers: headers
			};
			if (method === ApiConfig.METHODS.GET) {
				requestData["params"] = params;
			} else {
				requestData["data"] = params;
			}

			if (token) {
				headers["Authorization"] = `Bearer ${token}"`;
			}
			axios
				.request(requestData)
				.then(function(response) {
					resolve({
						isError: false,
						data: response.data,
						statusCode: response.status
					});
				})
				.catch(function(error) {
					let response = error.response;
					resolve({
						isError: true,
						errorCode: response.data.error,
						errorMessage: response.data.message,
						statusCode: response.status
					});
				});
		});
	}
};

export default ApiClient;
