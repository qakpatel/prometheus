

const timelineReducer = (state = { user: [] }, action) => {
	console.log(action.payload);
	switch (action.type) {
		case 'GET_TIMELINE':
			return { ...state, user: action.payload };
		default:
			return state;
	}
};

export default timelineReducer;