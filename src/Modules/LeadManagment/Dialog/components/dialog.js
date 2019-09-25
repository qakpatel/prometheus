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

const currencies = [
  {
    value: 'USD',
    label: 'Work',
  },
  {
    value: 'EUR',
    label: 'Process',
  },
  {
    value: 'BTC',
    label: 'work',
  },
  {
    value: 'JPY',
    label: 'Process',
  },
];
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

  state = {
    isOpen: this.props.open || false,
    task_type: 'Call',
    assign_to: this.props.lead_data.assigned_to.name || '',
    comments: '',
    selectedDate:new Date(),
    selectedTime:new Date()

  }

  handleClickOpen = () => {
    this.setState({ isOpen: true });
  }

  handleDateChange=(date)=>{
    this.setState({selectedDate:date})
    
  }

  handleTimeChange=(time)=>{
    this.setState({selectedTime:time})
     console.log(time)
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
  assignHandle = (e) => {
    this.setState({ assign_to: e.target.value })
  }
  taskTypeHandle = (e) => {
    this.setState({ task_type: e.target.value })
  }

  scheduleDateHandler = (e) => {
    this.setState({ selectedDate: e.target.value })
  }

  scheduleTimeHandler = (e) => {
    this.setState({ selectedTime: e.target.value })
  }

  commentsHandler = (e) => {
    this.setState({ comments: e.target.value })
  }
  
  createTask = () => {
    let assign_to=this.props.data.assigned_to.filter(a=>a.name===this.state.assign_to)
    let task_type=this.props.data.task_type_id.filter(a=>a.title===this.state.task_type)
    console.log(this.props)
    let data = {
      lead_id: Number(this.props.data.lead_id),
      assigned_to:assign_to[0].id,
      task_type_id: task_type[0].id,
      comment: this.state.comments,
      schedule_date: this.state.selectedDate,
      schedule_time: this.state.selectedTime,
      lead_status_id: this.props.lead_data.lead_status.id,
      lead_task_status_id:this.props.where || 1,
    }
    console.log(data)
    this.props.onClick(data);
    this.setState({ isOpen: false });
    this.props.closeDailog();
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
            <Grid container spacing={3}>
              <Grid item xs={12} sm={3}>
                <div className={classes.formfield}>
                  <Typography variant="h8" noWrap>
                    Lead ID
               </Typography>
                </div>
              </Grid>
              <Grid item xs={12} sm={9}>
                <TextField
                  autoFocus
                  required
                  id="outlined-read-only-input"
                  label="Lead id"
                  defaultValue={this.props.data.lead_id}
                  className={classes.textField}
                  margin="dense"
                  InputProps={{
                    readOnly: true,
                  }}
                  variant="outlined"
                />
              </Grid>

              <Grid item xs={12} sm={3}>

                <Typography variant="h8" noWrap>
                  Lead Status
                 </Typography>
              </Grid>
              <Grid item xs={12} sm={9}>
                <TextField
                  id="outlined-read-only-input"
                  label="Lead status"
                  autoFocus
                  defaultValue={this.props.lead_data.lead_status!==null?this.props.lead_data.lead_status.title:''}
                  className={classes.textField}
                  margin="dense"
                  InputProps={{
                    readOnly: true,
                  }}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={3}>

                <Typography variant="h8" noWrap>
                  Task Type
</Typography>
              </Grid>
              <Grid item xs={12} sm={9}>
                <TextField
                  id="outlined-full-width"
                  select
                  autoFocus
                  required
                  label="Task type"
                  className={classes.textField}
                  style={{ margin: 8 }}
                  value={this.state.task_type}
                  onChange={this.taskTypeHandle}
                  SelectProps={{
                    MenuProps: {
                      className: classes.menu,
                    },
                  }}
                  helperText="Select Task type"
                  margin="dense"
                  variant="outlined"
                >
                  {this.props.data.task_type_id ? this.props.data.task_type_id.map(option => (
                    <MenuItem key={option.title} value={option.title}>
                      {option.title}
                    </MenuItem>
                  )) : null}
                </TextField>
              </Grid>


              <Grid item xs={12} sm={3}>

                <Typography variant="h8" noWrap>
                  Assigned To
</Typography>
              </Grid>
              <Grid item xs={12} sm={9}>
                <TextField
                  id="outlined-full-width"
                  select
                  autoFocus
                  required
                  label="Assign to"
                  className={classes.textField}
                  style={{ margin: 8 }}
                  value={this.state.assign_to}
                  onChange={this.assignHandle}
                  SelectProps={{
                    MenuProps: {
                      className: classes.menu,
                    },
                  }}
                  helperText="Select Assign to"
                  margin="dense"
                  variant="outlined"
                >
                  {this.props.data.assigned_to ? this.props.data.assigned_to.map(option => (
                    <MenuItem key={option.id} value={option.name}>
                      {option.name}
                    </MenuItem>
                  )) : null}
                </TextField>
              </Grid>
              <Grid item xs={12} sm={3}>
                <Typography variant="h8" noWrap>Comments</Typography>
              </Grid>
              <Grid item xs={12} sm={9}>
                <TextField
                  id="outlined-multiline-static"
                  label="Your messaged here"
                  multiline
                  rows="4"
                  fullWidth
                  value={this.state.comments}
                  className={classes.textField}
                  onChange={this.commentsHandler}
                  margin="normal"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={3}>

                <Typography variant="h8" noWrap>
                  Scheduled Date
</Typography>
              </Grid>
              <Grid item xs={12} sm={9}>
                { <TextField
                  id="date"
                  label="Schedule Date"
                  type="date"
                  value={this.state.selectedDate}
                  onChange={this.scheduleDateHandler}
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                /> }
                {/* { <MuiPickersUtilsProvider utils={DateFnsUtils}>
											<KeyboardDatePicker
												id="date"
												margin="normal"
												name="scheduled_date"
											  value={this.state.selectedDate}
												required
												format="yyyy-mm-dd"
                        onChange={this.handleDateChange}
                        label="Schedule Date"
												 />
										</MuiPickersUtilsProvider> } */}
              </Grid>

              <Grid item xs={12} sm={3}>

                <Typography variant="h8" noWrap>
                  Scheduled Time
</Typography>
              </Grid>
              <Grid item xs={12} sm={9}>
                <TextField
                  id="date"
                  label="Schedule Time"
                  type="time"
                  value={this.state.selectedTime}
                  onChange={this.scheduleTimeHandler}
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardTimePicker
                  margin="normal"
                  id="time-picker"
                  label="Time picker"
                  value={this.state.selectedTime}
                  onChange={this.handleTimeChange}
                  KeyboardButtonProps={{
                    'aria-label': 'change time',
                  }}
                />
                </MuiPickersUtilsProvider> */}
              </Grid>

            </Grid>

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