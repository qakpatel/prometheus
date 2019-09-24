import LocalStorageHelper from "../../Utility/LocalStorageHelper"
export const USER = {
    LEADS_DATA : "LEADS_DATA",
    NOTIFICATION : "NOTIFICATION",
    POST_NOTIFICATION : "POST_NOTIFICATION"
}
    
export  const getAllLeads = () => {
    let token = LocalStorageHelper.get("USER").access_token;
    var url = 'http://10.0.17.180/api/v1/dashboard'
    return dispatch => {
        return fetch(url,{
            method:'GET',
            headers:{
                'Authorization':`Bearer  ${token}`,
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .then(data => {
            dispatch({
                type : USER.LEADS_DATA,
                payload : {data}
            }) 
        })
        
    }
}

export const getAllNotification = () => {
    var url = 'http://10.0.17.180/api/v1/notifications'
    let token = LocalStorageHelper.get("USER").access_token;
    return dispatch => {
        return fetch(url,{
            method:'GET',
            headers:{
                'Authorization':`Bearer  ${token}`,
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .then(data => {
            dispatch({
                type : USER.NOTIFICATION,
                payload : {data}
            })
        })
    }
}

export const postAllNotification = () => {
    let token = LocalStorageHelper.get("USER").access_token;
    var url = 'http://10.0.17.180/api/v1/notifications'
    return dispatch => {
        return fetch(url,{
            method:'POST',
            headers:{
                'Authorization':`Bearer ${token}`,   
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .then(data => {
            dispatch({
                type : USER.POST_NOTIFICATION,
                payload : {data}
            })
        })
    }
}