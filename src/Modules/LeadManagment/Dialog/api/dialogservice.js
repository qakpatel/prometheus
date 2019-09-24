import ApiClient from "../../../../Utility/ApiClient";
import ApiConfig from "../../../../Config/ApiConfig";
let token=JSON.parse(localStorage.getItem('USER'))
const DialogService = {
	getDialogData: (lead_id) => {
		
		return new Promise((resolve, reject) => {
			ApiClient.executeRequest(`leads/${lead_id}/tasks/create`, {}, {}, ApiConfig.METHODS.GET,token.access_token).then(function(response) {
			    console.log('dialog data',response)
				if (response.isError) {
					resolve(response);
					return;
				}
				 let data = Object.assign(response.data, response.data);
				 resolve({ ...response, data: data })
				
			})
		})
	},
	submitDialog:(data)=>{
		return new Promise((resolve, reject) => {
			ApiClient.executeRequest(`leads/${data.lead_id}/tasks`, {}, data, ApiConfig.METHODS.POST,token.access_token).then(function(response) {
			    console.log('dialog data',response)
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

export default DialogService;