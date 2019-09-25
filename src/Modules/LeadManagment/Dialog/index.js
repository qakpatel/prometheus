import React, { Component } from 'react'
import Dialog from './components/dialog'
import { connect } from 'react-redux'
import { getDialogData, submitDialog } from './redux/dialogaction'

 class index extends Component {

    componentDidMount(){
        console.log(this.props.lead_data)
        this.props.getDialogData(this.props.lead_data.id);
    }
    submitDialogData=(data)=>{
        this.props.submitDialog(data);
        this.props.getDialogData(this.props.lead_data.id);
    }
    render() {
        console.log(this.props.open)
        return (
            <div>
                <Dialog open={this.props.open} closeDailog={this.props.closeDailog} data={this.props.dialogData} lead_data={this.props.lead_data} onClick={this.submitDialogData}/>
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

export default connect(matStateToProps,{getDialogData,submitDialog})(index);