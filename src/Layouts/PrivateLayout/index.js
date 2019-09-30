import React, { Component } from "react";
import { CssBaseline, Container, Grid } from "@material-ui/core";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/styles";
import { withRouter } from "react-router-dom";
import DashboardDrawer from "./components/DashboardDrawer";
import DashboardAppBar from "./components/DashboardAppBar";
import { contentStyles } from "./styles";

class PrivateLayout extends Component {
	constructor(props) {
		super(props);
		this.state = {
			open: true
		};
	}
	handleDrawerClose = () => {
		this.setState({ open: false });
	};
	handleDrawerOpen = () => {
		this.setState({ open: true });
	};
	render() {
		console.log(this.props)
		const { classes, component, route } = this.props;
		const { open } = this.state;
		const { handleDrawerClose, handleDrawerOpen } = this;
		let Component = component;
		return (
			<div style={{ display: "flex" }}>
				<CssBaseline />
				<DashboardAppBar open={open} openDrawer={handleDrawerOpen} title={this.props.match.path}/>
				<DashboardDrawer open={open} closeDrawer={handleDrawerClose} />
				<main className={classes.content}>
				<div className={classes.appBarSpacer} />
					
					<Container maxWidth="lg" className={classes.container}>
						<Grid container spacing={3}>
							<Grid item xs="12">
								{<Component route={route} /> }
							</Grid>
						</Grid>
					</Container>
				</main>
			</div>
		);
	}
}
function mapStateToProps(state, props) {
	return { user: state.loginState.user };
}
export default withRouter(
	connect(
		mapStateToProps,
		null
	)(withStyles(contentStyles)(PrivateLayout))
);
