import React,{ Component } from 'react'
import Timeline from './components/Timeline'
import './style/main.css'
import { connect } from "react-redux";
import { getTimeline, updateStatus } from './redux/Action';

 class index extends Component {

    componentDidMount(){
        this.props.getTimeline(this.props.route.location.state);
    } 
    startFollowup=(lead_id,lead_status_id)=>{
        this.props.updateStatus(lead_id,lead_status_id);
         console.log(lead_id,lead_status_id)
    }

  render(){
    return (
        <div>
            <Timeline user={this.props.timelines.user} leadData={this.props.route.location.state.lead_data} onClick={this.startFollowup}/>
        </div>
    );
  }
    
}

const mapStateToProps=state=>{
    console.log(state)
    return {
        timelines:state.timelineReducer
    }
}

export default connect(mapStateToProps,{getTimeline,updateStatus})(index);