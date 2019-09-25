import React, { Component } from "react";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core";

const styles = theme => ({
  paper: {
    height: 80,
    width: 200,
    margin: '0 30px 30px 30px',
    padding: 20,
    display: "flex",
    alignItems: "center",
    boxShadow: "0 19px 38px rgba(0,0,0,0.30), 0 5px 20px rgba(0,0,0,0)"
  },
  sign: {
    fontSize: 13,
    paddingTop: 20,
    fontWeight: "bold"
  },
  message: {
    fontSize: 13,
    paddingLeft: 12,
    paddingTop: 3,
    fontWeight: "bold"
  },
  calculatedNumber: {
    fontSize: 45
  }
});

class LeadCard extends Component {
  render() {
    const { message, classes, calculatedNumber } = this.props;
    return (
      <Paper className={classes.paper}>
        <Grid className={classes.calculatedNumber}>{calculatedNumber}</Grid>
        <Grid className={classes.sign}></Grid>
        <Grid className={classes.message}>{message}</Grid>
      </Paper>
    );
  }
}

export default withStyles(styles)(LeadCard);
