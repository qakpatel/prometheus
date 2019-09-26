import { 
	ACTION_GET_CREATE_LEAD_DATA, 
	ACTION_CREATE_LEAD, 
	ACTION_GET_CREATE_LEAD_DATA_SUCCESS, 
	ACTION_CREATE_LEAD_SUBMIT_SUCCESS } from "./Types";

const LeadReducer = (state = { user: {} }, action) => {
	console.log(action.payload, action.type);
	switch (action.type) {
		case ACTION_GET_CREATE_LEAD_DATA:
			return { ...state, createLead: action.payload };
		case ACTION_CREATE_LEAD:
			return { ...state, createLead: action.payload };
		case ACTION_GET_CREATE_LEAD_DATA_SUCCESS:
			return { ...state, leadFormData: action.data };
		case ACTION_CREATE_LEAD_SUBMIT_SUCCESS:
			return { ...state, leadFormData: action.data };
		default:
			return state;
	}
};

export default LeadReducer;