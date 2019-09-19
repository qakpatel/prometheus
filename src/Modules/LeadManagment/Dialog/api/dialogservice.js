import ApiClient from "../../../../Utility/ApiClient";
import ApiConfig from "../../../../Config/ApiConfig";
const DialogService = {
	getDialogData: function() {
		let token=JSON.parse(localStorage.getItem('USER'))
		return new Promise((resolve, reject) => {
            
			ApiClient.executeRequest(`leads/${1}/tasks/create`, {}, {}, ApiConfig.METHODS.GET,token.access_token).then(function(response) {
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