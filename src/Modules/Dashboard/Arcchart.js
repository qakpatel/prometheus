import React, { Component } from "react";
import { RadialChart } from "react-vis";
import { getAllLeads } from "./action";
import { connect } from "react-redux";

class Arcchart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 0,
      width: 0
    };
  }
  render() {
    const { leadsData = [] } = this.props;
    const data = leadsData.sourcesWithCount
      ? leadsData.sourcesWithCount.map(item => ({
          label: `${item.title} : ${item.total}`,
          angle: item.total
        }))
      : "";
    const { height, width } = this.state;
    return (
      <div
        ref={node => {
          if (node) {
            this.node = node;
          }
        }}
      >
        <RadialChart
          className={"donut-chart-example"}
          data={data}
          width={300}
          height={300}
          padAngle={0.04}
          color="#FFC0CB"
          showLabels={true}
        />
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    leadsData: state.dashboardReducer.leadsData,
    Notification: state.dashboardReducer.Notification
  };
}

export default connect(
  mapStateToProps,
  { getAllLeads }
)(Arcchart);
