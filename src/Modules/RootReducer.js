import { combineReducers } from "redux";
import LoginReducer from "./Login/redux/Reducer";
import { ACTION_LOADER_DISPLAY_STATE } from "./Common/redux/Types";
export default combineReducers({
	loginState: LoginReducer,
	loaderState: function(state = { show: false }, action) {
		switch (action.type) {
			case ACTION_LOADER_DISPLAY_STATE:
				return { ...state, show: action.payload || false };
			default:
				return state;
		}
	}
});
