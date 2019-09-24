const DialogReducer = (state = { dialogData: {},submitDialog:{} }, action) => {
	switch (action.type) {
		case 'GET_DATA':
			return { ...state, dialogData: action.payload };
			case 'SET_DATA':
			return { ...state, submitDialog: action.payload };
		default:
			return state;
	}
};

export default DialogReducer;
