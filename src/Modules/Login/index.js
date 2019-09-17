import React from "react";
import { connect } from "react-redux";
import LoginForm from "../Login/components/LoginForm";
import { actionLogin, actionCheckIsLoggedIn } from "../Login/redux/Action";

const mapStateToProps = state => {
	return {
		error : state.loginState.error || ""
	};
};

export default connect(
	mapStateToProps,
	{ actionLogin, actionCheckIsLoggedIn }
)(LoginForm);
