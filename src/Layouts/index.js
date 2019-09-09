import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import _ from "lodash";
import PrivateLayout from "./privateLayout";
import PublicLayout from "./publicLayout";
import { withRouter } from "react-router-dom";
import privateRoutes from "../Routes/privateRoutes";
import publicRoutes from "../Routes/publicRoutes";
import Login from "../Modules/Login";
import NotFound from "../Modules/Common/components/NotFound";
import PrivateRoutes from "../Routes/privateRoutes";

class Layouts extends Component {
	componentWillReceiveProps(nextprops) {
		if (nextprops.login && nextprops.login.verified === false)
			if (this.props.location.pathname !== "/") {
				this.props.history.push("/");
			}
	}

	render() {
		let { login } = this.props;
		login = login || {};
		let dashboardPath = PrivateRoutes.Dashboard.path;
		return (
			<Switch>
				{_.map(publicRoutes, (route, key) => {
					const { component, path } = route;
					return <Route exact path={path} key={key} render={route => (login.verified ? <Redirect to={dashboardPath} /> : <PublicLayout component={component} route={route} />)} />;
				})}

				{_.map(privateRoutes, (route, key) => {
					const { component, path } = route;
					return <Route exact path={path} key={key} render={route => (login.verified ? <PrivateLayout component={component} route={route} /> : <PublicLayout component={Login} route={route} />)} />;
				})}
				{<Route component={NotFound} />}
			</Switch>
		);
	}
}

export default withRouter(
	connect(
		null,
		null
	)(Layouts)
);
