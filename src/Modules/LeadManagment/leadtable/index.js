import React, { Component } from 'react'
import LeadList from './components/Lead-List'
import PropTypes from "prop-types";
import { getTableData } from './redux/TableAction'
import { connect } from "react-redux";

class index extends Component {

    componentDidMount(){
        this.props.getTableData()
    }
    render() {
        return (
            <div>
               <LeadList data={this.props.tabledata}/> 
            </div>
        )
    }
}

const mapStateToPros=state=>{
    console.log('index.js table',state)
    return {
        tabledata:state.tableReducer.data
    }
}

export default connect(mapStateToPros,{getTableData})(index);