import React, { Component } from 'react'
import Dialog from './components/previousassignment'
import { connect } from 'react-redux'
import { gethistoryData } from './redux/assignmentaction'


 class index extends Component {

    componentDidMount(){
        console.log(this.props.lead_data)
        this.props.getDialogData(this.props.lead_data.id);
    }
   
  

    render() {
        console.log(this.props.open)
        return (
            <div>
                <Dialog open={this.props.open} closeDailog={this.props.closeDailog} data={this.props.dialogData} lead_data={this.props.lead_data} />
            </div>
        )
    }
}

const matStateToProps=state=>{
console.log(state)
     return{
         dialogData:state.dialogReducer.dialogData,
         response:state.dialogReducer.submitDialog
     }
}

export default connect(matStateToProps,gethistoryData)(index);