import LocalStorageHelper from "../../Utility/LocalStorageHelper"
import { async } from "q";
import ApiConfig from "../../Config/ApiConfig";
import ApiClient from "../../Utility/ApiClient";
export const USER = {
    LEADS_DATA: "LEADS_DATA",
    NOTIFICATION: "NOTIFICATION",
    POST_NOTIFICATION: "POST_NOTIFICATION"
}

export const getAllLeads = () => {
    let token = LocalStorageHelper.get("USER").access_token;
    return async dispatch => {
        let response = await ApiClient.executeRequest(
            ApiConfig.ENDPOINTS.DASHBOARD,
            {},
            {},
            ApiConfig.METHODS.GET,
            token
        );
        const data = response.data;
        dispatch({
            type: USER.LEADS_DATA,
            payload: { data }
        })
    }
}

export const getAllNotification = () => {
    let token = LocalStorageHelper.get("USER").access_token;
    return async dispatch => {
        let response = await ApiClient.executeRequest(
            ApiConfig.ENDPOINTS.NOTIFICATIONS,
            {},
            {},
            ApiConfig.METHODS.GET,
            token
        );
        const data = response.data;
        dispatch({
            type: USER.NOTIFICATION,
            payload: { data }
        })

    }
}

export const postAllNotification = () => {
    let token = LocalStorageHelper.get("USER").access_token;
    return async dispatch => {
        let response = await ApiClient.executeRequest(
            ApiConfig.ENDPOINTS.NOTIFICATIONS,
            {},
            {},
            ApiConfig.METHODS.POST,
            token
        );
        const data = response.data;
        dispatch({
            type: USER.POST_NOTIFICATION,
            payload: { data }
        })

    }
}