import React, { Component } from "react";
import { connect } from "react-redux";
import TabPanel from "./../Common/components/tabPanel";
import SMSContainer from "./../Common/components/container";
import OverviewForm from "./components/forms/overviewForm";
import ReflectionAndPlanningForm from "./components/forms/refAndPlanForm";
import DesigningAndImplementingForm from "./components/forms/designAndImplForm";
import UnitPlansTable from "./components/unitPlansTable";
import ReflectingForm from "./components/forms/reflectingForm";
import Subheader from "./components/subheader";
import { getUnitPlansData , deleteUnitPlanById } from "./redux/Action";
import Lang from "./../../Lang/en";
import { style } from "./style/style";

import {
  Tabs,
  Tab,
  Grid,
  Button,
  Divider,
  withStyles
} from "@material-ui/core";
import {
  Save as SaveIcon,
  Visibility as VisibilityIcon,
  Done as DoneIcon
} from "@material-ui/icons";

class UnitPlanner extends Component {
  state = {
    activeTabIndex: 0,
    activeView: "",
    unitPlanFormData: [],
    filterContent: {},
    formData : {
        title:"",
    }
  };

  a11yProps = index => {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`
    };
  };

  handleTabChange = (event, activeTabIndex) => {
    this.setState({
      activeTabIndex
    });
  };

  getRequestedView = () => {

    const { activeTabIndex, activeView, unitPlanFormData } = this.state;
    const { LABELS } = Lang;
    const { classes } = this.props;

    switch (activeView) {
      case "unitplans":
        return <UnitPlansTable unitPlans={unitPlanFormData} />;
      case "newplan":
        return (
          <SMSContainer>
            {this.getActionButtonBar(LABELS, classes)}
            <Divider className={classes.Divider} />
            <Tabs
              value={activeTabIndex}
              indicatorColor="primary"
              onChange={this.handleTabChange}
              aria-label="simple tabs example"
            >
              <Tab label="OVERVIEW" {...this.a11yProps(0)} />
              <Tab label="REFLECTING AND PLANNING" {...this.a11yProps(1)} />
              <Tab label="DESIGINING AND IMPLEMENTING" {...this.a11yProps(2)} />
              <Tab label="REFLECTING" {...this.a11yProps(3)} />
            </Tabs>
            <TabPanel value={activeTabIndex} index={0}>
              <OverviewForm onChangeHandler={this.onFormChange}/>
            </TabPanel>
            <TabPanel value={activeTabIndex} index={1}>
              <ReflectionAndPlanningForm onChangeHandler={this.onFormChange}/>
            </TabPanel>
            <TabPanel value={activeTabIndex} index={2}>
              <DesigningAndImplementingForm onChangeHandler={this.onFormChange}/>
            </TabPanel>
            <TabPanel value={activeTabIndex} index={3}>
              <ReflectingForm onChangeHandler={this.onFormChange}/>
            </TabPanel>
            <Divider className={classes.Divider} />
            {this.getActionButtonBar(LABELS, classes)}
          </SMSContainer>
        );
    }
  };

  onAddNewButtonHandler = () => {
    this.setState({ activeView: "newplan" });
  };

  onFilterChangeHandler = param => {
    if(this.state.activeView !== "newplan"){
        this.props
      .getUnitPlansData(param)
      .then(response =>
        this.setState({
            activeView: "unitplans",
          unitPlanFormData: response
        })
      )
      .catch(er => console.log("error :", er))
    }
    
  };

  onFormChange = field => evt =>{
      console.log("field : " , field , "evt : ",evt.target.value)
  };

  onSubmitUnitPlanForm = () => {};

  render() {
    //console.log('Unit plans from props : ',data)
    return (
      <>
        <Subheader
          onFilterChange={this.onFilterChangeHandler}
          onAddNewBtnClickHandler={this.onAddNewButtonHandler}
        />
        {this.getRequestedView()}
      </>
    );
  }

  getActionButtonBar = (LABELS, classes) => {
    return (
      <Grid container justify="left" alignItems="left" spacing={1}>
        <Grid item>
          <Button variant="contained" color="primary" size="medium">
            <VisibilityIcon className={classes.leftIcon} />
            {LABELS.BUTTONS.VIEW_PDF}
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary" size="medium">
            <SaveIcon className={classes.leftIcon} />
            {LABELS.BUTTONS.SAVE_DRAFT}
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="secondary"
            size="medium"
            onClick={this.onSubmitUnitPlanForm}
          >
            <DoneIcon className={classes.leftIcon} />
            {LABELS.BUTTONS.SUBMIT}
          </Button>
        </Grid>
      </Grid>
    );
  };
}

const mapStateToProps = state => {
  console.log("Inside map state to prop : ", state);
  return {
    data: state.unitPlan
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUnitPlansData: param => dispatch(getUnitPlansData(param)),
    deleteUnitPlanById: param => dispatch(deleteUnitPlanById(param))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(style)(UnitPlanner));
