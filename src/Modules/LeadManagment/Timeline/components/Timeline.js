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


 

  


class ActionPage extends Component {

    state = {
        anchorEl : null,
        chipLabel:this.props.leadData.priority_label
      }
      handleClick = event => {
          this.setState({anchorEl:event.currentTarget})
         console.log(event)
     };
     handleClose = () => {
       this.setState({anchorEl:null})
      };
    render() {
        const { classes } = this.props;
        const DATE_OPTIONS = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
        return (
            <div>
                <Grid container spacing={4}>
                    <Grid item xs>
                        <Paper className={classes.paper}>
                            <List>
                                <ListItem>
                                    <FormLabel><span style={{ fontWeight: 'bold' }}>Lead ID:</span> {this.props.leadData.context.id}</FormLabel>
                                </ListItem>
                                <ListItem>
                                    <FormLabel><span style={{ fontWeight: 'bold' }}>Enquirer: </span>{this.props.leadData.context.enquirer_first_name + ' ' + this.props.leadData.context.enquirer_last_name}<br />{' { '}<a href={"mailto:" + this.props.leadData.context.enquirer_email} target="_top">{this.props.leadData.context.enquirer_email}</a>{' } '}</FormLabel>
                                </ListItem>
                                <ListItem>
                                    <FormLabel><span style={{ fontWeight: 'bold' }}>Assign to:</span> {this.props.leadData.assigned_to.name}<br />{'{'}<a href={"mailto:" + this.props.leadData.assigned_to.email} target="_top">{this.props.leadData.assigned_to.email}</a>{'}'}</FormLabel>
                                </ListItem>
                                <ListItem>
                                    <FormLabel><span style={{ fontWeight: 'bold' }}>Enquirer phone no:</span><br /><a href={"tel:" + this.props.leadData.context.enquirer_phone_number}>{this.props.leadData.context.enquirer_phone_number}</a></FormLabel>
                                </ListItem>
                                <ListItem>
                                    <FormLabel><span style={{ fontWeight: 'bold' }}>Student Name:</span>{this.props.leadData.context.student_first_name + ' ' + this.props.leadData.context.student_last_name}</FormLabel>
                                </ListItem>
                                <ListItem>
                                    <FormLabel><span style={{ fontWeight: 'bold' }}>Student DOB:</span>{(new Date(this.props.leadData.context.student_dob)).toLocaleDateString('en-US', DATE_OPTIONS)}</FormLabel>
                                </ListItem>

                                <ListItem>
                                    <FormLabel><span style={{ fontWeight: 'bold' }}>Current City:</span>{this.props.leadData.context.student_current_city}</FormLabel>
                                </ListItem>

                                <ListItem>
                                    <FormLabel><span style={{ fontWeight: 'bold' }}>Created On: </span>{this.props.leadData.created_at}</FormLabel>
                                </ListItem>
                                <ListItem>
                                    <FormLabel>
                                        <span style={{ fontWeight: 'bold' }}>Lead Priority:</span>
                                    </FormLabel>
                                    <Chip label={this.state.chipLabel} color="secondary" className={classes.chip} variant="outlined" onClick={this.handleClick}/>
                                            <Menu
                                                id="simple-menu"
                                                anchorEl={this.state.anchorEl}
                                                keepMounted
                                                open={Boolean(this.state.anchorEl)}
                                                onClose={this.handleClose}
                                            >
                                                <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                                                <MenuItem onClick={this.handleClose}>My account</MenuItem>
                                                <MenuItem onClick={this.handleClose}>Logout</MenuItem>
                                            </Menu>
                                </ListItem>
                                {/* <ListItem>
                                    <FormLabel><button><span style={{ fontWeight: 'bold' }}>Previous assignments </span></button></FormLabel>
                                </ListItem> */}
                            </List>
                        </Paper>
                    </Grid>
                    <Grid item xs={8}>
                        <Paper className={classes.paper}>
                            <Tabs label={['F2F', 'School Tour']} data={this.props.user} lead_data={this.props.leadData} onClick={this.props.onClick.bind(this, this.props.leadData.context.id, this.props.leadData.lead_status_id)} />
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        )
    }
}


export default withStyles(styles)(ActionPage);