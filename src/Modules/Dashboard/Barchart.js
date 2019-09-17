
import React from 'react';

import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  VerticalBarSeries,
  VerticalBarSeriesCanvas,
  DiscreteColorLegend
} from 'react-vis';
import { getAllLeads } from "./action";
import { connect } from "react-redux";

class Barchart extends React.Component {
  componentDidMount() {
    this.props.getAllLeads();
 }
 render() {

  const data = this.props.dashboardState.leadsData.sourcesWithCount ? this.props.dashboardState.leadsData.sourcesWithCount.map((item) => ({
    x:item.title , y:item.total
  })):''
    return (
      <div>
        <XYPlot
          className="clustered-stacked-bar-chart-example"
          xType="ordinal"
          stackBy="y"
          width={300}
          height={300}
        >

          <XAxis />
          <YAxis />
          <VerticalBarSeries
            color="#79C7E3"
            data={data}
          />

        </XYPlot>
      </div>
    );
  }
}

function mapStateToProps (state,props)  {
	return {
		dashboardState: state.dashboardReducer
	}
}

export default  connect(
	  mapStateToProps,
	  { getAllLeads }
)(Barchart)


