import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { IconButton, Drawer, Divider, List } from "@material-ui/core";
import { ChevronLeft as ChevronLeftIcon } from "@material-ui/icons";
import { withStyles } from "@material-ui/styles";
import { DrawerStyles } from "../styles";

import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import { NavLink } from "react-router-dom";
import './../styles/style.css'

const menuItems = [
  {
    name: "Dashboard",
    icon: <DashboardIcon />,
    link: "/dashboard"
  },
  {
    name: "Lead Managment",
    icon: <PeopleIcon />,
    link: "/leads-management"
  }
  // {
  // 	name: "Unit Planner",
  // 	icon: <PeopleIcon />,
  // 	link: "/unit-planner"
  // }
];

const handleNavItemLink = (link, history) => {
  history.push(link);
};

const DashboardDrawer = props => {
  const { classes, open, closeDrawer, history } = props;
  return (
    <div>
      <Drawer
        onClose={closeDrawer}
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose)
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <div className={classes.toolBarLogo} />
          <IconButton onClick={() => closeDrawer()}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          {menuItems.map(item => {
            return (
              <ListItem style={{ padding: 0 }}
                button
                link={item.link}
                onClick={() => handleNavItemLink(item.link, history)}
               >
                  <NavLink className="verticalNavlink" to={item.link}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.name} />
                </NavLink>
              </ListItem>
            );
          })}
        </List>
      </Drawer>
    </div>
  );
};

DashboardDrawer.propTypes = {
  open: PropTypes.bool.isRequired,
  closeDrawer: PropTypes.func.isRequired
};
export default withRouter(withStyles(DrawerStyles)(DashboardDrawer));
