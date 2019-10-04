import ApiClient from "../../../../Utility/ApiClient";
import ApiConfig from "../../../../Config/ApiConfig";
import download from 'downloadjs'
import { base64StringToBlob } from 'blob-util';


const TableService = {
	getTableData: function(page) {
		let token=JSON.parse(localStorage.getItem('USER'))
		return new Promise((resolve, reject) => {
            
			ApiClient.executeRequest(`${ApiConfig.ENDPOINTS.LEADS}?page=${page}`, {}, {}, ApiConfig.METHODS.GET,token.access_token).then(function(response) {
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
			ApiClient.executeRequest('leads/excel', {}, {}, ApiConfig.METHODS.GET,token.access_token).then(function(response) {
			    console.log('table service',response)
				if (!response.isError) {
					resolve(response);
					return;
				}
				
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
 },
 filterByPriority:(priority_id)=>{
	let token=JSON.parse(localStorage.getItem('USER'))
	return new Promise((resolve, reject) => {
		ApiClient.executeRequest(`leads?lead_priority_id=${priority_id}`, {}, {}, ApiConfig.METHODS.GET,token.access_token).then(function(response) {
			console.log('table service',response)
			if (!response.isError) {
				resolve(response);
				return;
			}
		})
	})
 },
 filterBySource:(source_id)=>{
	let token=JSON.parse(localStorage.getItem('USER'))
	return new Promise((resolve, reject) => {
		ApiClient.executeRequest(`leads?source_id=${source_id}`, {}, {}, ApiConfig.METHODS.GET,token.access_token).then(function(response) {
			console.log('table service',response)
			if (!response.isError) {
				resolve(response);
				return;
			}
		})
	})
 },

};

export default TableService;
