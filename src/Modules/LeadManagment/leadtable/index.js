import React, { Component } from 'react'
import LeadList from './components/Lead-List'
import PropTypes from "prop-types";
import { getTableData,downloadToExcel } from './../redux/LeadAction'
import { connect } from "react-redux";

class index extends Component {

    componentDidMount(){
        this.props.getTableData()
    }
    downloadToExcel=()=>{
        this.props.downloadToExcel(); 
    }
    render() {
        return (
            <div>
               <LeadList data={this.props.tabledata} downloadToExcel={this.downloadToExcel}/> 
            </div>
        )
    }
}

const mapStateToPros=state=>{
    console.log('index.js table',state)
    return {
        tabledata:state.leadReducer.data
    }
}

export default connect(mapStateToPros,{getTableData, downloadToExcel})(index);