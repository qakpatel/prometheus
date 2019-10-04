import ApiClient from "../../../../Utility/ApiClient";
import ApiConfig from "../../../../Config/ApiConfig";
const TimelineService = {
	getTimeline: (state)=> {
		console.log(state)
		let token=JSON.parse(localStorage.getItem('USER'))
		return new Promise((resolve, reject) => {
			ApiClient.executeRequest(`tasks/${state.lead_id}/${state.status_id}`, {}, {}, ApiConfig.METHODS.GET,token.access_token).then((response)=> {
                console.log(response)
                if (response.isError) {
					resolve(response);
					return;
				}
				 let data = Object.assign(response.data, response.data);
				 resolve({ ...response, data: data })
				
			})
		})
	},
	getpreviousdata: (lead_id)=> {
		let token=JSON.parse(localStorage.getItem('USER'))
		return new Promise((resolve, reject) => {
			ApiClient.executeRequest(`leads/${lead_id}/assignees`, {}, {}, ApiConfig.METHODS.GET,token.access_token).then((response)=> {
                console.log(response)
                if (response.isError) {
					resolve(response);
					return;
				}
				 let data = Object.assign(response.data, response.data);
				 resolve({ ...response, data: data })
				
			})
		})
	},
	updateStatus:(id,lead_status)=>{
		let token=JSON.parse(localStorage.getItem('USER'))
		return new Promise((resolve, reject)=>{
			ApiClient.executeRequest(`leads/${id}`,{},{lead_status_id:++lead_status},ApiConfig.METHODS.PUT,token.access_token).then((res)=>{
			 console.log(res)
				if(!res.isError){
				 resolve(res)
				 return;
			 }
			})
		})
	},
	updateAssign:(id,assigned_to)=>{
		let token=JSON.parse(localStorage.getItem('USER'))
		return new Promise((resolve, reject)=>{
			ApiClient.executeRequest(`leads/${id}`,{},{assigned_to:assigned_to},ApiConfig.METHODS.PUT,token.access_token).then((res)=>{
			 console.log(res)
				if(!res.isError){
				 resolve(res)
				 return;
			 }
			})
		})
	},
	updatePriority:(id,priority_lable)=>{
		let token=JSON.parse(localStorage.getItem('USER'))
		return new Promise((resolve, reject)=>{
			ApiClient.executeRequest(`leads/${id}`,{},{lead_priority_id:priority_lable},ApiConfig.METHODS.PUT,token.access_token).then((res)=>{
			 console.log(res)
				if(!res.isError){
				 resolve(res)
				 return;
			 }
			})
		})
	},
	taskComplete:(taskID,lead_task_status_id)=>{
		let token=JSON.parse(localStorage.getItem('USER'))
		return new Promise((resolve, reject)=>{
			ApiClient.executeRequest(`tasks/${taskID}`,{},{lead_task_status_id:lead_task_status_id+1},ApiConfig.METHODS.PUT,token.access_token).then((res)=>{
			 console.log(res)
				if(!res.isError){
				 resolve(res)
				 return;
			 }
			})
		})
	},
	rejectLead:(id)=>{
		let token=JSON.parse(localStorage.getItem('USER'))
		return new Promise((resolve, reject)=>{
			ApiClient.executeRequest(`leads/${id}`,{},{lead_priority_id:3},ApiConfig.METHODS.PUT,token.access_token).then((res)=>{
			 console.log(res)
				if(!res.isError){
				 resolve(res)
				 return;
			 }
			})
		})
	}
};

export default TimelineService;