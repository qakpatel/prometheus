import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Dialog as MuiDialog } from '@material-ui/core';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import style from '../style';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';


const styles = theme => ({
  root: {
    margin: 0,
    flexGrow: 1,
    padding: theme.spacing(2),
    backgroundColor: '#03a9f4',
    color: '#ffffff',
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: '#ffffff',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {

    lineHeight: '0em',
  },
  dense: {
    marginTop: theme.spacing(2),
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto',
    width: 'fit-content',
  },
  formControl: {
    marginTop: theme.spacing(2),
    minWidth: 120,
  },
  formControlLabel: {
    marginTop: theme.spacing(1),
  },

  menu: {
    width: 100,

    lineHeight: '0em',
  },
});

// const handleDateChange = date => {
//   setSelectedDate(date);
//  };

class Dialog extends Component {

  

  handleClickOpen = () => {
    this.setState({ isOpen: true });
  }

  

 
  handleClose = () => {
    this.setState({ isOpen: false });
    this.props.closeDailog();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.open != this.props.open) {
      this.setState({ isOpen: this.props.open })
    }
  }
  
  render() {
    console.log(this.props)
    const { classes, showButton, data } = this.props;
    const { isOpen } = this.state;

    console.log('inside Dialog render :', isOpen);
    return (
      <div>
        {!isOpen && showButton && (
          <Button variant="outlined"
            color="secondary"
            onClick={
              this.handleClickOpen
            }
          >
            Open dialog
                    </Button>
        )
        }
        <MuiDialog onClose={this.handleClose} aria-labelledby="customized-dialog-title" open={isOpen}>
          <DialogTitle disableTypography className={classes.root}>
            <Typography variant="h6">Create Task</Typography>
            {isOpen ? (
              <IconButton aria-label="close" className={classes.closeButton} onClick={this.handleClose}>
                <CloseIcon />
              </IconButton>
            ) : null}
          </DialogTitle>

          <DialogContent dividers>
            
          </DialogContent>
          <DialogActions>
            <Button
              onClick={this.createTask}
              target={'_blank'}
              className={classes.readMoreBtn}>
              Create
                        </Button>
            <Button
              onClick={this.handleClose}
              target={'_blank'}
              className={classes.readMoreBtn}>
              Exit
                        </Button>
          </DialogActions>
        </MuiDialog>
      </div>
    );
  }
}

Dialog.defaultProps = {
  open: false,
  showButton: false
}

export default withStyles(style)(Dialog);


// 	"assigned_to": 1,
// "comments": "werwerwe",
// "lead_id": "1",
// "lead_status_id": 1,
// "lead_task_status_id": "",
// "schedule_date": "2019-09-20",
// "schedule_time": "23:43",
// "task_type_id": 1