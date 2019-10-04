import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';
import { lighten } from '@material-ui/core/styles/colorManipulator';

let counter = 0;
function createData(FirstName,LastName, Email, MobileNumber,Location, LeadPriority, CreatedDate) {
  counter += 1;
  return { id: counter, FirstName,LastName, Email, MobileNumber,Location, LeadPriority, CreatedDate };
}

function desc(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function stableSort(array, cmp) {
  const stabilizedThis = array ? (array.map((el, index) => [el, index])) : ('')
  if(stabilizedThis){
    stabilizedThis.sort((a, b) => {
      const order = cmp(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    return stabilizedThis.map(el => el[0]);
  } 
  return ''
}

function getSorting(order, orderBy) {
  return order === 'desc' ? (a, b) => desc(a, b, orderBy) : (a, b) => -desc(a, b, orderBy);
}

const rows = [
  { id: 'FirstName', numeric: false, disablePadding: false, label: 'First Name' },
  { id: 'LastName', numeric: false, disablePadding: false, label: 'Last Name' },
  { id: 'Email', numeric: false, disablePadding: false, label: 'Email Id' },
  { id: 'MobileNumber', numeric: true, disablePadding: false, label: 'Mobile Number' },
  { id: 'Location', numeric: true, disablePadding: false, label: 'Location' },
  { id: 'LeadPriority', numeric: false, disablePadding: false, label: 'Lead Priority' },
  { id: 'CreatedDate', numeric: true, disablePadding: false, label: 'Created Date' },
];

class EnhancedTableHead extends React.Component {
  createSortHandler = property => event => {
    this.props.onRequestSort(event, property);
  };

  render() {
    const { onSelectAllClick, order, orderBy, numSelected, rowCount } = this.props;

    return (
      <TableHead>
        <TableRow>

          {rows.map(
            row => (
              <TableCell
                key={row.id}
                align={row.numeric ? 'center' : 'center'}
                padding={row.disablePadding ? 'none' : 'default'}
                sortDirection={orderBy === row.id ? order : false}
              >
                <Tooltip
                  title="Sort"
                  placement={row.numeric ? 'bottom-end' : 'bottom-start'}
                  enterDelay={300}
                >
                  <TableSortLabel
                    active={orderBy === row.id}
                    direction={order}
                    onClick={this.createSortHandler(row.id)}
                  >
                    {row.label}
                  </TableSortLabel>
                </Tooltip>
              </TableCell>
            ),
            this,
          )}
        </TableRow>
      </TableHead>
    );
  }
}


const toolbarStyles = theme => ({
  root: {
    paddingRight: theme.spacing.unit,
  },
  highlight:
    theme.palette.type === 'light'
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  spacer: {
    flex: '1 1 100%',
  },
  actions: {
    color: theme.palette.text.secondary,
  },
  title: {
    flex: '0 0 auto',
  },
});

let EnhancedTableToolbar = props => {
  const { numSelected, classes } = props;

  return (
    <Toolbar
      className={classNames(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      <div className={classes.title}>
        {numSelected > 0 ? (
          <Typography color="inherit" variant="subtitle1">
            {numSelected} selected
          </Typography>
        ) : (
          <Typography variant="h6" id="tableTitle">
            {props.from===1?'':'Recent Leads'}
          </Typography>
        )}
      </div>
      <div className={classes.spacer} />
      <div className={classes.actions}>
        {numSelected > 0 ? (
          <Tooltip title="Delete">
            <IconButton aria-label="Delete">
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        ) : (
          ''
        )}
      </div>
    </Toolbar>
  );
};


EnhancedTableToolbar = withStyles(toolbarStyles)(EnhancedTableToolbar);

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
  },
  table: {
    minWidth: 1020,
  },
  tableWrapper: {
    overflowX: 'auto',
  },
});

class EnhancedTable extends React.Component {
  state = {
    order: 'asc',
    orderBy: 'calories',
    selected: [],
    // data: [
    //   createData('Cupcake', 305, 3.7, 67, 4.3),
    //   createData('Donut', 452, 25.0, 51, 4.9),
    //   createData('Eclair', 262, 16.0, 24, 6.0),
    //   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    //   createData('Gingerbread', 356, 16.0, 49, 3.9),
    //   createData('Honeycomb', 408, 3.2, 87, 6.5),
    //   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    //   createData('Jelly Bean', 375, 0.0, 94, 0.0),
    //   createData('KitKat', 518, 26.0, 65, 7.0),
    //   createData('Lollipop', 392, 0.2, 98, 0.0),
    //   createData('Marshmallow', 318, 0, 81, 2.0),
    //   createData('Nougat', 360, 19.0, 9, 37.0),
    //   createData('Oreo', 437, 18.0, 63, 4.0),
    // ],
    page: 0,
    rowsPerPage: 5,
  };

  handleRequestSort = (event, property) => {
    const orderBy = property;
    let order = 'desc';

    if (this.state.orderBy === property && this.state.order === 'desc') {
      order = 'asc';
    }

    this.setState({ order, orderBy });
  };

  handleSelectAllClick = event => {
    if (event.target.checked) {
      this.setState(state => ({ selected: state.data.map(n => n.id) }));
      return;
    }
    this.setState({ selected: [] });
  };

  handleClick = (event, id) => {
    const { selected } = this.state;
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    this.setState({ selected: newSelected });
  };

  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  };

  isSelected = id => this.state.selected.indexOf(id) !== -1;

  render() {
   
    const { classes, tableData } = this.props;
    console.log(this.props.tableData,'enchanced table');
    var data1 =tableData ? (
      tableData.map((eachrow) => {
        return (
          createData(eachrow.context.enquirer_first_name,eachrow.context.enquirer_last_name,eachrow.context.enquirer_email,eachrow.context.enquirer_phone_number,eachrow.context.student_current_city,eachrow.priority_label,eachrow.created_at)
        )
      })
    ) : ('')
    const { data, order, orderBy, selected, rowsPerPage, page } = this.state;

    return (
      <Paper className={classes.root}>
        <EnhancedTableToolbar numSelected={selected.length} from={this.props.from}/>
        <div className={classes.tableWrapper}>
          {data1 ? (
            <Table className={classes.table} aria-labelledby="tableTitle">
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={this.handleSelectAllClick}
              onRequestSort={this.handleRequestSort}
              rowCount={data1.length}
            />
            <TableBody>
                {stableSort(data1, getSorting(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map(n => {
                  const isSelected = this.isSelected(n.id);
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      aria-checked={isSelected}
                      tabIndex={-1}
                      key={n.id}
                    >

                      <TableCell align="center" component="th" scope="row" style={{whiteSpace:'nowrap'}}>
                        {n.FirstName}
                      </TableCell>
                      <TableCell align="center">{n.LastName}</TableCell>
                      <TableCell align="center"><a href={"mailto:"+n.Email} target="_top">{n.Email}</a></TableCell>
                      <TableCell align="center"><a href={"tel:"+n.MobileNumber}>{n.MobileNumber}</a></TableCell>
                      <TableCell align="center">{n.Location}</TableCell>
                      <TableCell align="center">{n.LeadPriority}</TableCell>
                      <TableCell align="center">{n.CreatedDate}</TableCell>
                    </TableRow>
                  );
                })}
              


            </TableBody>
          </Table>
          ) : ('')
          }
          
        </div>
        <TablePagination
          rowsPerPageOptions={[5, 10]}
          component="div"
          count={data1.length}
          rowsPerPage={rowsPerPage}
          page={page}
          backIconButtonProps={{
            'aria-label': 'Previous Page',
          }}
          nextIconButtonProps={{
            'aria-label': 'Next Page',
          }}
          onChangePage={this.handleChangePage}
          onChangeRowsPerPage={this.handleChangeRowsPerPage}
        />
      </Paper>
    );
  }
}

export default withStyles(styles)(EnhancedTable);
