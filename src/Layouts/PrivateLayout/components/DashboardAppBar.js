import React,{Component} from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { AppBar, Toolbar, IconButton, Typography, Badge } from "@material-ui/core";
import { Menu as MenuIcon, Notifications as NotificationsIcon } from "@material-ui/icons";
import { AppBarStyles } from "../styles";
import { withStyles } from "@material-ui/styles";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { getAllNotification , postAllNotification }  from '../../../Modules/Dashboard/action';
import { connect } from "react-redux";


class DashboardAppBar extends Component {
	state = {
		anchorEl: null,
	  };
	handleClick = (event)=> {
		this.setState({ anchorEl: event.currentTarget });
	}
	handleClose = () => {
		this.setState({ anchorEl: null });
		this.props.postAllNotification();
	}
	componentDidMount() {
		this.props.getAllNotification();
	}
	render() {
	const { classes, open, openDrawer } = this.props;
	const { anchorEl } = this.state;
	const styles ={
		display: 'flex',
		fontSize: '11px',
		justifyContent: 'space-around'
	}
	let NotificationElement = this.props.dashboardState.Notification.length ? (this.props.dashboardState.Notification.map((item)=> {
		return (
			<div>
				<div>
					<MenuItem onClick={this.handleClose}>{item.data.title}
					</MenuItem>
				</div>
				<div style={styles}>
					<span>{item.data.text}</span>
					<span>{item.created_at}</span>
				</div>
				<hr></hr>
			</div>
		)
	 })
	)  : ( 	
			<div>
				<MenuItem disabled>No New Notification
				</MenuItem>
			</div>
	 )
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
							<IconButton>
								<Badge badgeContent={this.props.dashboardState.Notification.length} color="secondary"  aria-controls="simple-menu" aria-haspopup="true" onClick={this.handleClick}>
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
								{
									NotificationElement
								}
								</Menu>
					</Toolbar>
				</AppBar>
			</div>
		);
	}
};
DashboardAppBar.propTypes ={
	open : PropTypes.bool.isRequired,
	openDrawer : PropTypes.func.isRequired
}

function mapStateToProps (state,props)  {
	return {
		dashboardState: state.dashboardReducer
	}
}

export default connect(
	mapStateToProps,
	{getAllNotification,postAllNotification}
)(withStyles(AppBarStyles)(DashboardAppBar));
