import ApiClient from "../../../Utility/ApiClient";
import ApiConfig from "../../../Config/ApiConfig";
import LocalStorageHelper from "../../../Utility/LocalStorageHelper"
const LeadFormService = {
	fetchLeadFormData: function() {
		let token = LocalStorageHelper.get("USER").access_token
		return new Promise((resolve, reject) => {
			ApiClient.executeRequest(ApiConfig.ENDPOINTS.LEAD_FORM, {}, {}, ApiConfig.METHODS.GET,token).then(function(response) {
				if (response.isError) {
					resolve(response);
					return;
				}
				resolve(response);
			});
		});
	},
	createLead: function() {
		let token = LocalStorageHelper.get("USER").access_token
		return new Promise((resolve, reject) => {
			ApiClient.executeRequest(ApiConfig.ENDPOINTS.LEAD_FORM, {}, {}, ApiConfig.METHODS.GET,token).then(function(response) {
				if (response.isError) {
					resolve(response);
					return;
				}
				resolve(response);
			});
		});
	}
};

export default LeadFormService;
