import LoginService from "../api/LoginService";
import LocalStorageConfig from "../../../Config/LocalStorageConfig";
import LocalStorageHelper from "../../../Utility/LocalStorageHelper";
import { ACTION_LOGIN_SUCCESS, ACTION_LOGIN_FAILED } from "./Types";
import { actionShowCommonErrorDialog, actionSetLoaderDisplayState } from "../../Common/redux/Action";

export const actionLogin = (email, password) => {
	return async dispatch => {
		dispatch(actionSetLoaderDisplayState(true));
		let response = await LoginService.executeLogin(email, password);
		dispatch(actionSetLoaderDisplayState(false));
		if (!response.isError) {
			LocalStorageHelper.add(LocalStorageConfig.KEY_USER, response.data);
			dispatch(actionCheckIsLoggedIn());
			return;
		}
		dispatch(actionShowCommonErrorDialog(response.errorMessage));
	};
};

export const actionCheckIsLoggedIn = () => {
	return dispatch => {
		let user = LocalStorageHelper.get(LocalStorageConfig.KEY_USER);
		if (user) {
			dispatch({
				type: ACTION_LOGIN_SUCCESS,
				payload: user
			});
		}else{
			dispatch({
				type: ACTION_LOGIN_FAILED,
				payload: {}
			});
		}
	};
};
