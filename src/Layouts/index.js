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
import ContentDialog from "../Modules/Common/components/ContentDialog";
import FullScreenLoader from "../Modules/Common/components/FullScreenLoader";
import { actionHideCommonErrorDialog } from "../Modules/Common/redux/Action";
import Lang from "../Lang/en";
class Layouts extends Component {
	
	state = {
		error: null,
		loader: false,
	};

	componentDidMount() {
		let { error, loader } = this.props;
		this.setState({
			error: error,
			loader: loader
		});
	}
	componentWillReceiveProps(nextprops) {
		if (nextprops.login && nextprops.login.userId) {
			if (this.props.location.pathname !== "/") {
				this.props.history.push("/");
			}
		}
		this.setState({
			error: nextprops.error,
			loader: nextprops.loader
		});
	}
	onErrorDialogClose = () => {
		this.props.actionHideCommonErrorDialog();
	};

	render() {
		let { user } = this.props;
		let { error, loader } = this.state;
		let { onErrorDialogClose } = this;
		let dashboardPath = PrivateRoutes.Dashboard.path;
		return (
			<div>
				{error && (
					<ContentDialog closeBtn={false} successBtnText={Lang.LABELS.BUTTONS.CLOSE} cancelBtn={false} onClose={onErrorDialogClose} title={Lang.LABELS.ALERTS.ERROR} open={error ? true : false}>
						{error}
					</ContentDialog>
				)}
				{loader && <FullScreenLoader visible={loader} />}
				<Switch>
					{_.map(publicRoutes, (route, key) => {
						const { component, path } = route;
						return <Route exact path={path} key={key} render={route => (user.id ? <Redirect to={dashboardPath} /> : <PublicLayout component={component} route={route} />)} />;
					})}

					{_.map(privateRoutes, (route, key) => {
						const { component, path } = route;
						return <Route exact path={path} key={key} render={route => (user.id ? <PrivateLayout component={component} route={route} /> : <PublicLayout component={Login} route={route} />)} />;
					})}
					{<Route component={NotFound} />}
				</Switch>
			</div>
		);
	}
}

const mapStateToProps = state => {
	console.log(state);
	return {
		loader: state.loaderState.show,
		error: state.errorState.error,
		user: state.loginState.user || {}
	};
};

export default withRouter(
	connect(
		mapStateToProps,
		{ actionHideCommonErrorDialog }
	)(Layouts)
);
