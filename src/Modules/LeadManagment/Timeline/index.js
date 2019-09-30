import React,{ Component } from 'react'
import Timeline from './components/Timeline'
import './style/main.css'
import { connect } from "react-redux";
import { getTimeline, updateStatus,getDialogData,updateAssign, updatePriority,taskComplete } from './../redux/LeadAction';

 class index extends Component {

    componentDidMount(){
        this.props.getTimeline(this.props.route.location.state);
        this.props.getDialogData(this.props.route.location.state.lead_data.id)
    } 
    startFollowup=(lead_id,lead_status_id)=>{
        this.props.updateStatus(lead_id,lead_status_id);
    }
    updateAssignTo=(lead_id, assign_to)=>{
        console.log(lead_id, assign_to)
        this.props.updateAssign(lead_id, assign_to);
    }
    updatePriority=(lead_id,priority_id)=>{
       this.props.updatePriority(lead_id,priority_id)
    }
    taskComplete=(a,e)=>{
        console.log(a,e);
      this.props.taskComplete(a.id,a.lead_task_status_id)
    }

  render(){
      console.log(this.props.dialogData)
    return (
        <div>
            <Timeline user={this.props.timelines.user} leadData={this.props.route.location.state.lead_data} onClick={this.startFollowup} assign_data={this.props.dialogData} updateAssignTo={this.updateAssignTo} updatePriority={this.updatePriority} taskComplete={this.taskComplete}/>
        </div>
    );
  }
    
}

const mapStateToProps=state=>{
    console.log(state)
    return {
        timelines:state.leadReducer,
        dialogData:state.leadReducer.dialogData
    }
}

export default connect(mapStateToProps,{getTimeline,updateStatus,getDialogData,updateAssign, updatePriority,taskComplete})(index);
