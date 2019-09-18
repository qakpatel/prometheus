import {
    UnitPlannerService
} from "../api/unitPlannerServices";
 import { GET_UNIT_PLANS_SUCCESS , GET_UNIT_PLANS_FAILURE , DELETE_UNIT_PLAN_SUCCESS , DELETE_UNIT_PLAN_FAILURE } from "./Types";


const searchUnitPlansFailure = params => ({ type: GET_UNIT_PLANS_FAILURE, params });
const searchUnitPlansSuccess = data => ({ type: GET_UNIT_PLANS_SUCCESS, data });

export const getUnitPlansData = param => async dispatch => {
    return new Promise((resolve , reject) => {
        UnitPlannerService.getUnitPlansByGrade(param).then(response => {
            if (!response.isError) {
                dispatch(searchUnitPlansSuccess(response.data));
                resolve(response.data);
            }else{
                dispatch(searchUnitPlansFailure({}));
                reject();
            }
        })
    })
}

const deleteUnitPlanFailure = params => ({ type: DELETE_UNIT_PLAN_FAILURE, params })
const deleteUnitPlanSuccess = params => ({ type: DELETE_UNIT_PLAN_SUCCESS, params })

export const deleteUnitPlanById = param =>  async dispatch =>{
    return new Promise((resolve , reject) => {
        UnitPlannerService.deleteUnitPlanById(param).then(response => {
            if(!response.isError) {
                dispatch(deleteUnitPlanSuccess(response.data));
                resolve(response.data);
            }else{
                dispatch(deleteUnitPlanFailure({}));
                reject();
            }
        })
    })
}
