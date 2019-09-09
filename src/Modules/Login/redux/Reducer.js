import { ACTION_LOGIN_SUCCESS, ACTION_LOGIN_FAILED } from "./Types";

const LoginReducer = (state = {user : null, error : false }, action) => {
	switch (action.type) {
		case ACTION_LOGIN_SUCCESS:
			return { ...state, user: action.payload, error : null };
		case ACTION_LOGIN_FAILED:
			return { ...state, user: null, error : action.payload };
		default:
			return state;
	}
};

export default LoginReducer;
