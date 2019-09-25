import { USER } from "./action";
const initialState = {
    leadsData : [],
    Notification : []
}
export function dashboardReducer(state = initialState,action) {
    switch(action.type) {
        case USER.LEADS_DATA :
            state={...state,leadsData:action.payload.data }
            return state;
        case USER.NOTIFICATION :
            state={...state,Notification:action.payload.data}
            return state;
        case USER.POST_NOTIFICATION : 
        state={...state,Notification: action.payload.data}
        default:
            return state;
    }
}