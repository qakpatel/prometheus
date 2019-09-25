import React , { Component } from 'react';
import { Paper } from '@material-ui/core'
import { withStyles } from '@material-ui/styles';
import color from './../../../Config/Colors';

const style ={
    container:{
            backgroundColor:color.WHITE,
            boxShadow:`0px 0px 10px 0px ${color.SHADOW}`,
            borderRadius:'4px',
            marginBottom:'2%',
            padding: "2%"
        }
}

class SMSContainer extends Component {
    render(){
        const { classes } = this.props;
        return(
            <Paper className={classes.container}>
                {this.props.children}
            </Paper>
        )
    }
}

export default withStyles(style)(SMSContainer);