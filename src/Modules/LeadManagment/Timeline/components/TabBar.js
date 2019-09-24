import React,{ useEffect }  from 'react';
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
import { Button } from 'reactstrap';
import { FormLabel } from '@material-ui/core';
import { Link } from 'react-router-dom';


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
    reject:{
        '&:hover':{
            textDecoration:'none'
        }
    }
}));

function SimpleTab(props) {
    console.log(props)
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const [open, setOpen] = React.useState(false);
    const [leadStatusId, setLeadStatusId] =React.useState(props.lead_data.lead_status_id)
    const handleClickOpen = () => {
        setOpen(true)
      };
      useEffect(()=>{
          console.log('Call use effect')
      },[leadStatusId])
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

    function startFollowup(){
        setLeadStatusId(1);
        props.onClick()
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
              {leadStatusId===0?<Button variant="contained" style={{marginBottom:'16px',backgroundColor:'#3b5998'}} className={classes.button} onClick={startFollowup}>Start Followup
               </Button>:
                 <div style={{ overflowY: 'scroll', height: 'auto',maxHeight:'400px' }}>
                 <Button variant="contained" style={{marginBottom:'16px',backgroundColor:'#3b5998'}} onClick={handleClickOpen} className={classes.taskbutton} > Add task</Button>
                     <ListGroup style={{style:'none'}}>
                         {props.data.map((a, i) => (
                             <ListGroupItem key={i}>
                             <div>
                             <FormLabel><span style={{fontWeight:'bold'}}>Assigned To:</span>{a.lead.assigned_to.name}{' { '}<a href={"mailto:"+a.lead.assigned_to.email} target="_top">{a.lead.assigned_to.email}</a>{' } '}</FormLabel><br/>
                             <FormLabel><span style={{fontWeight:'bold'}}>Schedule On: </span> {a.schedule_date}{'   '}{'   '} <span style={{fontWeight:'bold'}}>at: </span> {a.schedule_time}</FormLabel><br/>
                             <FormLabel><span style={{fontWeight:'bold'}}>Task Status: </span> {a.task_status_id==1?'Complete':'Pending'}</FormLabel> <Button variant="contained" style={{marginLeft:'16px',float:'Right' , backgroundColor:'#3b5998'}} className={classes.taskbutton} size="small">Completed</Button><br/>
                             <FormLabel><span style={{fontWeight:'bold'}}>Comments: </span> {a.comment}</FormLabel>
                            
                             </div>
                             </ListGroupItem>
                         ))}
 
                     </ListGroup>
                     <Dialog open={open} closeDailog={closeDailog} lead_data={props.lead_data}/>
                 </div>}
              
              
                <div style={{ padding: '40px' }}>
                <Link to="/leads-management" className={classes.reject}><Button variant="contained" color="primary" outline color="danger" style={{ display: 'inline' }} >Reject</Button></Link>
                    <Button outline color="info" style={{ display: 'inline', float: 'right' }} onClick={() => { setValue(1) }}>Move To Next Step</Button>
                </div>

            </TabPanel>
            <TabPanel value={value} index={1}>
                
                <div style={{ overflowY: 'scroll', height: 'auto',maxHeight:'400px' }}>
                <Button variant="contained" style={{marginBottom:'16px',backgroundColor:'#3b5998'}} onClick={handleClickOpen} className={classes.taskbutton} > Add task</Button>
                    <ListGroup>
                        {props.data.map((a, i) => (
                            <ListGroupItem key={i}>
                                No data Available yet!
                            {/* {a.lead.assigned_to.name}{' { '}<a href={"mailto:"+a.lead.assigned_to.email} target="_top">{a.lead.assigned_to.email}</a>{' } '} */}
                            
                            </ListGroupItem>
                            
                        ))}
                    </ListGroup>
                </div>
                <div style={{ padding: '40px' }}>
                    <Link to="/leads-management" className={classes.reject}><Button outline color="danger" style={{ display: 'inline' }}>Reject</Button></Link>
                    <Button outline color="info" style={{ display: 'inline', float: 'right' }}>Move To Skolaro</Button>
                </div>
            </TabPanel>
            
        </div>
    );
}

export default SimpleTab;