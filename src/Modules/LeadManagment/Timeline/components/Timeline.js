import React, { Component } from 'react'
import { FormLabel } from '@material-ui/core';
import { Button } from 'reactstrap'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Tabs from './TabBar'
import Chip from '@material-ui/core/Chip';
import { withStyles } from '@material-ui/styles';

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
                                    <FormLabel>Created On: {this.props.leadData.created_at}</FormLabel>
                                </ListItem>
                                <ListItem>
                                    <FormLabel>
                                    Lead Priority:
                                    </FormLabel>
                                    <Chip label={this.props.leadData.priority_label} color="secondary" className={classes.chip} variant="outlined" />
                                </ListItem>
                            </List>
                        </section>
                        <section className="secondSection">
                            <Tabs label={['F2F', 'School Tour']} data={this.props.user} lead_data={this.props.leadData}/>
                        </section>
                    </main>
                </div>

            </div>
        )
    }
}


export default withStyles(styles)(ActionPage);