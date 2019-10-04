import LeadFormService from "../api/LeadFormService";
import LocalStorageConfig from "../../../Config/LocalStorageConfig";
import LocalStorageHelper from "../../../Utility/LocalStorageHelper";
import { 
	ACTION_GET_CREATE_LEAD_DATA, 
	ACTION_CREATE_LEAD,
	ACTION_GET_CREATE_LEAD_DATA_SUCCESS,
	ACTION_GET_CREATE_LEAD_DATA_FAILED,
	ACTION_CREATE_LEAD_SUBMIT_SUCCESS,
	ACTION_CREATE_LEAD_SUBMIT_FAILED
} from "./Types";
import { actionSetErrorDialogDisplayState, actionSetLoaderDisplayState } from "../../Common/redux/Action";
import LeadForm from "../api/LeadFormService";

export const actionGetCreateLeadDataSuccess = data => ({type: ACTION_GET_CREATE_LEAD_DATA_SUCCESS, data})
export const actionGetCreateLeadSuccess = data => ({type: ACTION_CREATE_LEAD_SUBMIT_SUCCESS, data})

export const actionGetCreateLeadData = () => {
	return async dispatch => {
		dispatch(actionSetLoaderDisplayState(true));
		let response = await LeadForm.fetchLeadFormData();
		console.log("actionGetCreateLeadData",response)
		dispatch(actionSetLoaderDisplayState(false));
		if (!response.isError) {
			LocalStorageHelper.add(LocalStorageConfig.KEY_LEAD_FORM_DATA, response.data);
			dispatch(actionGetCreateLeadDataSuccess(response))
			return response.data;
		}
		dispatch(actionSetErrorDialogDisplayState(response.errorMessage));
	};
};

export const actionCreateLead = (state) => {
	return async dispatch => {
		dispatch(actionSetLoaderDisplayState(true));
		let response = await LeadForm.createLead(state);
		console.log(response)
		dispatch(actionSetLoaderDisplayState(false));
		if (!response.isError) {	
			dispatch(actionGetCreateLeadSuccess(response));
			return;
		}
		dispatch(actionSetErrorDialogDisplayState(response.errorMessage));
	};
};