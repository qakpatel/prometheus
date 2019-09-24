

const timelineReducer = (state = { user: [],reponse:{} }, action) => {
	console.log(action.payload);
	switch (action.type) {
		case 'GET_TIMELINE':
			return { ...state, user: action.payload };
			case 'UPDATE_STATUS':
			return { ...state, user: action.payload };
		default:
			return state;
	}
};

export default timelineReducer;