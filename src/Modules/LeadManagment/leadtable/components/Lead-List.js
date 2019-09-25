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
import Chip from '@material-ui/core/Chip';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import TablePagination from '@material-ui/core/TablePagination';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';

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
  search: {
    float:'left',
    paddingTop: 20,
    paddingBottom: 30,
  },
  button1: {
    float:'right',
    paddingTop: 20,
    paddingBottom: 30,
  },
  button: {
    padding: '6px',
  },
  chip: {
    margin: theme.spacing(1),
    outlineColor:theme.secondary2
  },
}));

 function CustomizedTables(props) {
   console.log(props.data)
  const [tableData, setTableData] = useState();
  const [filterTableData, setFilterTableData] = useState();
  const [hotLeadFilter, setHotLeadFilter] = useState(false);
  const [sortName, setSortName] = useState(false);
  useEffect(() => {
    setTableData(props.data.data)
    setFilterTableData(tableData ? tableData: [])
    console.log('call useeffect',tableData)
  },tableData);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

  function handleChangePage(event, newPage) {
    setPage(newPage);
  }

  function handleChangeRowsPerPage(event) {
    setRowsPerPage(+event.target.value);
    setPage(0);
  }
   
  function leadFilter() {
    setHotLeadFilter(!hotLeadFilter);
    setFilterTableData(sortTableData(tableData, 'priority'));
  }

  function sortTableData(tableData, option) {
    
    if (option === 'priority') {
      let c = [], d = [];
      if (!hotLeadFilter) {
        tableData.forEach(a => {
          if (a.priority_label === 'Hot Lead') {
            c.push(a)
          } else {
            d.push(a)
          }
        })
        return c.concat(d);
      }
      return tableData;
    } else if (option === 'name') {
      console.log(sortName)
      if (!sortName) {
        let data = tableData.map(a => ({ ...a })).sort((a, b) => {
          var nameA = a.context.enquirer_first_name.toUpperCase();
          var nameB = b.context.enquirer_first_name.toUpperCase();
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        })
        return data;
      }
      return tableData;
    }
  }

  function sortByName(){
    console.log('call',!sortName)
    setSortName(!sortName)
    setFilterTableData(sortTableData(tableData,'name'));
  }
  const classes = useStyles(); 

  const [values, setValues] = React.useState({});
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    const { location } = props.history
    props.history.push(location.pathname + "/create")
  }
  function searchIntableData(e){
    const { value } = e.target
    let dataToSearch = tableData.map((a)=>({...a})).filter((data)=>{
       console.log(data.context.enquirer_phone_number.indexOf(value))                

        return data.context.enquirer_first_name.toLowerCase().indexOf(value.toLowerCase()) > -1 ||
               data.context.enquirer_last_name.toLowerCase().indexOf(value.toLowerCase()) > -1  ||
                data.context.enquirer_email.toLowerCase().indexOf(value.toLowerCase()) > -1 ||
                data.context.student_current_city.toLowerCase().indexOf(value.toLowerCase()) > -1
      })
    console.log(dataToSearch)

    setFilterTableData(dataToSearch)
 }

  function handleClose() {
    setAnchorEl(null);
  }
  
  function downloadToExcel(){
    props.downloadToExcel()
  }
  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };
  return (
    <React.Fragment>
    
    <Paper className={classes.root}>
    
      <div className={classes.search}>
      <InputGroup>
        <InputGroupAddon addonType="prepend">Search</InputGroupAddon>
        <Input placeholder="Search"  onChange={searchIntableData}/>
      </InputGroup>
      </div>
      <div className={classes.button1}>
      <Button variant="contained" style={{backgroundColor:'#3b5998',color:'#ffffff', marginRight:'20px'}} aria-controls="simple-menu" aria-haspopup="true" onClick={downloadToExcel}>
       Download to Excel
       </Button>
      <Button variant="contained" style={{backgroundColor:'#3b5998',color:'#ffffff'}} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
      Create lead
      </Button>
      
      </div>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <StyledTableCell>Lead ID</StyledTableCell>
            <StyledTableCell style={{cursor:'pointer'}} onClick={sortByName}>{sortName?<ArrowDownwardIcon />:<ArrowUpwardIcon />}Name</StyledTableCell>
            <StyledTableCell align="center">Enquiry Email</StyledTableCell>
            <StyledTableCell align="center">Location</StyledTableCell>
            <StyledTableCell align="center">Contact</StyledTableCell>
           <StyledTableCell align="center" onClick={leadFilter} style={{cursor:'pointer'}}>{hotLeadFilter?<ArrowDownwardIcon />:<ArrowUpwardIcon />}Priority</StyledTableCell>
            <StyledTableCell align="center">Actions</StyledTableCell>

           
          </TableRow>
        </TableHead>
        <TableBody>
            {filterTableData?filterTableData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((data,index) => (
            <StyledTableRow key={index}>
              <StyledTableCell component="th" scope="row">
                {data.context_id}
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {data.context.enquirer_first_name+' '+data.context.enquirer_last_name}
              </StyledTableCell>
              <StyledTableCell align="center"><a href={"mailto:"+data.context.enquirer_email} target="_top">{data.context.enquirer_email}</a></StyledTableCell>
              <StyledTableCell align="center">{data.context.student_current_city}</StyledTableCell>
              <StyledTableCell align="center"><a href={"tel:"+data.context.enquirer_phone_number}>{data.context.enquirer_phone_number}</a></StyledTableCell>
              <StyledTableCell align="center">
              <Chip label={data.priority_label}  color="secondary" className={classes.chip} variant="outlined" />
              
     

              </StyledTableCell>
              <StyledTableCell align="center">
              <Link to={{pathname:'/leads-management/timeline',state:{lead_id: data.id,status_id:data.lead_status_id,lead_data:data}}}>
                <Button variant="contained" color="primary" style={{padding:'5px'}}>Open Lead</Button></Link>
              
              </StyledTableCell>
          
            </StyledTableRow>
          )):''}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5, 25, 100]}
        component="div"
       count={tableData?tableData.length:10}
        rowsPerPage={rowsPerPage}
        page={page}
        backIconButtonProps={{
          'aria-label': 'previous page',
        }}
        nextIconButtonProps={{
          'aria-label': 'next page',
        }}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
    </React.Fragment>
  );
}


export default withRouter(CustomizedTables); 