import DialogService from "./../api/dialogservice";
import { async } from "q";

const GET_DATA = "GET_DATA";
const SET_DATA = "SET_DATA"

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