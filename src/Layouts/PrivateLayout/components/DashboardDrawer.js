import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { IconButton, Drawer, Divider, List } from "@material-ui/core";
import { ChevronLeft as ChevronLeftIcon } from "@material-ui/icons";
import { withStyles } from "@material-ui/styles";
import { DrawerStyles } from "../styles";
import { mainListItems, secondaryListItems } from "./listItems";

const DashboardDrawer = props => {
	const { classes, open, closeDrawer } = props;
	return (
		<div>
			<Drawer
				onClose={closeDrawer}
				variant="permanent"
				classes={{
					paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose)
				}}
				open={open}>
				<div className={classes.toolbarIcon}>
					<div className={classes.toolBarLogo} />
					<IconButton onClick={() => closeDrawer()}>
						<ChevronLeftIcon />
					</IconButton>
				</div>
				<Divider />
				<List>{mainListItems}</List>
				<Divider />
				<List>{secondaryListItems}</List>
			</Drawer>
		</div>
	);
};

DashboardDrawer.propTypes = {
	open: PropTypes.bool.isRequired,
	closeDrawer: PropTypes.func.isRequired
};
export default withStyles(DrawerStyles)(DashboardDrawer);
