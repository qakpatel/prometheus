import React from "react";
import 'date-fns';
import { Container, Button, CssBaseline, TextField, Link, Grid, Typography, Paper, Snackbar } from "@material-ui/core";
import DateFnsUtils from '@date-io/date-fns';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Lang from "../../../Lang/en";
import { loginFormStyles } from "../style";
import LocalStorageHelper from "../../../Utility/LocalStorageHelper"
import LocalStorageConfig from "../../../Config/LocalStorageConfig";
import SimpleSelect from "../../Common/components/simpleselect";
import moment from "moment";
import update from "immutability-helper";
import { withRouter} from 'react-router-dom';
import SnackBar from './../../Common/components/SnackBar' 

class LeadForm extends React.Component {

	constructor(props) {
		super(props);
		this.state = {};
	}
	componentDidMount() {
		const { leadFormData } = this.props;
		console.log(this.state.errror)
		this.props.actionGetCreateLeadData()
		// .then((result) => {
		// 	console.log("fetched result " ,result);
		// this.setState(result);
		// });
		this.setState({["context_type"]:"App\\Models\\StudentEnquiry"})
		console.log("Lead form componentDidMount")
	}

	// componentWillUpdate(nextProps, nextState) {
	// 	console.log("Lead form componentWillUpdate")
	// }

	// componentDidUpdate(prevProps, PrevState) {
	// 	console.log("Lead form componentDidUpdate")
	// 	console.log("Lead form componentDidUpdate", LocalStorageHelper.get(LocalStorageConfig.KEY_LEAD_FORM_DATA))

	// }

	shouldComponentUpdate(nextProps, nextState) {
		console.log("Lead form shouldComponentUpdate")
		console.log("Lead form shouldComponentUpdate", LocalStorageHelper.get(LocalStorageConfig.KEY_LEAD_FORM_DATA))
		//this.setState({data : LocalStorageHelper.get(LocalStorageConfig.KEY_LEAD_FORM_DATA)})
		return true;
	}

	// componentWillReceiveProps(nextProps, nextContext) {
	// 	console.log("Lead form componentWillReceiveProps")
	// }

	submitClick = () => {
	if(!this.state.enquirer_first_name || !this.state.enquirer_last_name || !this.state.enquirer_email || !this.state.enquirer_phone_number || !this.state.student_first_name || !this.state.student_last_name || !this.state.relationship_with_child || !this.state.student_gender || !this.state.date_of_birth || !this.state.student_current_city){
		 this.setState({message:'Please fill all required field', variant:'error',snackBarOpen:true})
		 return;	
		}
		this.props.actionCreateLead(this.state);
		this.props.history.push("/leads-management")
	};

	onChangeDropDownObject = (label, value )=> {
		this.setState({
			[label]: value
		},()=>console.log("current state ", this.state));
	};

	onChangeDropDown = (label, value ) => {
		this.setState({
			[label]: value
		},()=>console.log("current state " ,this.state));
	};

	onChangeField = e => {
		this.errorHandler(e.target.name,e.target.value)
		this.setState({
			[e.target.name]: e.target.value
		},()=>console.log(this.state));
	};


	handleDateChange = (keyName,date) => {
		//this.setState(prevState => update(prevState, { $merge: { student_dob: moment(date).format("ddd MMM DD YYYY HH:mm:ss zzZZ")}}));
		this.setState({[keyName] : moment(date).format("YYYY/MM/DD")}, ()=>console.log("current state " ,this.state));
	}

    errorHandler = (name,value) => {
		switch (name) {
			case 'enquirer_first_name':
				if (value === "") {
					this.setState({ first_error: true, enquirer_first_name_error: 'Enquirer first name required' })
				} else if (!value.match(/^[a-zA-Z]+$/)) {
					this.setState({ first_error: true, enquirer_first_name_error: 'Enquirer first name should only contain alphabet' })
				} else {
					this.setState({ first_error: false, enquirer_first_name_error: '' })
				}
				break;
			case 'enquirer_last_name':
				if (value === "") {
					this.setState({ last_error: true, enquirer_last_name_error: 'Enquirer last name required' })
				} else if (!value.match(/^[a-zA-Z]+$/)) {
					this.setState({ last_error: true, enquirer_last_name_error: 'Enquirer last name should only contain alphabet' })
				} else {
					this.setState({ last_error: false, enquirer_last_name_error: '' })
				}
				break;
			case 'enquirer_email':
				if (value === "") {
					this.setState({ email_error: true, enquirer_email_error: 'Enquirer email required' })
				} else if (!value.match(/^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/)) {
					this.setState({ email_error: true, enquirer_email_error: 'Please enter the valid email' })
				} else {
					this.setState({ email_error: false, enquirer_email_error: '' })
				}
				break;
			case 'enquirer_phone_number':
				if (value === "") {
					this.setState({ phone_error: true, enquirer_phone_error: 'Phone number is required' })
				} else if (!value.match(/^[789]\d{9}$/)) {
					this.setState({ phone_error: true, enquirer_phone_error: 'Please enter the valid phone number' })
				} else {
					this.setState({ phone_error: false, enquirer_phone_error: '' })
				}
				break;
			case 'student_first_name':
				if (value === "") {
					this.setState({ student_first_error: true, student_first_name_error: 'Student first name required' })
				} else if (!value.match(/^[a-zA-Z]+$/)) {
					this.setState({ student_first_error: true, student_first_name_error: 'Name shuold only contain alphabet' })
				} else {
					this.setState({ student_first_error: false, student_first_name_error: '' })
				}
				break;
			case 'student_last_name':
				if (value === "") {
					this.setState({ student_last_error: true, student_last_name_error: 'Student last name required' })
				} else if (!value.match(/^[a-zA-Z]+$/)) {
					this.setState({ student_last_error: true, student_last_name_error: 'Name shuold only contain alphabet' })
				} else {
					this.setState({ student_last_error: false, student_last_name_error: '' })
				}
				break;
		}
	}
	handleClose=()=>{
		this.setState({snackBarOpen:false})
	}
 
	render() {
		const { classes, leadFormData } = this.props;
		const leadFormDataFetched = leadFormData && leadFormData.leadFormData && leadFormData.leadFormData.data;
		const leadFormFetchedData = leadFormDataFetched ? leadFormData.leadFormData.data : null;
		const LABELS = Lang.LABELS.LEAD_FORM;
		const { loginClick, onChangeField } = this;
		return (
			<Container component="main" maxWidth="lg">
				<Paper>
					<CssBaseline />
					{leadFormDataFetched ?
						<div className={classes.paper}>
							<Typography
								component="form"
								autoComplete={"off"}
								noValidate
								onSubmit={() => {
									return false;
								}}>
								<h1>Create Lead</h1>
								<Grid container spacing={3}>
									<Grid item xs={4}>
										<TextField
											onChange={onChangeField}
											required
											name="enquirer_first_name"
											margin="normal"
											fullWidth
											value={this.state.enquirer_first_name}
											label={LABELS.ENQUIRER_FIRST_NAME}
											type="email"
											autoComplete="off"
											autoFocus
											error={this.state.first_error} 
											helperText={this.state.enquirer_first_name_error}
											/>
									</Grid>
									<Grid item xs={4}>
										<TextField
											id="enquirer_middle_name"
											onChange={onChangeField}
											margin="normal"
											name="enquirer_middle_name"
											value={this.state.enquirer_middle_name}
											fullWidth
											label={LABELS.ENQUIRER_MIDDLE_NAME}
											type="email"
											autoComplete="off" />
									</Grid>
									<Grid item xs={4}>
										<TextField
											id="enquirer_last_name"
											onChange={onChangeField}
											required
											name="enquirer_last_name"
											value={this.state.enquirer_last_name}
											margin="normal"
											fullWidth
											label={LABELS.ENQUIRER_LAST_NAME}
											type="email"
											autoComplete="off"
											error={this.state.last_error} 
											helperText={this.state.enquirer_last_name_error}
											/>
									</Grid>
									<Grid item xs={4}>
										<TextField
											id="enquirer_email"
											onChange={onChangeField}
											value={this.state.enquirer_email}
											required
											name="enquirer_email"
											margin="normal"
											fullWidth
											label={LABELS.ENQUIRER_EMAIL}
											type="email"
											autoComplete="off"
											error={this.state.email_error} 
											helperText={this.state.enquirer_email_error}
											/>
									</Grid>

									<Grid item xs={4}>
										<TextField
											id="enquirer_phone"
											onChange={onChangeField}
											required
											name="enquirer_phone_number"
											value={this.state.enquirer_phone}
											margin="normal"
											fullWidth
											label={LABELS.ENQUIRER_PHONE_NUMBER}
											type="phone"
											autoComplete="off"
											error={this.state.phone_error} 
											helperText={this.state.enquirer_phone_error}
											inputProps={{ maxLength: 10 }}
											>
										</TextField>		
									</Grid>
									<Grid item xs={4}>
										<SimpleSelect
											options={leadFormFetchedData.relationship_with_child}
											title={LABELS.RELATIONSHIP_WITH_CHILD}
											onSelectChange={this.onChangeDropDown} 
											jsonkeyName={"relationship_with_child"}/>
									</Grid>
									<Grid item xs={4}>
										<TextField
											id="student_first_name"
											onChange={onChangeField}
											required
											name="student_first_name"
											value={this.state.student_first_name}
											margin="normal"
											fullWidth
											label={LABELS.STUDENT_FIRST_NAME}
											type="email"
											autoComplete="off"
											error={this.state.student_first_error} 
											helperText={this.state.student_first_name_error}
											/>
									</Grid>
									<Grid item xs={4}>
										<TextField
											id="student_middle_name"
											onChange={onChangeField}
											value={this.state.student_middle_name}
											margin="normal"
											name="student_middle_name"
											fullWidth
											label={LABELS.STUDENT_MIDDLE_NAME}
											type="email"
											autoComplete="off" />
									</Grid>
									<Grid item xs={4}>
										<TextField
											id="student_last_name"
											onChange={onChangeField}
											value={this.state.student_last_name}
											required
											margin="normal"
											name="student_last_name"
											fullWidth
											label={LABELS.STUDENT_LAST_NAME}
											type="email"
											autoComplete="off"
											error={this.state.student_last_error} 
											helperText={this.state.student_last_name_error}
											/>
									</Grid>
									<Grid item xs={4}>
										<SimpleSelect
											options={leadFormFetchedData.student_gender}
											title={LABELS.STUDENT_GENDER}
											onSelectChange={this.onChangeDropDown}
											required={true}
											jsonkeyName={"student_gender"}
											displayNon={false}
											isArrayOfObject={false}
										/>
									</Grid>
									<Grid item xs={4}>
										<MuiPickersUtilsProvider utils={DateFnsUtils}>
											<KeyboardDatePicker
												id="date_of_birth"
												margin="normal"
												name="student_dob"
												value={this.state.student_dob ? moment(this.state.student_dob).format("ddd MMM DD YYYY HH:mm:ss zzZZ") : null}
												required
												 maxDate={new Date((new Date().getFullYear()-3)+'/'+(new Date().getMonth()+1)+'/'+(new Date().getDate()))}
												 minDate={new Date('01/01/1990')}
												format="dd/MM/yyyy"
												onChange={date => this.handleDateChange("student_dob",date)}
												label={LABELS.STUDENT_DOB}
												fullWidth />
										</MuiPickersUtilsProvider>
									</Grid>
									<Grid item xs={4}>
										<SimpleSelect
											options={leadFormFetchedData.grade_apply_for}
											title={LABELS.STUDENT_GRADE_APPLY_FOR}
											onSelectChange={this.onChangeDropDownObject}
											jsonkeyName={"grade_apply_for"}
											required={true}
											displayNon={false}
											isArrayOfObject={true}
											optionLabel='id'
											optionValue='name' />
									</Grid>
									<Grid item xs={4}>
										<SimpleSelect
											options={leadFormFetchedData.academic_year_apply_for}
											title={LABELS.ACADEMIC_YEAR_APPLY_FOR}
											onSelectChange={this.onChangeDropDownObject}
											jsonkeyName={"academic_year_apply_for"}
											required={true}
											displayNon={false}
											isArrayOfObject={true} 
											optionLabel='id'
											optionValue='title'/>
									</Grid>
									<Grid item xs={4}>
										<TextField
											id="student_current_city"
											onChange={onChangeField}
											required
											margin="normal"
											name="student_current_city"
											value={this.state.student_current_city}
											fullWidth
											label={LABELS.STUDENT_CURRENT_CITY}
											type="email"
											autoComplete="off"
											error={this.state.student_current_city===""?true:false} 
											helperText={this.state.student_current_city===""?'Students current city required':''}
											/>
									</Grid>
									<Grid item xs={4}>
										<SimpleSelect
											options={leadFormFetchedData.curriculum_apply_for}
											title={LABELS.CURRUCULUM_APPLY_FOR}
											jsonkeyName={"curriculum_apply_for"}
											onSelectChange={this.onChangeDropDown}
											optionLabel='name' />
									</Grid>
									<Grid item xs={4}>
										<SimpleSelect
											options={leadFormFetchedData.curriculum_current ? leadFormFetchedData.curriculum_current : []}
											title={LABELS.CURRICULUM_CURRENT}
											jsonkeyName={"curriculum_current"}
											onSelectChange={this.onChangeDropDown} />
									</Grid>
									<Grid item xs={4}>
										<MuiPickersUtilsProvider utils={DateFnsUtils}>
											<KeyboardDatePicker
												id="tentative_school_visit_date"
												margin="normal"
												name="tentative_school_visit_date"
												value={this.state.tentative_school_visit_date ? moment(this.state.tentative_school_visit_date).format("ddd MMM DD YYYY HH:mm:ss zzZZ") : null}
												required
												minDate={new Date()}
												format="dd/MM/yyyy"
												onChange={date => this.handleDateChange("tentative_school_visit_date",date)}
												label={LABELS.TENTATIVE_SCHOOL_VISIT_DATE}
												fullWidth />
										</MuiPickersUtilsProvider>
									</Grid>
									<Grid item xs={4}>
										<SimpleSelect
											options={leadFormFetchedData.source_id}
											title={LABELS.SOURCE_TO_REACH_US}
											onSelectChange={this.onChangeDropDownObject}
											required={true}
											displayNon={false}
											jsonkeyName={"source_id"}
											isArrayOfObject={true}
											optionLabel='id'
											optionValue='title' />
									</Grid>
									<Grid item xs={4}>
										<TextField
											onChange={onChangeField}
											required
											margin="normal"
											name="source_to_reach_us"
											value={this.state.source_to_reach_us}
											fullWidth
											label={LABELS.HOW_DID_YOU_HEAR_ABOUT_US}
											type="text"
											autoComplete="off"
											error={this.state.source_to_reach_us===""?true:false} 
											helperText={this.state.source_to_reach_us===""?'Please tell us how you reach':''}
											/>
									</Grid>
									<Grid item xs={4}>
										<SimpleSelect
											options={leadFormFetchedData.lead_priority_id}
											title={LABELS.LEAD_PRIORITY}
											onSelectChange={this.onChangeDropDownObject}
											required={true}
											jsonkeyName={"lead_priority_id"}
											display Non={false}
											isArrayOfObject={true}
											optionLabel='id'
											optionValue='title' />
									</Grid>
								</Grid>
								<Button disabled={this.state.error} type="button" onClick={this.submitClick} variant="contained" color="primary" className={classes.submit}>
									{LABELS.CREATE}
								</Button>
							</Typography>
						</div>
						: null}
				</Paper>
				<SnackBar message={this.state.message} variant={this.state.variant} open={this.state.snackBarOpen} handleClose={this.handleClose}/>
			</Container>
		);
	}
}
LeadForm.propTypes = {
	actionLogin: PropTypes.func.isRequired,
	error: PropTypes.string.isRequired
};
export default withRouter(withStyles(loginFormStyles)(LeadForm));
