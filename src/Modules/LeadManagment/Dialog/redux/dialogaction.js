import DialogService from "./../api/dialogservice";

const GET_DATA = "GET_DATA";


export const getDialogData = () => {
	return async dispatch => {
		let response = await DialogService.getDialogData();
		
		if (!response.isError) {
			dispatch({
				type: GET_DATA,
				payload: response.data
            });
        }
    }
		
};

