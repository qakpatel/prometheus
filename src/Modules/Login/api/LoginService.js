import ApiClient from "../../../Utility/ApiClient";
import ApiConfig from "../../../Config/ApiConfig";
const LoginService = {
	executeLogin: function(email, password) {
		let params = {
			username: email,
			password: password,
			client_id: ApiConfig.CLIENT_ID,
			client_secret: ApiConfig.CLIENT_SECRET,
			grant_type: "password"
		};
		return ApiClient.executeRequest(ApiConfig.ENDPOINTS.LOGIN, {}, params, ApiConfig.METHODS.POST);
	}
};

export default LoginService;
