import ApiClient from "../../../../Utility/ApiClient";
import ApiConfig from "../../../../Config/ApiConfig";
const TableService = {
	getTableData: function() {
		let token=JSON.parse(localStorage.getItem('USER'))
		return new Promise((resolve, reject) => {
            
			ApiClient.executeRequest(ApiConfig.ENDPOINTS.LEADS, {}, {}, ApiConfig.METHODS.GET,token.access_token).then(function(response) {
			    console.log('table service',response)
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

export default TableService;
