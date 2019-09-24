import { ACTION_LOGIN_SUCCESS, ACTION_LOGIN_FAILED } from "./Types";
import { USER } from "./Action";

const LoginReducer = (state = { user: {} }, action) => {
  console.log(action.payload);
  switch (action.type) {
    case ACTION_LOGIN_SUCCESS:
      return { ...state, user: action.payload };
    case ACTION_LOGIN_FAILED:
      return { ...state, user: {} };
    case USER.logout.success: {
      return { ...state, user: {} };
    }
    default:
      return state;
  }
};

export default LoginReducer;
