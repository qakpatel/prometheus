import React , { Component } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const style = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    marginTop: "15px",
    width: "100%",
  },
  selectEmpty: {
    marginTop: "2px",
  },
};

class SimpleSelect extends Component {
  
  state = {
    value : ''
  }

  handleChangeForArrayOfObj = (evt) => {
    console.log("handleChangeForArrayOfObj", evt.target.value);
    this.setState({value : evt.target.value});
    this.props.onSelectChange(this.props.jsonkeyName , evt.target.value);
  }

  handleChange = evt => {
    this.setState({ label: this.props.jsonkeyName, value: evt.target.value });
    this.props.onSelectChange(this.props.jsonkeyName, evt.target.value);
  };

  // handleChange = evt => {
  //   this.setState({ value: evt.target.value });
  //   this.props.onSelectChange({
  //     label: this.props.title,
  //     value: evt.target.value
  //   });
  // };

  render(){

    const { classes , options , title, required, displayNone, isArrayOfObject, optionLabel, optionValue} = this.props;
    const { value } = this.state;
    return (
      <form className={classes.root} autoComplete="off">
      <FormControl className={classes.formControl}>
      <InputLabel ref={this.inputLabel} htmlFor="outlined-age-simple" required={required} margin="normal  ">
        {title}
      </InputLabel>
      <Select
        value={value}
        onChange={isArrayOfObject ? this.handleChangeForArrayOfObj : this.handleChange}
        inputProps={{
          name: "age",
          id: "outlined-age-simple"
        }}
      >
       { displayNone && 
       <MenuItem value="">
          <em>None</em>
        </MenuItem>
       }
        {isArrayOfObject ? (
          options.map((option,index) => {
            return <MenuItem value={option[optionLabel]} key={index}>{option[optionValue]}</MenuItem>
          })) : (
            options.map((option,index) => {
              return <MenuItem value={option} key={index}>{option}</MenuItem>
            }))
        }
  
      </Select>
    </FormControl>
      </form>
    );
  }
}

export default withStyles(style)(SimpleSelect);
