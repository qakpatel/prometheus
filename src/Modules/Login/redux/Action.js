import LoginService from "../api/LoginService";
export const actionLogin = (email, password) => {
	return function(dispatch) {
		LoginService.executeLogin(email, password);
	};
};
