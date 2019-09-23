import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { getAllLeads } from "./action";
import { connect } from "react-redux";
import { withStyles } from '@material-ui/styles';
import Barchart from "./Barchart";
import LeadCard from "./LeadCard";
import Arcchart from "./Arcchart";
import EnhancedTable from "../Common/components/EnhancedTable";

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
		 this.props.getAllLeads();
	}
render(){
	console.log(this.props.dashboardState.leadsData.recentLeads,'this.props.dashboardState');
	let LeadNodes = this.props.dashboardState.leadsData.prioritiesWithCount ? (this.props.dashboardState.leadsData.prioritiesWithCount.map((item)=> {
		return (
			<LeadCard
	 			message={item.title}
	 			calculatedNumber={item.total}
				 key={item.lead_priority_id}
	 	   />
		)		
	 })
	) : (
		''
	) 
	return (
		<div >
		  <Grid container item xs={12}>
			  {
				LeadNodes
			  }		 
		  </Grid>	  	
		  <Grid container item xs={12}>
			<Grid item xs={6} className="dashboard_col">
			 <Barchart />
			</Grid>
			<Grid item xs={6} className="dashboard_col">
			<Arcchart />
			</Grid>
		  </Grid>
			<EnhancedTable tableData={this.props.dashboardState.leadsData.recentLeads}/>
		</div>
	  );
}
}
dashboard = withStyles(useStyles)(dashboard)
function mapStateToProps (state,props)  {
	return {
		dashboardState: state.dashboardReducer
	}
}
export default connect(
	mapStateToProps,
	{ getAllLeads }
)(dashboard);
