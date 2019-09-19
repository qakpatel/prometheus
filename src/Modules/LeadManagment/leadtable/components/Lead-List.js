import React,{ useState, useEffect  } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';
import { Link ,withRouter} from 'react-router-dom';


const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: '#3b5998',
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);




const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
    
  },
  table: {
    width: '100%',
    minWidth:'700px'
  },
 
  button1: {
    float:'right',
    paddingTop: 20,
    paddingBottom: 30,
  }
}));

 function CustomizedTables(props) {
   
    const[tableData,setTableData]=useState([]);
    useEffect(() => {
      setTableData(props.data[0])
    });
    
  function filterTableData(tableData){
    let c=[],d=[];
    tableData.forEach(a=>{
      if(a.priority_label==='Hot Lead'){
        c.push(a)
      }else{
        d.push(a)
      }
    })
    return c.concat(d);
  }

  const classes = useStyles(); 

  const [values, setValues] = React.useState({
    
  });
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    const { location } = props.history
    props.history.push(location.pathname + "/create")
  }
 

  function handleClose() {
    setAnchorEl(null);
  }
  
  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };
  return (
    <Paper className={classes.root}>
      <div className={classes.button1}>
      <Button variant="contained" style={{backgroundColor:'#3b5998',color:'#ffffff'}} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
      Create lead
      
      </Button>
      </div>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <StyledTableCell>Lead ID</StyledTableCell>
            <StyledTableCell align="center">Enquiry Email</StyledTableCell>
            <StyledTableCell align="center">Priority</StyledTableCell>
            <StyledTableCell align="center">Actions</StyledTableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData?filterTableData(tableData).map((data,index) => (
            <StyledTableRow key={index}>
              <StyledTableCell component="th" scope="row">
                {data.context_id}
              </StyledTableCell>
              <StyledTableCell align="center">{data.context.enquirer_email}</StyledTableCell>
              <StyledTableCell align="center">
              <Button variant="contained" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
            {data.priority_label}
      </Button>
     

              </StyledTableCell>
              <StyledTableCell align="center">
              <Link to={{pathname:'/leads-management/timeline',state:{lead_id: data.id,status_id:data.lead_status_id,lead_data:data}}}>{data.lead_status_id===1?<Button variant="contained" color="primary" className={classes.button}>Start Followup
               </Button>:
                <Button variant="contained" color="primary" className={classes.button}>View Followup
              </Button>}</Link>
              </StyledTableCell>
          
            </StyledTableRow>
          )):''}
        </TableBody>
      </Table>

    </Paper>
   
  );
}


export default withRouter(CustomizedTables); 