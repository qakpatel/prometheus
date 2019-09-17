import React from "react";
import { connect } from "react-redux";
import Enquire from "./component/Enquire";

const mapStateToProps = state => {
	return {
		error : state.loginState.error || ""
	};
};

export default Enquire;