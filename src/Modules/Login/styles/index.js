import logo from "../../../Assets/images/logo.png";

export const loginFormStyles = theme => ({
	"@global": {
		body: {
			backgroundImage: `url(https://www.sitetv.net/wp-content/uploads/2016/10/students_can_make_studying_fun_and_efficient_by_using_memory_tools.jpg)`
		}
	},
	bgOverlay: {
		backgroundColor: `rgba(255,255,255,0.8)`,
		position: "fixed",
		top: 0,
		left: 0,
		right: 0,
		width: "100%",
		height: "100%",
		zIndex: -1
	},
	paper: {
		marginTop: theme.spacing(6),
		display: "flex",
		flexDirection: "column",
		alignItems: "center"
	},
	logo: {
		margin: theme.spacing(1),
		backgroundImage: `url(${logo})`,
		backgroundRepeat: "no-repeat",
		backgroundSize: "auto 90%",
		width: 150,
		height: 150
	},
	submit: {
		margin: theme.spacing(3, 0, 2)
	}
});