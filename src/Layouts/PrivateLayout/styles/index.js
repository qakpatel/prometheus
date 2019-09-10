import Dimensions from "../../../Config/Dimensions";
import logo from "../../../Assets/images/logo.png";


export const AppBarStyles = theme => ({
    appBar: {
		zIndex: theme.zIndex.drawer + 1,
		transition: theme.transitions.create(["width", "margin"], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		})
	},
	appBarShift: {
		marginLeft: Dimensions.DRAWER_WIDTH,
		width: `calc(100% - ${Dimensions.DRAWER_WIDTH}px)`,
		transition: theme.transitions.create(["width", "margin"], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen
		})
    },
    menuButton: {
		marginRight: 36
	},
	menuButtonHidden: {
		display: "none"
    },
    title: {
		flexGrow: 1
    },
    toolbar: {
		paddingRight: 24 // keep right padding when drawer closed
	},
});

export const DrawerStyles = theme => ({
    drawerPaper: {
		position: "relative",
		whiteSpace: "nowrap",
		height : "100vh",
		overflowX : "hidden",
		width: Dimensions.DRAWER_WIDTH,
		transition: theme.transitions.create("width", {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen
		})
	},
	drawerPaperClose: {
		overflowX: "hidden",
		transition: theme.transitions.create("width", {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		}),
		width: theme.spacing(7),
		[theme.breakpoints.up("sm")]: {
			width: theme.spacing(9)
		}
    },
    toolbarIcon: {
		display: "flex",
		alignItems: "center",
		textAlign : "center",
		justifyContent: "flex-end",
		padding: "0 8px",
		...theme.mixins.toolbar
	},
	toolBarLogo : {
		backgroundImage : `url(${logo})`,
		position : "absolute",
		backgroundRepeat : "no-repeat",
		backgroundSize : "50%",
		left : 85,
		top : 5,
		width : 100,
		height : 100
	},
	paper: {
		padding: theme.spacing(2),
		display: "flex",
		overflow: "auto",
		flexDirection: "column"
	},
});

export const contentStyles = theme => ({
	content: {
		flexGrow: 1,
		height: "100vh",
		overflow: "auto"
	},
	appBarSpacer: theme.mixins.toolbar,
	container: {
		paddingTop: theme.spacing(4),
		paddingBottom: theme.spacing(4)
	},
});