import React, { Component } from 'react'
import Dialog from './components/dialog'
import { connect } from 'react-redux'
import { getDialogData } from './redux/dialogaction'

 class index extends Component {

    componentDidMount(){
        this.props.getDialogData();
    }

    render() {
        console.log(this.props.open)
        return (
            <div>
                <Dialog open={this.props.open} closeDailog={this.props.closeDailog} data={this.props.dialogData} lead_data={this.props.lead_data}/>
            </div>
        )
    }
}

const matStateToProps=state=>{
console.log(state)
     return{
         dialogData:state.dialogReducer.dialogData
     }
}

export default connect(matStateToProps,{getDialogData})(index);