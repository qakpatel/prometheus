import TimelineService from './../api/TimelineService'
const GET_TIMELINE='GET_TIMELINE';
const UPDATE_STATUS='UPDATE_STATUS';
export const getTimeline=(state)=>{
    console.log('get timeline',state)
    return async dispatch => {
        let response = await TimelineService.getTimeline(state);
        console.log(response);
		if (!response.isError) {
			dispatch({
				type: GET_TIMELINE,
				payload: response.data
            });
        }
    }
}
export const updateStatus=(lead_id,lead_status_id)=>{
    return async dispatch => {
        let response = await TimelineService.updateStatus(lead_id,lead_status_id);
		if (!response.isError) {
			dispatch({
				type: UPDATE_STATUS,
				payload: response.data
            });
        
        }
    }
}