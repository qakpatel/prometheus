import AssignmentService from "./../api/assignmentservice";
import { async } from "q";

const GET_DATA = "GET_DATA";


export const gethistoryData = (lead_id) => {
	return async dispatch => {
		let response = await AssignmentService.gethistoryData(lead_id);

		if (!response.isError) {
			dispatch({
				type: GET_DATA,
				payload: response.data
			});
		}
	}

};