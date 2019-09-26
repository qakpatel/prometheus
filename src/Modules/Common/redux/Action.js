import { ACTION_ERROR_DISPLAY_STATE, ACTION_LOADER_DISPLAY_STATE } from "./Types";

export const actionSetErrorDialogDisplayState = (errorMessage = null) => {
	return dispatch => {
		dispatch({
			type: ACTION_ERROR_DISPLAY_STATE,
			payload: null
		});
	};
};

export const actionSetLoaderDisplayState = (show = false) => {
	console.log('ekjr')
	return dispatch => {
		dispatch({
			type: ACTION_LOADER_DISPLAY_STATE,
			payload: show
		});
	};
};


