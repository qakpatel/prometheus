import { createMuiTheme } from "@material-ui/core/styles";

const AppThemeDefault = createMuiTheme({
	palette: {
		primary: { main: "#3b5998", contrastText: "#d5d8e2" },
		secondary: { main: "#5cb85c" },
		primary2: { main: "#d9534f" }
	},
	//appBackgroundImage: "linear-gradient(45deg, rgb(255, 11, 100) 0%, rgb(254, 73, 83) 56%, rgb(253, 105, 60) 95%, rgb(253, 108, 59) 100%)",
	defaultFont: {
		fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`
	},
	typography: {
		useNextVariants: true,
		h3: {
			color: "#000",
			textAlign: "left",
			marginBottom: 10,
			marginLeft: 47,
			fontSize: 28
		},
		h6: {
			marginLeft: 10,
			cursor: "pointer",
			fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`
		},
		h5: {
			color: "#ffffff!important",
			fontSize: "16px"
		},
		h4: {
			color: "#ffffff!important",
			fontSize: "16px"
		},
	},
	status: {
		success: "#18be93",
		danger: "#ec4067",
		notStarted: "#bcc0d0",
		pendingSync: "#bcc0d0"
	},
	button: {
		login: "#fa0050",
		clever: "#4274f6",
		classlink: "#35abcd",
		primary: "#2e66e7",
		delete:"#d9534f",
		save:"#5cb85c"
	}
});

export default AppThemeDefault;
