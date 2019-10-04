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
import { filterByDate,filterByGender, filterByGrades,getGrades,clearFilter,filterByPriority,filterBySource } from './../../redux/LeadAction'
import { connect } from "react-redux";
import Button from '@material-ui/core/Button';
const Gender=['Male','Female']
const Priority=[{id:1,name:'Hot Lead'},{id:2,name:'Cold Lead'},{id:3,name:'Dead Lead'}]
const Source=[{id:1,name:'Web'},{id:2,name:'Email'},{id:3,name:'Telephone'},{id:4,name:'Walk-in'},{id:5,name:'Newspaper'},{id:6,name:'Social Media'}]
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
         this.props.grades.forEach(a => {
             if(a.name===grade){
                this.props.filterByGrades(a.id)
             }
         });
        
     }
    componentDidMount(){
      this.props.getGrades();
    }
    clearFilter=()=>{
       this.props.clearFilter()
    }
    priorityChnage=(label,priority)=>{
        Priority.forEach(a=>{
            if(a.name===priority){
                console.log(a)
                this.props.filterByPriority(a.id);
            }
        })   
    }
    sourceChnage=(label,source)=>{
        Source.forEach(a=>{
            if(a.name===source){
                console.log(a)
                this.props.filterBySource(a.id);
            }
        })   
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
                    <Grid item xs={3}>
                    <SimpleSelect options={Priority.map(a=>a.name)}
                     title={'Filter By Priority'}
                     onSelectChange={this.priorityChnage} 
                     jsonkeyName={"Filter By Priority"}
                    />
                    </Grid>
                    <Grid item xs={3}>
                    <SimpleSelect options={Source.map(a=>a.name)}
                     title={'Filter By Source To Reach'}
                     onSelectChange={this.sourceChnage} 
                     jsonkeyName={"Filter By Source To Reach"}
                    />
                    </Grid>
                    <Grid item xs={3}>
                    <Button onClick={this.clearFilter} variant="contained" style={{backgroundColor:'#3b5998',color:'#ffffff',marginLeft:'46px',marginTop:'27px'}} aria-controls="simple-menu" aria-haspopup="true" >
                  Clear Filters
                </Button>
                    </Grid>
                    <Grid item xs={3}>
                    <a><Button variant="contained" style={{backgroundColor:'#3b5998',color:'#ffffff',marginLeft:'16px',marginTop:'27px'}} aria-controls="simple-menu" aria-haspopup="true" >
                  Download Excel
                </Button></a>
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

export default connect(mapStateToPros,{filterByDate, filterByGender,filterByGrades,getGrades,clearFilter,filterByPriority,filterBySource})(AdvanceFilter);