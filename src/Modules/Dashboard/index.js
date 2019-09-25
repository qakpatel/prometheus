import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { getAllLeads } from "./action";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/styles";
import Barchart from "./Barchart";
import LeadCard from "./LeadCard";
import Arcchart from "./Arcchart";
import EnhancedTable from "../Common/components/EnhancedTable";

const useStyles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
});

class dashboard extends React.Component {
  componentDidMount() {
    this.props.getAllLeads();
  }
  render() {
    const { leadsData = [] } = this.props;

    let LeadNodes = leadsData.prioritiesWithCount
      ? leadsData.prioritiesWithCount.map(item => {
        return (
          <LeadCard
            message={item.title}
            calculatedNumber={item.total}
            key={item.lead_priority_id}
          />
        );
      })
      : "";
    return (
      <div>
        <Grid container item xs={12}>
          {LeadNodes}
        </Grid>

        <Paper >
          <Grid container item xs={12} style={{ width: "100%", padding: 20 }}>
            <Grid item sm={6} xs={3} style={{ display: "flex", justifyContent: "space-around" }} className="dashboard_col">
              <Barchart />
            </Grid>

            <Grid item sm={6} xs={3} style={{ display: "flex", justifyContent: "space-around" }} className="dashboard_col">
              <Arcchart />
            </Grid>
          </Grid>
        </Paper>

        <EnhancedTable tableData={leadsData.recentLeads} />
      </div>
    );
  }
}
dashboard = withStyles(useStyles)(dashboard);
function mapStateToProps(state, props) {
  return {
    leadsData: state.dashboardReducer.leadsData
  };
}
export default connect(
  mapStateToProps,
  { getAllLeads }
)(dashboard);
