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
const FILTER_BY_DATE = "FILTER_BY_DATE";
const FILTER_BY_GENDER = "FILTER_BY_GENDER";
const FILTER_BY_GRADES = "FILTER_BY_GRADES"
const GET_GRADES = "GET_GRADES";
const GET_HISTORY = "GET_HISTORY";


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

export const getTableData = (data) => {
	return async dispatch => {
		dispatch(actionSetLoaderDisplayState(true));
		let response = await TableService.getTableData(data);
		dispatch(actionSetLoaderDisplayState(false));
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
		dispatch(actionSetLoaderDisplayState(true));
		let response = await TimelineService.getTimeline(state);
		dispatch(actionSetLoaderDisplayState(false));
        console.log(response);
		if (!response.isError) {
			dispatch({
				type: GET_TIMELINE,
				payload: response.data
            });
        }
    }
};

export const getpreviousdata=(state)=>{
    console.log('get previous data',state)
    return async dispatch => {
		dispatch(actionSetLoaderDisplayState(true));
		let response = await TimelineService.getpreviousdata(state);
		dispatch(actionSetLoaderDisplayState(false));
        console.log(response);
		if (!response.isError) {
			dispatch({
				type: GET_HISTORY,
				payload: response.data
            });
        }
    }
};
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
		dispatch(actionSetLoaderDisplayState(true));
		let response = await TableService.downloadToExcel();
		dispatch(actionSetLoaderDisplayState(false));
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

export const filterByDate = (startDate,endDate) => {
	return async dispatch => {
		dispatch(actionSetLoaderDisplayState(true));
		let response = await TableService.filterByDate(dateFormat(startDate),dateFormat(endDate));
		dispatch(actionSetLoaderDisplayState(false));
		if (!response.isError) {
			dispatch({
				type: FILTER_BY_DATE,
				payload: response.data
            });
        }
    }
		
};

export const filterByGender = gender => { // case 'GET_HISTORY':
//         return { ...state, historydata: action.payload };
	return async dispatch => {
		dispatch(actionSetLoaderDisplayState(true));
		let response = await TableService.filterByGender(gender);
		dispatch(actionSetLoaderDisplayState(false));
		if (!response.isError) {
			dispatch({
				type: FILTER_BY_GENDER,
				payload: response.data
            });
        }
    }
		
};
export const filterByGrades = grade => {
	return async dispatch => {
		dispatch(actionSetLoaderDisplayState(true));
		let response = await TableService.filterByGrades(grade);
		dispatch(actionSetLoaderDisplayState(false));
		if (!response.isError) {
			dispatch({
				type: FILTER_BY_GRADES,
				payload: response.data
            });
        }
    }
		
};

export const getGrades = grade => {
	return async dispatch => {
		dispatch(actionSetLoaderDisplayState(true));
		let response = await TableService.getGrades();
		dispatch(actionSetLoaderDisplayState(false));
		if (!response.isError) {
			dispatch({
				type: GET_GRADES,
				payload: response.data
            });
        }
    }	
};

export const taskComplete =(taskID,lead_task_status_id)=>{
	return async dispatch => {
		dispatch(actionSetLoaderDisplayState(true));
		let response = await TimelineService.taskComplete(taskID,lead_task_status_id);
		dispatch(actionSetLoaderDisplayState(false));
		if (!response.isError) {
			dispatch({
				type: 'TASK_COMPLETE',
				payload: response.data
            });
        }
	}
}

export const rejectLead =(lead_id)=>{
	return async dispatch => {
		dispatch(actionSetLoaderDisplayState(true));
		let response = await TimelineService.rejectLead(lead_id);
		dispatch(actionSetLoaderDisplayState(false));
		if (!response.isError) {
			dispatch({
				type: 'REJECT_LEAD',
				payload: response.data
            });
        }
	}
}


const dateFormat =(date)=>{
	return date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()
}
