import {
  ACTION_GET_CREATE_LEAD_DATA,
  ACTION_CREATE_LEAD,
  ACTION_GET_CREATE_LEAD_DATA_SUCCESS,
  ACTION_CREATE_LEAD_SUBMIT_SUCCESS,
  ACTION_GET_CREATE_LEAD_DATA_START
} from "./Types";

const inititalState = {
  success: false,
  user: {}
};

const LeadReducer = (state = inititalState, action) => {
  console.log(action.payload);
  switch (action.type) {
    case ACTION_GET_CREATE_LEAD_DATA:
      return { ...state, createLead: action.payload };
    case ACTION_CREATE_LEAD:
      return { ...state, createLead: action.payload };
    case ACTION_GET_CREATE_LEAD_DATA_START:
      return { ...state, leadFormData: [], success: false };
    case ACTION_GET_CREATE_LEAD_DATA_SUCCESS:
      return { ...state, leadFormData: action.data, success: false };
    case ACTION_CREATE_LEAD_SUBMIT_SUCCESS:
      return { ...state, leadFormData: action.data, success: true };
    default:
      return state;
  }
};

export default LeadReducer;
