import React from "react";
import { Container, Button, CssBaseline, TextField, FormControlLabel, Checkbox, Link, Grid, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import logo from "../../../Assets/images/logo.png";
import Lang from "../../../Lang/en";
const loginFormStyles = theme => ({
	"@global": {
		body: {
			backgroundColor: "#eee"
		}
	},
	paper: {
		marginTop: theme.spacing(7),
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		boxShadow: "1px 1px 20px #ddd",
		borderRadius: 5,
		backgroundColor: "#fff",
		paddingLeft: 100,
		paddingRight: 100,
		paddingTop: 50,
		paddingBottom: 50
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

class LoginForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: ""
		};
	}
	loginClick = () => {
		let { email, password } = this.state;
		this.props.actionLogin(email, password);
	};
	onChangeEmail = () => {

	}
	render() {
		const { classes } = this.props;
		const LABELS = Lang.LABELS.LOGIN_FORM;
		const { email } = this.state;
		const { loginClick, onChangePassword, onChangeEmail } = this;
		return (
			<Container component="main" maxWidth="sm">
				<CssBaseline />
				<div className={classes.paper}>
					<Typography component="div" className={classes.logo} />
					<Typography
						component="form"
						autoComplete={"off"}
						noValidate
						onSubmit={() => {
							return false;
						}}>
						<TextField onChange={} variant="outlined" margin="normal" fullWidth label={LABELS.EMAIL} type="email" autoComplete="off" autoFocus />
						<TextField variant="outlined" margin="normal" fullWidth label={LABELS.PASSWORD} type="password" autoComplete="off" />
						<FormControlLabel control={<Checkbox value="remember" color="primary" />} label={LABELS.REMEMBER_ME} />
						<Button type="button" onClick={loginClick} fullWidth variant="contained" color="primary" className={classes.submit}>
							{LABELS.SIGNIN}
						</Button>
						<Grid container>
							<Grid item xs>
								<Link href="#" variant="body2">
									{LABELS.FORGET_PASSWORD}
								</Link>
							</Grid>
						</Grid>
					</Typography>
				</div>
			</Container>
		);
	}
}
LoginForm.propTypes = {
	actionLogin: PropTypes.func.isRequired,
	error: PropTypes.string.isRequired
};
export default withStyles(loginFormStyles)(LoginForm);
