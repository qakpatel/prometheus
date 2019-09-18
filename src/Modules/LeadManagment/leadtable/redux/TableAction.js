import TableService from "../api/tableService";

const GET_DATA = "GET_DATA";


export const getTableData = () => {
	return async dispatch => {
		let response = await TableService.getTableData();
		
		if (!response.isError) {
			dispatch({
				type: GET_DATA,
				payload: response.data
            });
        }
    }
		
};


