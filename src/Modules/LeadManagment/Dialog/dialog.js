import React , { Component } from 'react';
import { withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Dialog as MuiDialog } from '@material-ui/core';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import style from './style';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';


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
class Dialog extends Component {
   
    state = {
        isOpen: this.props.open || false
    }

    handleClickOpen = () => {
        this.setState({ isOpen:true });
    }
    

    handleClose = () => {
        this.setState({ isOpen:false });
         this.props.closeDailog();
    }
   
     componentDidUpdate(prevProps){
         if(prevProps.open!=this.props.open){
             this.setState({isOpen:this.props.open})
         }
     }
 

    render() {
        console.log(this.props)
        const { classes, showButton , data } = this.props;
        const { isOpen } = this.state;
        
        console.log('inside Dialog render :',isOpen);
        return (
            <div>
                {!isOpen && showButton && (
                    <Button variant = "outlined"
                        color = "secondary"
                        onClick = {
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
                        { isOpen ? (
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
                  Lead id
</Typography>
              </div>
            </Grid>
            <Grid item xs={12} sm={9}>
              <TextField
                autoFocus
                required
                id="outlined-read-only-input"
                label="Lead id"
                defaultValue="121"
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
                Lead status
</Typography>
            </Grid>
            <Grid item xs={12} sm={9}>
              <TextField
                id="outlined-read-only-input"
                label="Lead status"
                autoFocus
                defaultValue="Available"
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
  Task type
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
 
  
  SelectProps={{
    MenuProps: {
      className: classes.menu,
    },
  }}
  helperText="Select Task type"
  margin="dense"
  variant="outlined"
>
  {currencies.map(option => (
    <MenuItem key={option.value} value={option.value}>
      {option.label}
    </MenuItem>
  ))}
</TextField>
</Grid>

<Grid item xs={12} sm={3}>

<Typography variant="h8" noWrap>
  Lead task status
</Typography>
</Grid>
<Grid item xs={12} sm={9}>
<TextField
  id="outlined-read-only-input"
  label="Lead task status"
  autoFocus
  defaultValue="working"
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
  Assigned to
</Typography>
</Grid>
<Grid item xs={12} sm={9}>
<TextField
  id="outlined-full-width"
  select
  autoFocus
  required
  label=""
  className={classes.textField}
  style={{ margin: 8 }}
 
  SelectProps={{
    MenuProps: {
      className: classes.menu,
    },
  }}
  helperText="Assigned to"
  margin="dense"
  variant="outlined"
>
  {currencies.map(option => (
    <MenuItem key={option.value} value={option.value}>
      {option.label}
    </MenuItem>
  ))}
</TextField>
</Grid>
<Grid item xs={12} sm={3}>

<Typography variant="h8" noWrap>
  Comments
</Typography>
</Grid>
<Grid item xs={12} sm={9}>
<TextField
  id="outlined-multiline-static"
  label="Your messaged here"
  multiline
  rows="4"

  className={classes.textField}
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
<TextField
  id="date"
  label="Schedule Date"
  type="date"
  defaultValue="2017-05-24"
  className={classes.textField}
  InputLabelProps={{
    shrink: true,
  }}
/>
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
  defaultValue="2017-05-24"
  className={classes.textField}
  InputLabelProps={{
    shrink: true,
  }}
/>
</Grid>

            </Grid>
                        
                    </DialogContent>
                    <DialogActions>
                        <Button  
                                onClick={this.handleClose} 
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