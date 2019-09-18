import {
  GET_UNIT_PLANS_SUCCESS,
  GET_UNIT_PLANS_FAILURE,
  DELETE_UNIT_PLAN_SUCCESS,
  DELETE_UNIT_PLAN_FAILURE
} from "./Types";

const intialState = {
  unit_plans: []
};

const UnitPlannerReducer = (state = intialState, action) => {
  switch (action.type) {
    case GET_UNIT_PLANS_SUCCESS:
      return { ...state, unit_plans: action.data };
    case GET_UNIT_PLANS_FAILURE:
      return { ...state, unit_plans: [] };
    case DELETE_UNIT_PLAN_SUCCESS:
      return { ...state, unit_plans: action.data };
    case DELETE_UNIT_PLAN_FAILURE:
      return { ...state, unit_plans: [] };
    default:
      return state;
  }
};

export default UnitPlannerReducer;
