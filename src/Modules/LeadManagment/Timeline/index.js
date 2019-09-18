import React,{ Component } from 'react'
import Timeline from './components/Timeline'
import './style/main.css'
import { connect } from "react-redux";
import { getTimeline } from './redux/Action';

 class index extends Component {

    componentDidMount(){
        this.props.getTimeline(this.props.route.location.state);

    } 

  render(){
    return (
        <div>
            <Timeline user={this.props.timelines.user} leadData={this.props.route.location.state.lead_data}/>
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

export default connect(mapStateToProps,{getTimeline})(index);