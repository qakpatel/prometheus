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

const styles = theme => ({
    root: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
    },
    chip: {
      margin: theme.spacing(1),
    },
    reject:{
        '&:hover':{
            textDecoration:'none'
        }
    }
})

// const anchorEl = null
// const setAnchorEl = null
// const handleClick = event => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };


class ActionPage extends Component {

    render() {
        const { classes } = this.props;
        return (
            <div>
                <div className="maniBox">
                    <main className="main">
                        <section className="firstSection">
                            <List>
                            <ListItem>
                                    <FormLabel>Lead ID: {this.props.leadData.context.id}</FormLabel>
                                </ListItem>
                              <ListItem>
                                    <FormLabel>Enquirer: {this.props.leadData.context.enquirer_first_name+' '+this.props.leadData.context.enquirer_last_name}<br/>{' { '}<a href={"mailto:"+this.props.leadData.context.enquirer_email} target="_top">{this.props.leadData.context.enquirer_email}</a>{' } '}</FormLabel>
                                </ListItem>
                                <ListItem>
                                    <FormLabel>Assign to: {this.props.leadData.assigned_to.name}<br/>{'{'}<a href={"mailto:"+this.props.leadData.assigned_to.email} target="_top">{this.props.leadData.assigned_to.email}</a>{'}'}</FormLabel>
                                </ListItem>
                                <ListItem>
                                    <FormLabel>Enquirer phone no:<br/><a href={"tel:"+this.props.leadData.context.enquirer_phone_number}>{this.props.leadData.context.enquirer_phone_number}</a></FormLabel>
                                </ListItem>
                                <ListItem>
                                    <FormLabel>Student Name:{this.props.leadData.context.student_first_name+' '+this.props.leadData.context.student_last_name}</FormLabel>
                                </ListItem>
                                <ListItem>
                                    <FormLabel>Student DOB:{this.props.leadData.context.student_dob}</FormLabel>
                                </ListItem>

                                <ListItem>
                                    <FormLabel>Current City:{this.props.leadData.context.student_current_city}</FormLabel>
                                </ListItem>
                                
                                <ListItem>
                                    <FormLabel>Created On: {this.props.leadData.created_at}</FormLabel>
                                </ListItem>
                                <ListItem>
                                    <FormLabel>
                                    Lead Priority:
                                    </FormLabel>
                                    <Chip label={this.props.leadData.priority_label} color="secondary" className={classes.chip} variant="outlined" />
                          
                                    {/* <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Open Menu
      </Button>
      <Menu
        id="simple-menu"
       
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu> */}
                                </ListItem>
                            </List>
                        </section>
                        <section className="secondSection">
                            <Tabs label={['F2F', 'School Tour']} data={this.props.user} lead_data={this.props.leadData} onClick={this.props.onClick.bind(this,this.props.leadData.context.id,this.props.leadData.lead_status_id)}/>
                        </section>
                    </main>
                </div>

            </div>
        )
    }
}


export default withStyles(styles)(ActionPage);