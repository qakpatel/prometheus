import React from "react";
import { connect } from "react-redux";
import LoginForm from "../Login/components/LoginForm";
import { actionLogin, actionCheckIsLoggedIn } from "../Login/redux/Action";

class Login extends React.Component {
	render() {
		const { actionLogin, error } = this.props;
		return (
			<div>
				<LoginForm error={error} actionLogin={actionLogin} />
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		error : state.loginState.error || ""
	};
};

export default connect(
	mapStateToProps,
	{ actionLogin, actionCheckIsLoggedIn }
)(Login);
