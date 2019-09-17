import { USER } from "./action";
const initialState = {
    leadsData : []
}
export function dashboardReducer(state = initialState,action) {
    switch(action.type) {
        case USER.LEADS_DATA :
            state={...state,leadsData:action.payload.data }
            console.log(state,'reducer');
            return state;
        default:
            return state;
    }
}