import React, { Component } from "react";
import LeadList from "./components/Lead-List";
import { getTableData, downloadToExcel } from "./../redux/LeadAction";
import { connect } from "react-redux";

class index extends Component {
  state = {
    page: 1
  };

  handlePageChange = pageNumer => {
    this.setState({
      page: pageNumer + 1
    });
  };

  componentDidMount() {
    this.props.getTableData(this.state.page);
    this.props.downloadToExcel();
  }
  render() {
    return (
      <div>
        <LeadList
          data={this.props.tabledata}
          fileurl={this.props.exceldata ? this.props.exceldata.fileUrl : null}
          handlePageChange={this.handlePageChange}
        />
      </div>
    );
  }
}

const mapStateToPros = state => {
  console.log("index.js table", state);
  return {
    tabledata: state.leadReducer.data,
    exceldata: state.leadReducer.excel
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getTableData: page => dispatch(getTableData(page)),
    downloadToExcel: () => dispatch(downloadToExcel())
  };
};

export default connect(
  mapStateToPros,
  mapDispatchToProps
)(index);
