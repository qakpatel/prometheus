import React, { Component } from 'react'
import EnhancedTable from "./../../../Common/components/EnhancedTable";
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import SimpleSelect from "../../../Common/components/simpleselect";
import { filterByDate,filterByGender, filterByGrades,getGrades } from './../../redux/LeadAction'
import { connect } from "react-redux";

const Gender=['Male','Female']

 class AdvanceFilter extends Component {

    state={
        startDate:new Date(),
        endDate:new Date(),
        gander:'Male'
    }

     startDateHandel=(date)=>{
       this.setState({startDate:date},()=>{
           this.props.filterByDate(date,this.state.endDate)
       })
     }
      endDateHandel=(date)=>{
          console.log(date)
        this.setState({endDate:date},()=>{
            this.props.filterByDate(this.state.startDate,date)
        })
     }
     GenderChange=(label,gender)=>{
      this.props.filterByGender(gender)
     }
     GradesChnage=(label,grade)=>{
         console.log(grade);
         console.log(this.props.grades)
         this.props.grades.forEach(a => {
             if(a.name===grade){
                this.props.filterByGrades(a.id)
             }
         });
        
     }
    componentDidMount(){
      this.props.getGrades();
    }

    render() {
        return (
            <div>
                <Grid container spacing={3}>
                    <Grid item xs={3}>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                                margin="normal"
                                id="date-picker-dialog"
                                label="Start Date"
                                format="yyyy-MM-dd"
                                value={this.state.startDate}
                                onChange={this.startDateHandel}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                            /></MuiPickersUtilsProvider>
                    </Grid>
                    <Grid item xs={3}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                                margin="normal"
                                id="date-picker-dialog"
                                label="End Date"
                                format="yyyy-MM-dd"
                                minDate={this.state.startDate}
                                value={this.state.endDate}
                                onChange={this.endDateHandel}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                            /></MuiPickersUtilsProvider>
                    </Grid>
                    <Grid item xs={3}>
                    <SimpleSelect options={Gender}
                     title={'Filter By Gender'}
                     onSelectChange={this.GenderChange} 
                     jsonkeyName={"Filter By Gender"}
                    />
                    </Grid>
                    <Grid item xs={3}>
                    <SimpleSelect options={this.props.grades?this.props.grades.map(a=>a.name):[]}
                     title={'Filter By Grades'}
                     onSelectChange={this.GradesChnage} 
                     jsonkeyName={"Filter By Grades"}
                    />
                    </Grid>
                </Grid>
               <EnhancedTable tableData={this.props.advanceFilterData?this.props.advanceFilterData.data:this.props.route.location.state.tableData} from={1}/> 
            </div>
        )
    }
}


const mapStateToPros=state=>{
    console.log('index.js table',state)
    return {
        advanceFilterData:state.leadReducer.advanceFilter,
        grades:state.leadReducer.grades
    }
}

export default connect(mapStateToPros,{filterByDate, filterByGender,filterByGrades,getGrades})(AdvanceFilter);