import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { AppBar, Toolbar, IconButton, Typography, Badge } from "@material-ui/core";
import { Menu as MenuIcon, Notifications as NotificationsIcon } from "@material-ui/icons";
import { AppBarStyles } from "../styles";
import { withStyles } from "@material-ui/styles";
const DashboardAppBar = props => {
	const { classes, open, openDrawer } = props;
	return (
		<div>
			<AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
				<Toolbar className={classes.toolbar}>
					<IconButton edge="start" color="inherit" aria-label="open drawer" onClick={() => openDrawer()} className={clsx(classes.menuButton, open && classes.menuButtonHidden)}>
						<MenuIcon />
					</IconButton>
					<Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
						Dashboard
					</Typography>
					<IconButton color="inherit">
						<Badge badgeContent={4} color="secondary">
							<NotificationsIcon />
						</Badge>
					</IconButton>
				</Toolbar>
			</AppBar>
		</div>
	);
};
DashboardAppBar.propTypes ={
	open : PropTypes.bool.isRequired,
	openDrawer : PropTypes.func.isRequired
}
export default withStyles(AppBarStyles)(DashboardAppBar);
