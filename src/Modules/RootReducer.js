import { combineReducers } from "redux";
import LoginReducer from "./Login/redux/Reducer";
import { dashboardReducer } from "./Dashboard/reducer";
import LeadReducer from "./LeadForm/redux/Reducer"
import UnitPlannerReducer from "./UnitPlanner/redux/Reducer";
import TableReducer  from './LeadManagment/leadtable/redux/TableReducer'
import TimelineReducer from './LeadManagment/Timeline/redux/timelineReducer'
import DialogReducer from './LeadManagment/Dialog/redux/dialogreducer'

import { ACTION_LOADER_DISPLAY_STATE, ACTION_ERROR_DISPLAY_STATE } from "./Common/redux/Types";
export default combineReducers({
	loginState: LoginReducer,
	leadFormState: LeadReducer,
	unitPlan: UnitPlannerReducer,
	tableReducer: TableReducer,
	timelineReducer: TimelineReducer,
	dialogReducer:DialogReducer,
	dashboardReducer,
	loaderState: (state = { show: false }, action) => {
		switch (action.type) {
			case ACTION_LOADER_DISPLAY_STATE:
				return { ...state, show: action.payload || false };
			default:
				return state;
		}
	},
	errorState: (state = { error: null }, action) => {
		switch (action.type) {
			case ACTION_ERROR_DISPLAY_STATE:
				return { ...state, error: action.payload || null };
			default:
				return state;
		}
	},
});



