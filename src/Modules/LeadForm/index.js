import { connect } from "react-redux";
import LeadForm from "./componets/LeadForm";
import { actionGetCreateLeadData, actionCreateLead } from "./redux/Action";

const mapStateToProps = state => {
	return {
		error : state.loginState.error || "",
		leadFormData : state.leadFormState
	};
};

export default connect(
	mapStateToProps,
	{ actionGetCreateLeadData, actionCreateLead }
)(LeadForm);
