import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { getAllLeads } from "./action";
import { connect } from "react-redux";
import { withStyles } from '@material-ui/styles';
import Barchart from "./Barchart";
import LeadCard from "./LeadCard";

const useStyles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

class dashboard extends React.Component {
	componentDidMount() {
		console.log(this.props.getAllLeads(),111111);
		 this.props.getAllLeads();
	}
render(){
	
	return (
		<div >
		  <Grid container item xs={12}>
		  <LeadCard
			message={"Active Leads"}
			calculatedNumber={10}
		   />
			 <LeadCard
			 message={"Inactive Leads"}
			 calculatedNumber={13}
			 />
			 <LeadCard
			 message={"Dead Leads"}
			 calculatedNumber={15}
			 />
		  </Grid>	  	
		  <Grid container item xs={12}>
			<Grid item xs={6} className="dashboard_col">
			 <Barchart />
			</Grid>
			<Grid item xs={6} className="dashboard_col">
			<Barchart />
			</Grid>
		  </Grid>
		</div>
	  );
}
}
dashboard = withStyles(useStyles)(dashboard)
export default connect(
	null,
	{ getAllLeads }
)(dashboard);
