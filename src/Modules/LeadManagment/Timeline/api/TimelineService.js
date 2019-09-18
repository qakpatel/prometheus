import ApiClient from "../../../../Utility/ApiClient";
import ApiConfig from "../../../../Config/ApiConfig";
const TimelineService = {
	getTimeline: (state)=> {
		let token=JSON.parse(localStorage.getItem('USER'))
		return new Promise((resolve, reject) => {
			ApiClient.executeRequest(`tasks/${state.lead_id}/${state.status_id}`, {}, {}, ApiConfig.METHODS.GET,token.access_token).then(function(response) {
                console.log(response)
                if (response.isError) {
					resolve(response);
					return;
				}
				 let data = Object.assign(response.data, response.data);
				 resolve({ ...response, data: data })
				
			})
		})
	}
};

export default TimelineService;