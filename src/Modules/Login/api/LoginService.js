import ApiClient from "../../../Utility/ApiClient";
import ApiConfig from "../../../Config/ApiConfig";
const LoginService = {
	executeLogin: (email, password) => {
		let params = {
			username: email,
			password: password,
			client_id: ApiConfig.CLIENT_ID,
			client_secret: ApiConfig.CLIENT_SECRET,
			grant_type: "password",
			scope: ""
		};
		return new Promise((resolve, reject) => {
			ApiClient.executeRequest(ApiConfig.ENDPOINTS.LOGIN, {}, params, ApiConfig.METHODS.POST).then(function(response) {
				if (response.isError) {
					resolve(response);
					return;
				}
				ApiClient.executeRequest(ApiConfig.ENDPOINTS.USERINFO, {}, {}, ApiConfig.METHODS.GET, response.data.access_token).then(function(responseMe) {
					if (responseMe.isError) {
						resolve(responseMe);
						return;
					}
					let data = Object.assign(responseMe.data, response.data);
					resolve({ ...responseMe, data: data });
				});
			});
		});
	}
};

export default LoginService;
