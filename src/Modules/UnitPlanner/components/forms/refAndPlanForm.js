import React , { Component } from 'react';
import Lang from './../../../../Lang/en';
import style from './_style';
import {
    Container,
    Grid,
    TextField,
    TextareaAutosize,
    withStyles,
    Typography,
    Button
} from '@material-ui/core';

class ReflectionAndPlanningForm extends Component {

    render(){
        const { classes , onChangeHandler } = this.props;
        const { LABELS } = Lang;
        return(
            <div>
                <Container>
                    <form className={classes.container} noValidate autoComplete="off">
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Typography>
                                    {LABELS.REFLECTION_AND_PLANNING_FORM.INITIAL_REFLECTION}
                                </Typography>
                                <TextareaAutosize 
                                    aria-label="minimum height" 
                                    rows={3}                                     
                                    placeholder=""
                                    onChange={onChangeHandler('initial_reflection')}
                                    className={classes.textarea}/>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography>
                                    {LABELS.REFLECTION_AND_PLANNING_FORM.PRIOR_LEARNING}
                                </Typography>
                                <TextareaAutosize 
                                    aria-label="minimum height" 
                                    rows={3} 
                                    placeholder=""
                                    onChange={onChangeHandler('prior_learning')}
                                    className={classes.textarea}/>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography>
                                    {LABELS.REFLECTION_AND_PLANNING_FORM.CONNECTIONS_TRANSDISCIPLINARY_AND_PAST}
                                </Typography>
                                <TextareaAutosize 
                                    aria-label="minimum height" 
                                    rows={3} 
                                    placeholder=""
                                    onChange={onChangeHandler('connections_transdisciplinary_and_past')}
                                    className={classes.textarea}/>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography>
                                    {LABELS.REFLECTION_AND_PLANNING_FORM.LEARNING_GOALS_AND_SUCCESS_CRITERIA}
                                </Typography>
                                <TextareaAutosize 
                                    aria-label="minimum height" 
                                    rows={3} 
                                    placeholder=""
                                    onChange={onChangeHandler('learning_goals_and_success_criteria')}
                                    className={classes.textarea}/>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography>
                                    {LABELS.REFLECTION_AND_PLANNING_FORM.TEACHER_QUESTION}
                                </Typography>
                                <TextareaAutosize 
                                    aria-label="minimum height" 
                                    rows={3} 
                                    placeholder=""
                                    onChange={onChangeHandler('teacher_question')}
                                    className={classes.textarea}/>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography>
                                    {LABELS.REFLECTION_AND_PLANNING_FORM.STUDENT_QUESTION}
                                </Typography>
                                <TextareaAutosize 
                                    aria-label="minimum height" 
                                    rows={3} 
                                    placeholder=""
                                    onChange={onChangeHandler('student_question')}
                                    className={classes.textarea}/>
                            </Grid>
                        </Grid>
                    </form>
                </Container>
            </div>
        );
    }
}

export default withStyles(style)(ReflectionAndPlanningForm);