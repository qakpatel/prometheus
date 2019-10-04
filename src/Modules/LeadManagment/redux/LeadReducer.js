import { stat } from "fs";

const LeadReducer = (
  state = { dialogData: {}, submitDialog: {}, data: [], user: [] },
  action
) => {
  switch (action.type) {
    case "GET_DATA":
      return { ...state, dialogData: action.payload };
    case "SET_DATA":
      return { ...state, user: state.user.concat(action.payload) };
    case "GET_TABLE":
      console.log("ghuidghduigidgdghiighdhid", action.payload);
      return { ...state, data: action.payload.data };
    case "GET_TIMELINE":
      return { ...state, user: action.payload };
    case "GET_HISTORY":
      return { ...state, historydata: action.payload };
    case "UPDATE_STATUS":
      return { ...state, updateStatus: action.payload };
    case "TO_EXCEL":
      return { ...state, excel: action.payload };
    case "UPDATE_ASSIGN":
      console.log(state.data);
      state.data.forEach((a, index) => {
        if (a.id === action.payload.id) {
          state.data[index] = action.payload;
        }
      });
    case "UPDATE_PRIORITY":
      state.data.forEach((a, index) => {
        if (a.id === action.payload.id) {
          state.data[index] = action.payload;
        }
      });
      return { ...state, data: state.data };
    case "FILTER_BY_DATE":
      console.log(action.payload);
      return {
        ...state,
        advanceFilter: action.payload
      };
    case "FILTER_BY_GENDER":
      return {
        ...state,
        advanceFilter: action.payload
      };
    case "FILTER_BY_GRADES":
      return {
        ...state,
        advanceFilter: action.payload
      };
    case "GET_GRADES":
      return {
        ...state,
        grades: action.payload
      };
    case "TASK_COMPLETE":
      console.log(action.payload);
      state.user.forEach((a, index) => {
        if (a.id === action.payload.id) {
          state.user[index] = action.payload;
        }
      });
      return {
        ...state,
        user: state.user
      };
    case "REJECT_LEAD":
      state.data.forEach((a, i) => {
        if (a.id === action.payload.id) {
          state.data[i] = action.payload;
        }
      });
      console.log(action.payload);
      return { ...state, data: state.data };
    default:
      return state;
  }
};

export default LeadReducer;
