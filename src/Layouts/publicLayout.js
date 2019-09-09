import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class PublicLayout extends Component {
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
function mapStateToProps(state, props) {
	return { login: state.login };
}
export default withRouter(
	connect(
		mapStateToProps,
		null
	)(PublicLayout)
);
