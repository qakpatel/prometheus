import React, { Component } from 'react';
import SMSContainer from './../../Common/components/container';
import { Grid, Button, Box , withStyles } from '@material-ui/core';
import { Add as AddIcon } from '@material-ui/icons';
import Lang from './../../../Lang/en';
import SimpleSelect from './../../Common/components/simpleselect';
import grades from './../constants/grades.json';
import form_types from './../constants/form_types.json';

const style = {
    gridLeftCenter:{
        
    },
    leftIcon:{
        margin:"2px"
    }
}
 
class Subheader extends Component {

    state = {
        grade : '',
        plan : ''
    }

    onFilterStateManager = (LABELS, param, onFilterChange) => {
        switch (param.label) {
            case LABELS.SELECT_GRADE:
                this.setState({
                    grade: param.value
                })
                onFilterChange({
                    grade: param.value,
                    plan: this.state.plan
                });
                break;
            case LABELS.SELECT_PLAN:
                this.setState({
                    plan: param.value
                })
                onFilterChange({
                    grade: this.state.grade,
                    plan: param.value
                });
                break;
        }
    }

    render(){
        const {
            classes,
            onAddNewBtnClickHandler,
            onFilterChange
        } = this.props;

        const { LABELS } = Lang; 
        // const GradeOptions = [
        //     LABELS.DROP_DOWN.GRADE_NURSERY, 
        //     LABELS.DROP_DOWN.GRADE_PREK,
        //     LABELS.DROP_DOWN.GRADE_1,
        //     LABELS.DROP_DOWN.GRADE_2,
        //     LABELS.DROP_DOWN.GRADE_3,
        //     LABELS.DROP_DOWN.GRADE_4,
        //     LABELS.DROP_DOWN.GRADE_5
        //   ];
        const GradeOptions = grades.map(el => el.value);
        // const PlanOptions = [
        //     LABELS.DROP_DOWN.UNIT_PLAN,
        //     LABELS.DROP_DOWN.WEEKLY_PLAN
        // ];
        const PlanOptions = form_types.map(el => el.value);


        return (
            <SMSContainer>
                <Grid 
                    container 
                    spacing={0}  
                    justify="center"
                    alignItems="center">

                    <Grid item xs={12} sm={4}>
                            <SimpleSelect 
                                options={GradeOptions}
                                title={LABELS.DROP_DOWN.SELECT_GRADE}
                                onSelectChange={(param) => this.onFilterStateManager(LABELS.DROP_DOWN, param, onFilterChange)}
                                displayNon={true}
                                isArrayOfObject={false}
                                required={false}/>
                    </Grid>
                    <Grid item xs={12} sm={4}> 
                            <SimpleSelect
                                options={PlanOptions}
                                title={LABELS.DROP_DOWN.SELECT_PLAN}
                                onSelectChange={(param) => this.onFilterStateManager(LABELS.DROP_DOWN, param, onFilterChange)}/>        
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Box className={classes.gridLeftCenter}>
                            <Button 
                                variant="contained" 
                                color="primary" 
                                size="large"
                                onClick={onAddNewBtnClickHandler}
                                >
                                <AddIcon className={classes.leftIcon}/>
                                Add New
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </SMSContainer>
        );
    }
}

export default withStyles(style)(Subheader);