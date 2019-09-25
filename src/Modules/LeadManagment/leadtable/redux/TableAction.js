import TableService from "../api/tableService";

const GET_DATA = "GET_DATA";
const TO_EXCEL = "TO_EXCEL";

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

export const downloadToExcel = () => {
	return async dispatch => {
		let response = await TableService.downloadToExcel();
		if (!response.isError) {
			dispatch({
				type: TO_EXCEL,
				payload: response.data
            });
        }
    }
		
};


