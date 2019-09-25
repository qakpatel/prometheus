import ApiClient from "../../../Utility/ApiClient";
import ApiConfig from "../../../Config/ApiConfig";
import LocalStorageHelper from "../../../Utility/LocalStorageHelper";
import LocalStorageConfig from "../../../Config/LocalStorageConfig";

export const UnitPlannerService = {
    getUnitPlansByGrade : params => {
        const token = LocalStorageHelper.get(LocalStorageConfig.KEY_USER).access_token;
        return new Promise((resolve , reject) => {
            ApiClient.executeRequest(ApiConfig.ENDPOINTS.UNITPLAN, {}, params, ApiConfig.METHODS.GET, token).then(response => {
				if (response.isError) {
					resolve(response);
					return;
                }
                let data = Object.assign(response.data, response.data);
				resolve({ ...response, data: data });
			});
        })
    },

    deleteUnitPlanById : params => {
        return new Promise((resolve , reject) => {
            const token = LocalStorageHelper.get(LocalStorageConfig.KEY_USER).access_token;
            ApiClient.executeRequest(ApiConfig.ENDPOINTS.UNITPLAN,{},params,ApiConfig.METHODS.DELETE, token).then(response => {
                if (response.isError) {
					resolve(response);
					return;
                }
                let data = Object.assign(response.data, response.data);
				resolve({ ...response, data: data });
            })
        })
    }
}