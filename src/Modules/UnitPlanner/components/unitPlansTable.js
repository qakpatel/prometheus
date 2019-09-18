import React, { Component } from "react";
import color from "./../../../Config/Colors";
import Lang from "./../../../Lang/en";
import { withStyles } from "@material-ui/core/styles";

import {
  Edit as EditIcon,
  Delete as DeleteIcon,
  Visibility as ViewIcon
} from "@material-ui/icons";

import {
  Container,
  Button,
  Paper,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Fab,
  Divider,
  Typography
} from "@material-ui/core";

const style = {
  head: {
    backgroundColor: color.BLACK,
    color: color.WHITE
  },
  tableCell: {
    fontSize: 18,
    fontWeight: 600,
    width: "25%",
    border: "1px"
  },
  root: {
    marginTop: "2px",
    overflowX: "auto"
  },
  table: {
    minWidth: 200,
    tableLayout: "auto"
  },
  fab: {
    margin: "4px",
    fontSize: 10
  },
  leftIcon: {
    marginRight: "4px",
    fontSize: "16px"
  },
  actionCell: {
    width: "25%"
  },
  tableHeader: {
    //backgroundColor:color.PRIMARY,
    //color: color.WHITE
    borderBottom:`1px solid ${color.SHADOW}`
  },
  tableTitle:{
      padding:"1%",
      fontWeight:"600"
  }
};

class UnitPlansTable extends Component {
    
  getTableRows = (unitPlans, classes, Labels) => {
    return unitPlans.map((plan, index) => {
      return (
        <TableRow
          key={plan.id}
          style={
            index % 2 != 0
              ? { background: color.SHADOW }
              : { background: color.WHITE }
          }
        >
          <TableCell>{plan.title}</TableCell>
          <TableCell align="center" classes={classes.actionCell}>
            <Grid container spacing={1} justify="center" alignItems="center">
              <Grid item>
                <Button size="small" variant="contained" color="primary">
                  <ViewIcon className={classes.leftIcon} />
                  {Labels.BUTTONS.VIEW_PDF}
                </Button>
              </Grid>
              <Grid item>
                <Button size="small" color="primary" variant="contained">
                  <EditIcon className={classes.leftIcon} />
                  {Labels.BUTTONS.EDIT}
                </Button>
              </Grid>
              <Grid item>
                <Button size="small" color="primary" variant="contained">
                  <DeleteIcon className={classes.leftIcon} />
                  {Labels.BUTTONS.DELETE}
                </Button>
              </Grid>
            </Grid>
          </TableCell>
        </TableRow>
      );
    });
  };

  render() {
    const { classes, unitPlans } = this.props;
    const Labels = Lang.LABELS;
    return (
      <Paper>
        <Container className={classes.tableTitle}>
          <Typography>UNIT PLANS</Typography>
        </Container>
        <Divider />
        <Table className={classes.table}>
          <TableHead className={classes.tableHeader}>
            <TableRow>
              <TableCell align="center" className={classes.tableCell}>
                <Typography>{Labels.TABLE.HEADERS.TITLE}</Typography>
              </TableCell>
              <TableCell align="center" className={classes.tableCell}>
                <Typography>{Labels.TABLE.HEADERS.ACTIONS}</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
                {this.getTableRows(unitPlans, classes, Labels)}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(style)(UnitPlansTable);
