import DialogService from "./../Dialog/api/dialogservice";
import TableService from "../leadtable/api/tableService";
import TimelineService from './../Timeline/api/TimelineService'
import { actionSetErrorDialogDisplayState, actionSetLoaderDisplayState } from "../../Common/redux/Action";

const GET_TIMELINE='GET_TIMELINE';
const UPDATE_STATUS='UPDATE_STATUS';
const GET_TABLE = "GET_TABLE";
const SET_DATA = "SET_DATA"
const GET_DATA = "GET_DATA";
const TO_EXCEL = "TO_EXCEL";
const UPDATE_ASSIGN = "UPDATE_ASSIGN";
const UPDATE_PRIORITY = "UPDATE_PRIORITY";
export const getDialogData = (lead_id) => {
	return async dispatch => {
		let response = await DialogService.getDialogData(lead_id);
		if (!response.isError) {
			dispatch({
				type: GET_DATA,
				payload: response.data
			});
		}
	}

};

export const submitDialog = (data) => {
	return async dispatch => {
        dispatch(actionSetLoaderDisplayState(true));
        let response = await DialogService.submitDialog(data);
        dispatch(actionSetLoaderDisplayState(false));
		if (!response.isError) {
			dispatch({
				type: SET_DATA,
				payload: response.data
			})
		}
	}
}

export const getTableData = () => {
	return async dispatch => {
		let response = await TableService.getTableData();
		if (!response.isError) {
			dispatch({
				type: GET_TABLE,
				payload: response.data
            });
        }
    }
		
};

export const getTimeline=(state)=>{
    console.log('get timeline',state)
    return async dispatch => {
        let response = await TimelineService.getTimeline(state);
        console.log(response);
		if (!response.isError) {
			dispatch({
				type: GET_TIMELINE,
				payload: response.data
            });
        }
    }
}
export const updateStatus=(lead_id,lead_status_id)=>{
    return async dispatch => {
		dispatch(actionSetLoaderDisplayState(true));
		let response = await TimelineService.updateStatus(lead_id,lead_status_id);
		dispatch(actionSetLoaderDisplayState(false));
		if (!response.isError) {
			dispatch({
				type: UPDATE_STATUS,
				payload: response.data
            });
        
        }
    }
}

export const downloadToExcel = () => {
	return async dispatch => {
		let response = await TableService.downloadToExcel();
		if (!response.isError) {
			dispatch({
				type: TO_EXCEL,
				payload: response.data
            });
        }
    }
		
};

export const updateAssign=(lead_id,assign_to)=>{
    return async dispatch => {
		dispatch(actionSetLoaderDisplayState(true));
		let response = await TimelineService.updateAssign(lead_id,assign_to);
		dispatch(actionSetLoaderDisplayState(false));
		if (!response.isError) {
			dispatch({
				type: UPDATE_ASSIGN,
				payload: response.data
            });
        
        }
    }
};
export const updatePriority=(lead_id,change_to)=>{
    return async dispatch => {
		dispatch(actionSetLoaderDisplayState(true));
		let response = await TimelineService.updatePriority(lead_id,change_to);
		dispatch(actionSetLoaderDisplayState(false));
		if (!response.isError) {
			dispatch({
				type: UPDATE_PRIORITY,
				payload: response.data
            });
        
        }
    }
};
