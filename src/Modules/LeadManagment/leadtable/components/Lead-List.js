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
// import {
//   JsonToExcel
// } from 'react-json-excel';
// let aaaaaa  = [{"id":1,"context_type":"App\\Models\\StudentEnquiry","context_id":1,"lead_status_id":1,"assigned_to":{"id":1,"name":"Neelesh Arora","email":"neelesharora@qainfotech.com","email_verified_at":null,"created_at":"2019-09-19 15:27:56","updated_at":"2019-09-19 15:27:56"},"lead_priority_id":2,"source_id":2,"creator":1,"created_at":"2019-09-19 15:37:58","updated_at":"2019-09-24 13:57:06","deleted_at":null,"priority_label":"Cold Lead","creator_label":"Neelesh Arora","status_label":"Face To Face Round","source_label":"Email","context":{"id":1,"enquirer_email":"abhij@gmail.com","enquirer_first_name":"abhi","enquirer_middle_name":"ku","enquirer_last_name":"mai","enquirer_phone_number":"+919694853855","relationship_with_child":"Father","student_first_name":"asfsad","student_middle_name":"sda","student_last_name":"sadfsd","student_gender":"Male","student_dob":"2019-09-19 00:00:00","grade_apply_for":"5","academic_year_apply_for":"1","student_current_city":"sdfsd","curriculum_apply_for":"ICE","curriculum_current":"IB","tentative_school_visit_date":"2019-09-26 00:00:00","source_to_reach_us":"sdfsd","created_at":"2019-09-19 15:37:58","updated_at":"2019-09-19 15:37:58","deleted_at":null},"lead_priority":{"id":2,"title":"Cold Lead","description":"Medium Priority Lead. This is not so important!","created_at":null,"updated_at":null,"deleted_at":null},"created_by":{"id":1,"name":"Neelesh Arora","email":"neelesharora@qainfotech.com","email_verified_at":null,"created_at":"2019-09-19 15:27:56","updated_at":"2019-09-19 15:27:56"},"lead_status":{"id":1,"title":"Face To Face Round","description":"Face to Face scheduled for Lead.","creator":1,"created_at":null,"updated_at":null,"deleted_at":null},"lead_source":{"id":2,"title":"Email","description":"Leads generated from enquiries via email","created_at":null,"updated_at":null,"deleted_at":null}}];
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
    props.downloadToExcel();
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
      <Button variant="contained" style={{backgroundColor:'#3b5998',color:'#ffffff',marginRight:'16px'}} aria-controls="simple-menu" aria-haspopup="true" onClick={downloadToExcel}>
       Download to Excel
                </Button>
                <Link to={{pathname:'/leads-management/advancefilter',state:{tableData:tableData}}}><Button variant="contained" style={{backgroundColor:'#3b5998',color:'#ffffff',marginRight:'16px'}} aria-controls="simple-menu" aria-haspopup="true" onClick={downloadToExcel}>
             Advance Filter
                </Button></Link>
                {/* <JsonToExcel
            data={aaaaaa}
            filename={'ss.xlsx'}
          /> */}
      <Button variant="contained" style={{backgroundColor:'#3b5998',color:'#ffffff'}} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
      Create lead
      </Button>
      
      </div>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <StyledTableCell>Lead ID</StyledTableCell>
            <StyledTableCell style={{cursor:'pointer'}} onClick={sortByName}>{sortName?<ArrowDownwardIcon />:<ArrowUpwardIcon />}Name</StyledTableCell>
            <StyledTableCell align="center" style={{cursor:'pointer'}}>Enquiry Email</StyledTableCell>
            <StyledTableCell align="center">Location</StyledTableCell>
            <StyledTableCell align="center">Contact</StyledTableCell>
           <StyledTableCell align="center" onClick={leadFilter} style={{cursor:'pointer'}}>{hotLeadFilter?<ArrowDownwardIcon />:<ArrowUpwardIcon />}Priority</StyledTableCell>
            <StyledTableCell align="center">Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {filterTableData?filterTableData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((data,index) => (
            <StyledTableRow key={index}>
              <StyledTableCell component="th">
                {data.context_id}
              </StyledTableCell>
              <StyledTableCell component="th">
                {data.context.enquirer_first_name+' '+data.context.enquirer_last_name}
              </StyledTableCell>
              <StyledTableCell align="center" style={{padding:'0px'}}><a href={"mailto:"+data.context.enquirer_email} target="_top">{data.context.enquirer_email}</a></StyledTableCell>
              <StyledTableCell align="center">{data.context.student_current_city}</StyledTableCell>
              <StyledTableCell align="center" style={{padding:'0px'}}><a href={"tel:"+data.context.enquirer_phone_number}>{data.context.enquirer_phone_number}</a></StyledTableCell>
              <StyledTableCell align="center">
              <Chip label={data.priority_label}  color="secondary" className={classes.chip} variant="outlined" />
              </StyledTableCell>
              <StyledTableCell align="center"  style={{paddingLeft:'1px'}}>
              <Link to={{pathname:'/leads-management/timeline',state:{lead_id: data.id,status_id:data.lead_status_id,lead_data:data}}}>
                <Button variant="contained" color="primary" style={{padding:'5px'}}>Open Lead</Button></Link>           
              </StyledTableCell>
          
            </StyledTableRow>
          )):''}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
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