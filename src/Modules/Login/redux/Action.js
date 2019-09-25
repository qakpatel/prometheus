import LoginService from "../api/LoginService";
import LocalStorageConfig from "../../../Config/LocalStorageConfig";
import LocalStorageHelper from "../../../Utility/LocalStorageHelper";
import { ACTION_LOGIN_SUCCESS, ACTION_LOGIN_FAILED } from "./Types";
import {
  actionSetErrorDialogDisplayState,
  actionSetLoaderDisplayState
} from "../../Common/redux/Action";
import ApiClient from "../../../Utility/ApiClient";
import ApiConfig from "../../../Config/ApiConfig";

export const USER = {
  logout: {
    start: "USER_LOGOUT_START",
    success: "USER_LOGOUT_SUCCESS",
    error: "USER_LOGOUT_ERROR"
  }
};

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
    dispatch(actionSetErrorDialogDisplayState(response.errorMessage));
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
    } else {
      dispatch({
        type: ACTION_LOGIN_FAILED,
        payload: {}
      });
    }
  };
};

export const actionLogout = () => {
  return dispatch => {
    let response = ApiClient.executeRequest(
      ApiConfig.ENDPOINTS.LOGOUT,
      {},
      {},
      ApiConfig.METHODS.GET,
      LocalStorageHelper.get(LocalStorageConfig.KEY_USER).access_token
    );
    console.log(response);
    LocalStorageHelper.delete(LocalStorageConfig.KEY_USER);
    dispatch({ type: USER.logout.success });
  };
};
