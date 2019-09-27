import React from "react";
import {
  Container,
  Button,
  CssBaseline,
  TextField,
  Link,
  Grid,
  Typography
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Lang from "../../../Lang/en";
import { loginFormStyles } from "../styles";
import Footer from "./footer";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  componentDidMount() {
    this.props.actionCheckIsLoggedIn();
    this.onChangeField(null);
  }
  loginClick = () => {
    let { email, password } = this.state;
    console.log(this.state);
    this.props.actionLogin(email, password);
  };
  onChangeField = e => {
    this.setState({
      email: document.getElementById("email").value,
      password: document.getElementById("password").value
    });
  };

  render() {
    const { classes } = this.props;
    const { email, password } = this.state;
    const LABELS = Lang.LABELS.LOGIN_FORM;
    const { loginClick, onChangeField } = this;
    return (
      <Container component="main" maxWidth="sm">
        <div className={classes.bgOverlay} />
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="div" className={classes.logo} />
          <Typography
            component="form"
            autoComplete={"off"}
            noValidate
            onSubmit={() => {
              return false;
            }}
          >
            <TextField
              id="email"
              onChange={onChangeField}
              variant="outlined"
              margin="normal"
              fullWidth
              label={LABELS.EMAIL}
              type="email"
              autoComplete="off"
              autoFocus
            />
            <TextField
              id="password"
              onChange={onChangeField}
              variant="outlined"
              margin="normal"
              fullWidth
              label={LABELS.PASSWORD}
              type="password"
              autoComplete="off"
            />
            <Button
              disabled={!(email && password)}
              type="button"
              onClick={loginClick}
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
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
        <Footer/>
      </Container>
    );
  }
}
LoginForm.propTypes = {
  actionLogin: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired
};
export default withStyles(loginFormStyles)(LoginForm);
