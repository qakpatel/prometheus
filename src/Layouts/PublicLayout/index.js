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

export default withRouter(
	connect(
		null,
		null
	)(PublicLayout)
);
