import React, { Component } from 'react'
import { FormLabel } from '@material-ui/core';
import { Button } from 'reactstrap'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Tabs from './TabBar'
import Chip from '@material-ui/core/Chip';
import { withStyles } from '@material-ui/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ListItemText from '@material-ui/core/ListItemText';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


const styles = theme => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    chip: {
        margin: theme.spacing(1),
    },
    reject: {
        '&:hover': {
            textDecoration: 'none'
        }
    }
})


 

const options = [
    {id:1,name:'Hot Lead'},
    {id:2,name:'Cold Lead'},
    {id:3,name:'Dead Lead'},
  ];


class ActionPage extends Component {
   
    state = {
        assign_to: this.props.leadData.assigned_to.name || '',
        anchorEl:null,
        setAnchorEl:null,
        change_to: this.props.leadData.priority_label,
        open: false,
        setOpen: false,
      }
    
      
      assignHandle = (e) => {
        console.log(e)
        this.setState({ assign_to: e.target.value },()=>{
            this.props.assign_data.assigned_to.map(a=>{
                if(a.name===e.target.value){
                    this.props.updateAssignTo(this.props.leadData.id,a.id)
                }
            })
            
       })
      }
      assignChange = (e) => {
        this.setState({ change_to: e.target.value },()=>{
             options.map(a=>{
                if(a.name===e.target.value){
                this.props.updatePriority(this.props.leadData.id,a.id);
                }
            })
        })
      }
      handleClick = event => {
          this.setState({setAnchorEl:event.currentTarget})
      };
      handleClickOpen = () => {
        this.setState({setOpen:true})
    };
    assignhandleClose = () => {
        this.setState({setOpen:false})
    };
    
      handleClose = () => {
          this.setState({setAnchorEl:null});
    
      };
    
      

    render() {
        console.log(this.props.leadData)
        const { classes } = this.props;
        const DATE_OPTIONS = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
        return (
            <div>
                <Grid container spacing={4}>
                    <Grid item xs>
                        <Paper className={classes.paper}>
                            <List>
                                <ListItem>
                                    <FormLabel><span style={{ fontWeight: 'bold' }}>Lead ID: </span> {this.props.leadData.context.id}</FormLabel>
                                </ListItem>
                                <ListItem>
                                    <FormLabel><span style={{ fontWeight: 'bold' }}>Enquirer: </span>{this.props.leadData.context.enquirer_first_name + ' ' + this.props.leadData.context.enquirer_last_name}<br />{' { '}<a href={"mailto:" + this.props.leadData.context.enquirer_email} target="_top">{this.props.leadData.context.enquirer_email}</a>{' } '}</FormLabel>
                                </ListItem>
                                {/* <ListItem>
                                    <FormLabel><span style={{ fontWeight: 'bold' }}>Assign to:</span>
                                     {this.props.leadData.assigned_to.name}<br />{'{'}<a href={"mailto:" + this.props.leadData.assigned_to.email} target="_top">{this.props.leadData.assigned_to.email}</a>{'}'}
                                     </FormLabel>
                                </ListItem> */}
                            
                                <ListItem>
                                    <FormLabel><span style={{ fontWeight: 'bold' }}>Enquirer Phone Number: </span><br /><a href={"tel:" + this.props.leadData.context.enquirer_phone_number}>{this.props.leadData.context.enquirer_phone_number}</a></FormLabel>
                                </ListItem>
                                <ListItem>
                                    <FormLabel><span style={{ fontWeight: 'bold' }}>Student Name: </span>{this.props.leadData.context.student_first_name + ' ' + this.props.leadData.context.student_last_name}</FormLabel>
                                </ListItem>
                                <ListItem>
                                    <FormLabel><span style={{ fontWeight: 'bold' }}>Student DOB: </span>{(new Date(this.props.leadData.context.student_dob)).toLocaleDateString('en-US', DATE_OPTIONS)}</FormLabel>
                                </ListItem>

                                <ListItem>
                                    <FormLabel><span style={{ fontWeight: 'bold' }}>Current City: </span>{this.props.leadData.context.student_current_city}</FormLabel>
                                </ListItem>

                                <ListItem>
                                    <FormLabel><span style={{ fontWeight: 'bold' }}>Created On: </span>{this.props.leadData.created_at}</FormLabel>
                                </ListItem>
                                <ListItem>
                                    <FormLabel><span style={{ fontWeight: 'bold',paddingTop:'5px' }}>Assign to:</span>
                                    </FormLabel>
                                    <TextField
                                    id="outlined-full-width"
                                    select
                                    autoFocus
                                    // helperText={this.props.leadData.assigned_to.email}
                                  
                                    className={classes.textField}
                                    style={{ margin: 8 }}
                                    value={this.state.assign_to}
                                    onChange={this.assignHandle}
                                    SelectProps={{
                                        MenuProps: {
                                        className: classes.menu,
                                        },
                                    }}
                                    
                                    margin="dense"
                                    variant="outlined"
                                     >
                                    {this.props.assign_data.assigned_to?this.props.assign_data.assigned_to.map(option => (
                                        <MenuItem key={option.id} value={option.name}>
                                        {option.name}
                                        </MenuItem>
                                    )) : null}
                                    </TextField>
                                   
                                     
                                </ListItem>
                                <ListItem>
                                    <FormLabel>
                                        <span style={{ fontWeight: 'bold' }}>Lead Priority:</span>
                                    </FormLabel>
                                    {/* <Button aria-controls="simple-menu" aria-haspopup="true" onClick={this.handleClick}>
                                             Open Menu
                                                   </Button>
                                            <Menu
                                                id="simple-menu"
                                                anchorEl={this.state.anchorEl}
                                                keepMounted
                                                open={false}
                                                onClose={this.handleClose}
                                            >
                                                <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                                                <MenuItem onClick={this.handleClose}>My account</MenuItem>
                                                <MenuItem onClick={this.handleClose}>Logout</MenuItem>
                                            </Menu> */}

                                     <TextField
                                    id="outlined-full-width"
                                    select
                                    autoFocus
                                
                                  
                                    className={classes.textField}
                                    style={{ margin: 8 }}
                                    value={this.state.change_to}
                                    onChange={this.assignChange}
                                    SelectProps={{
                                        MenuProps: {
                                        className: classes.menu,
                                        },
                                    }}
                                    
                                    margin="dense"
                                    variant="outlined"
                                     >
                                    {options.map((option,index) => (
                                        <MenuItem key={option.id} 
                                        selected={index === 1} value={option.name}>
                                        {option.name}
                                        </MenuItem>
                                    ))}
                                    </TextField>


                                </ListItem>
                                <ListItem>
                              
                                
                                <div>
      <Button variant="outlined" style={{marginBottom:'16px',backgroundColor:'#3b5998'}} onClick={this.handleClickOpen}>
        Previous assignments
      </Button>
      <Dialog
        open={this.setState.setOpen}
        onClose={this.assignhandleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Previous Assignments History"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          <ListItem>
                                    <FormLabel><span style={{ fontWeight: 'bold' }}>Enquirer Phone Number: </span><br /><a href={"tel:" + this.props.leadData.context.enquirer_phone_number}>{this.props.leadData.context.enquirer_phone_number}</a></FormLabel>
                                </ListItem>
                                <ListItem>
                                    <FormLabel><span style={{ fontWeight: 'bold' }}>Student Name: </span>{this.props.leadData.context.student_first_name + ' ' + this.props.leadData.context.student_last_name}</FormLabel>
                                </ListItem>
                                <ListItem>
                                    <FormLabel><span style={{ fontWeight: 'bold' }}>Student DOB: </span>{(new Date(this.props.leadData.context.student_dob)).toLocaleDateString('en-US', DATE_OPTIONS)}</FormLabel>
                                </ListItem>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          
          <Button onClick={this.assignhandleClose} color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div></ListItem>
                                {/* { <ListItem>
                                    <FormLabel><button ><span style={{ fontWeight: 'bold' }}>Previous assignments </span></button></FormLabel>
                                </ListItem> } */}
                            </List> 
                        </Paper>
                       </Grid>
                       <Grid item xs={8}>
                        <Paper className={classes.paper}>
                            <Tabs label={['Face to Face', 'School Tour']} data={this.props.user} lead_data={this.props.leadData} onClick={this.props.onClick.bind(this, this.props.leadData.context.id, this.props.leadData.lead_status_id)} style={{width:'100%'}} taskComplete={this.props.taskComplete} updateStatusData={this.props.updateStatusData}/>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        )
    }
}


export default withStyles(styles)(ActionPage);