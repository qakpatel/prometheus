import React, { Component } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Badge
} from "@material-ui/core";
import {
  Menu as MenuIcon,
  Notifications as NotificationsIcon,
  AccountCircle
} from "@material-ui/icons";
import { withRouter } from "react-router-dom";
import { AppBarStyles } from "../styles";
import { withStyles } from "@material-ui/styles";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import {
  getAllNotification,
  postAllNotification
} from "../../../Modules/Dashboard/action";
import { connect } from "react-redux";
import CustomMenu from "./CustomMenu";
import { actionLogout } from "../../../Modules/Login/redux/Action";

class DashboardAppBar extends Component {
  state = {
    anchorEl: null,
    isMenuOpen: false,
    location: "",
  };
  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };
  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleCloseAndNavigate = () => {
    this.setState({ anchorEl: null });
    this.props.postAllNotification();
    this.props.history.push("/leads-management");
  }

  componentDidMount() {
    this.props.getAllNotification();
  }

  handleProfileMenuOpen = event => {
    this.setState({ isMenuOpen: true, location: event.currentTarget });
  };

  handleProfileMenuClose = () => {
    this.setState({ isMenuOpen: false });
  };

  handleLogout = () => {
    this.props.actionLogout();
    this.props.history.push("/");
  };
  render() {
    const { classes, open, openDrawer, Notification } = this.props;
    const { anchorEl, isMenuOpen, location } = this.state;
    const styles = {
      display: "flex",
      fontSize: "11px",
      justifyContent: "space-around"
    };
    let NotificationElement = Notification.length ? (
      Notification.map(item => {
        return (
          <div onClick={this.handleCloseAndNavigate} style={{ cursor: "pointer", outline: "none" }}>

            <MenuItem style={{ display: "block" }} onClick={this.handleClose}>{item.data.title}
              <div >
                <div style={{ fontSize: 11 }}>{item.data.text}</div>
                <div style={{ fontSize: 10 }}> {item.created_at}</div>
              </div>
            </MenuItem>


            <hr style={{ margin: 0 }} />
          </div>
        );
      })
    ) : (
        <div>
          <MenuItem disabled>No New Notification</MenuItem>
        </div>
      );
    return (
      <div>
        <AppBar
          position="absolute"
          className={clsx(classes.appBar, open && classes.appBarShift)}
        >
          <Toolbar className={classes.toolbar}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={() => openDrawer()}
              className={clsx(
                classes.menuButton,
                open && classes.menuButtonHidden
              )}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              className={classes.title}
            >
              Dashboard
            </Typography>
            <IconButton onClick={this.handleClick}>
              <Badge
                badgeContent={Notification.length}
                color="secondary"
                aria-controls="simple-menu"
                aria-haspopup="true"

              >
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={this.handleClose}
            >
              {NotificationElement}
            </Menu>
            <IconButton onClick={this.handleProfileMenuOpen}>
              <AccountCircle />
            </IconButton>
            <CustomMenu
              isMenuOpen={isMenuOpen}
              location={location}
              handleClose={this.handleProfileMenuClose}
              handleLogout={this.handleLogout}
            />
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
DashboardAppBar.propTypes = {
  open: PropTypes.bool.isRequired,
  openDrawer: PropTypes.func.isRequired
};

function mapStateToProps(state, props) {
  return {
    leadsData: state.dashboardReducer.leadsData,
    Notification: state.dashboardReducer.Notification
  };
}

export default connect(
  mapStateToProps,
  { getAllNotification, postAllNotification, actionLogout }
)(withStyles(AppBarStyles)(withRouter(DashboardAppBar)));
