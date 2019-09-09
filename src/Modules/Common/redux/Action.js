import { ACTION_ERROR_DISPLAY_STATE, ACTION_LOADER_DISPLAY_STATE } from "./Types";

export const actionHideCommonErrorDialog = () => {
	return dispatch => {
		dispatch({
			type: ACTION_ERROR_DISPLAY_STATE,
			payload: null
		});
	};
};

export const actionShowCommonErrorDialog = (errorMessage) => {
	return dispatch => {
		dispatch({
			type: ACTION_ERROR_DISPLAY_STATE,
			payload: errorMessage
		});
	};
};

export const actionSetLoaderDisplayState = (show = false) => {
	return dispatch => {
		dispatch({
			type: ACTION_LOADER_DISPLAY_STATE,
			payload: show
		});
	};
};


