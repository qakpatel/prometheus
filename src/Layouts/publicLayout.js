import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { actionCheckIsLoggedIn } from "../Modules/Login/redux/Action";

class PublicLayout extends Component {
	componentDidMount() {
		this.props.actionCheckIsLoggedIn();
	}
	render() {
		const Component = this.props.component;
		const route = this.props.route;
		return (
			<div>
				<Component route={route} />
			</div>
		);
	}
}

export default withRouter(
	connect(
		null,
		{ actionCheckIsLoggedIn }
	)(PublicLayout)
);
