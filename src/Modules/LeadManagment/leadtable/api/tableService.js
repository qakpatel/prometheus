import ApiClient from "../../../../Utility/ApiClient";
import ApiConfig from "../../../../Config/ApiConfig";
import download from 'downloadjs'
import { base64StringToBlob } from 'blob-util';


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
	},
	downloadToExcel: () => {
		let token=JSON.parse(localStorage.getItem('USER'))
		return new Promise((resolve, reject) => {
			ApiClient.executeRequest('leads/excel', { responseType: 'arraybuffer' }, {}, ApiConfig.METHODS.GET,token.access_token).then(function(response) {
			    // console.log('table service',response)
				if (response.isError) {
					resolve(response);
					return;
				}
				let data  = `{"id":1,"context_type":"App\\Models\\StudentEnquiry","context_id":1,"lead_status_id":1,"assigned_to":{"id":1,"name":"Neelesh Arora","email":"neelesharora@qainfotech.com","email_verified_at":null,"created_at":"2019-09-19 15:27:56","updated_at":"2019-09-19 15:27:56"},"lead_priority_id":2,"source_id":2,"creator":1,"created_at":"2019-09-19 15:37:58","updated_at":"2019-09-24 13:57:06","deleted_at":null,"priority_label":"Cold Lead","creator_label":"Neelesh Arora","status_label":"Face To Face Round","source_label":"Email","context":{"id":1,"enquirer_email":"abhij@gmail.com","enquirer_first_name":"abhi","enquirer_middle_name":"ku","enquirer_last_name":"mai","enquirer_phone_number":"+919694853855","relationship_with_child":"Father","student_first_name":"asfsad","student_middle_name":"sda","student_last_name":"sadfsd","student_gender":"Male","student_dob":"2019-09-19 00:00:00","grade_apply_for":"5","academic_year_apply_for":"1","student_current_city":"sdfsd","curriculum_apply_for":"ICE","curriculum_current":"IB","tentative_school_visit_date":"2019-09-26 00:00:00","source_to_reach_us":"sdfsd","created_at":"2019-09-19 15:37:58","updated_at":"2019-09-19 15:37:58","deleted_at":null},"lead_priority":{"id":2,"title":"Cold Lead","description":"Medium Priority Lead. This is not so important!","created_at":null,"updated_at":null,"deleted_at":null},"created_by":{"id":1,"name":"Neelesh Arora","email":"neelesharora@qainfotech.com","email_verified_at":null,"created_at":"2019-09-19 15:27:56","updated_at":"2019-09-19 15:27:56"},"lead_status":{"id":1,"title":"Face To Face Round","description":"Face to Face scheduled for Lead.","creator":1,"created_at":null,"updated_at":null,"deleted_at":null},"lead_source":{"id":2,"title":"Email","description":"Leads generated from enquiries via email","created_at":null,"updated_at":null,"deleted_at":null}}`;
      // const blob = base64StringToBlob();
				
				// const blobs = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
				// download(blobs, 'Leads '+new Date().toLocaleString()+ '.xlsx'); 
				resolve({ ...response, data: data })
			})
		})
	},
 filterByDate:(startDate,endDate)=>{
	let token=JSON.parse(localStorage.getItem('USER'))
	return new Promise((resolve, reject) => {
		ApiClient.executeRequest(`leads?start_date=${startDate}&end_date=${endDate}`, {}, {}, ApiConfig.METHODS.GET,token.access_token).then(function(response) {
			console.log('table service',response)
			if (!response.isError) {
				resolve(response);
				return;
			}
		})
	})
 },
 filterByGender:(gender)=>{
	let token=JSON.parse(localStorage.getItem('USER'))
	return new Promise((resolve, reject) => {
		ApiClient.executeRequest(`leads?student_gender=${gender}`, {}, {}, ApiConfig.METHODS.GET,token.access_token).then(function(response) {
			console.log('table service',response)
			if (!response.isError) {
				resolve(response);
				return;
			}
		})
	})
 },

 filterByGrades:(grade)=>{
	let token=JSON.parse(localStorage.getItem('USER'))
	return new Promise((resolve, reject) => {
		ApiClient.executeRequest(`leads?grade_apply_for=${grade}`, {}, {}, ApiConfig.METHODS.GET,token.access_token).then(function(response) {
			console.log('table service',response)
			if (!response.isError) {
				resolve(response);
				return;
			}
		})
	})
 },
 getGrades:(grade)=>{
	let token=JSON.parse(localStorage.getItem('USER'))
	return new Promise((resolve, reject) => {
		ApiClient.executeRequest(`grades`, {}, {}, ApiConfig.METHODS.GET,token.access_token).then(function(response) {
			console.log('table service',response)
			if (!response.isError) {
				resolve(response);
				return;
			}
		})
	})
 }

};

export default TableService;
