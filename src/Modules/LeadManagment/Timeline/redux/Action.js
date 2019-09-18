import TimelineService from './../api/TimelineService'
const GET_TIMELINE='GET_TIMELINE';

export const getTimeline=(state)=>{
    return async dispatch => {
        let response = await TimelineService.getTimeline(state);
		if (!response.isError) {
			dispatch({
				type: GET_TIMELINE,
				payload: response.data
            });
        }
    }
}