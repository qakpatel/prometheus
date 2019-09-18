import React, { Component } from 'react'
import { FormLabel } from '@material-ui/core';
import { Button } from 'reactstrap'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Tabs from './TabBar'


class ActionPage extends Component {
     
    render() {
        console.log(this.props.leadData)
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
                                    <FormLabel>Enquirer:<br/> {this.props.leadData.context.enquirer_first_name+' '+this.props.leadData.context.enquirer_last_name}{' { '}{this.props.leadData.context.enquirer_email}{' } '}</FormLabel>
                                </ListItem>
                              
                                <ListItem>
                                    <FormLabel>Created At: {this.props.leadData.created_at}</FormLabel>
                                </ListItem>
                                <Button color="success" style={{ marginRight: '20px', padding: '5px', marginTop: '4px' }}>High</Button>
                            </List>
                        </section>
                        <section className="secondSection">
                            <Tabs label={['F2F', 'School Tour']} data={this.props.user}/>
                        </section>
                    </main>
                </div>

            </div>
        )
    }
}


export default ActionPage;