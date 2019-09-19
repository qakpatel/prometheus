const DialogReducer = (state = { dialogData: {} }, action) => {
	switch (action.type) {
		case 'GET_DATA':
			return { ...state, dialogData: action.payload };
		default:
			return state;
	}
};

export default DialogReducer;
