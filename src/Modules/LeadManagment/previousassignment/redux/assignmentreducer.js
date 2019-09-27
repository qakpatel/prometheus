const AssignmentReducer = (state = { historyData: {}}, action) => {
	switch (action.type) {
		case 'GET_DATA':
			return { ...state, historyData: action.payload };
		
		default:
			return state;
	}
};

export default AssignmentReducer;
