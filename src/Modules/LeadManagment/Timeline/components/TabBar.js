import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { ListGroup, ListGroupItem } from 'reactstrap';
import Dialog from './../../Dialog' 
import Button from '@material-ui/core/Button';
import { FormLabel } from '@material-ui/core';


function TabPanel(props) {
    
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            <Box p={3}>{children}</Box>
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
}));

function SimpleTab(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true)
      };
      const handleClose = () => {
        setOpen(false)
        console.log(open)
      };
    function handleChange(event, newValue) {
        console.log(newValue)
        setValue(newValue);
    }
   function closeDailog(){
        setOpen(false);
    }
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" >
                    <Tab label={props.label[0]} {...a11yProps(0)} style={{ width: '50%' }} />
                    <Tab label={props.label[1]} {...a11yProps(1)} style={{ width: '50%' }} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
            <Button variant="contained" color="primary" style={{marginBottom:'16px'}} onClick={handleClickOpen} className={classes.taskbutton} > Add task</Button>
                <div style={{ overflowY: 'scroll', height: 'auto',maxHeight:'400px' }}>
                    <ListGroup style={{style:'none'}}>
                        {props.data.map((a, i) => (
                            <ListGroupItem key={i}>
                            <div>
                            <FormLabel><span style={{fontWeight:'bold'}}>Assigned To:</span>{a.lead.assigned_to.name}{' { '}{a.lead.assigned_to.email}{' } '}</FormLabel><br/>
                            <FormLabel><span style={{fontWeight:'bold'}}>Schedule On: </span> {a.schedule_date}{'   '}{'   '} <span style={{fontWeight:'bold'}}>at: </span> {a.schedule_time}</FormLabel><br/>
                            <FormLabel><span style={{fontWeight:'bold'}}>Task Status: </span> {a.task_status_id==1?'Complete':'Pending'}</FormLabel><br/>
                            <FormLabel><span style={{fontWeight:'bold'}}>Comments: </span> {a.comment}</FormLabel><br />
                            </div>
                            </ListGroupItem>
                        ))}

                    </ListGroup>
                </div>
                <div style={{ padding: '40px' }}>
                    <Button variant="contained" color="primary" outline color="danger" style={{ display: 'inline' }} >Reject</Button>
                    <Button outline color="info" style={{ display: 'inline', float: 'right' }} onClick={() => { setValue(1) }}>Move To next step</Button>
                </div>

            </TabPanel>
            <TabPanel value={value} index={1}>
                <div style={{ overflowY: 'scroll', height: 'auto',maxHeight:'400px' }}>
                    <ListGroup>
                        {props.data.map((a, i) => (
                            <ListGroupItem key={i}>
                            {a.name}
                            
                            </ListGroupItem>
                            
                        ))}
                    </ListGroup>
                </div>
                <div style={{ padding: '40px' }}>
                    <Button outline color="danger" style={{ display: 'inline' }} >Reject</Button>
                    <Button outline color="info" style={{ display: 'inline', float: 'right' }}>Move To Skolaro</Button>
                </div>
            </TabPanel>
            <Dialog open={open} closeDailog={closeDailog}/>
        </div>
    );
}

export default SimpleTab;