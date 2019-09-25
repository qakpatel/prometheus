


const TableReducer = (state = { data: [],excel:{} }, action) => {
	switch (action.type) {
		case 'GET_DATA':
			return { ...state, data: action.payload };
			case 'TO_EXCEL':
			return { ...state, excel: action.payload };
		default:
			return state;
	}
};

export default TableReducer;
