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

class DesignAndImplementationForm extends Component {

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
                                    {LABELS.DESIGNING_AND_IMPLEMENTING_FORM.DESIGNING_ENGAGING_LEARNING_EXPERIENCES}
                                </Typography>
                                <TextareaAutosize 
                                    aria-label="minimum height" 
                                    rows={3}                                     
                                    placeholder=""
                                    onChange={onChangeHandler('designing_engaging_learning_experiences')}
                                    className={classes.textarea}/>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography>
                                    {LABELS.DESIGNING_AND_IMPLEMENTING_FORM.SUPPORTING_STUDENT_AGENCY}
                                </Typography>
                                <TextareaAutosize 
                                    aria-label="minimum height" 
                                    rows={3} 
                                    placeholder=""
                                    onChange={onChangeHandler('supporting_student_agency')}
                                    className={classes.textarea}/>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography>
                                    {LABELS.DESIGNING_AND_IMPLEMENTING_FORM.TEACHER_AND_STUDENT_QUESTION}
                                </Typography>
                                <TextareaAutosize 
                                    aria-label="minimum height" 
                                    rows={3} 
                                    placeholder=""
                                    onChange={onChangeHandler('teachser_and_student_question')}
                                    className={classes.textarea}/>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography>
                                    {LABELS.DESIGNING_AND_IMPLEMENTING_FORM.ONGOING_ASSESSMENT}
                                </Typography>
                                <TextareaAutosize 
                                    aria-label="minimum height" 
                                    rows={3} 
                                    placeholder=""
                                    onChange={onChangeHandler('ongoing_Assessment')}
                                    className={classes.textarea}/>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography>
                                    {LABELS.DESIGNING_AND_IMPLEMENTING_FORM.MAKING_FLEXIBLE_USE_FOR_RESOURCES}
                                </Typography>
                                <TextareaAutosize 
                                    aria-label="minimum height" 
                                    rows={3} 
                                    placeholder=""
                                    onChange={onChangeHandler('making_flexible_use_for_resources')}
                                    className={classes.textarea}/>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography>
                                    {LABELS.DESIGNING_AND_IMPLEMENTING_FORM.ONGOING_REFLECTION_FOR_ALL_TEACHERS}
                                </Typography>
                                <TextareaAutosize 
                                    aria-label="minimum height" 
                                    rows={3} 
                                    placeholder=""
                                    onChange={onChangeHandler('ongoing_reflection_for_all_teachers')}
                                    className={classes.textarea}/>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography>
                                    {LABELS.DESIGNING_AND_IMPLEMENTING_FORM.ADDITIONAL_SUBJECT_SPECIFIC_REFLECTIONl}
                                </Typography>
                                <TextareaAutosize 
                                    aria-label="minimum height" 
                                    rows={3} 
                                    placeholder=""
                                    onChange={onChangeHandler('addtional_subject_specific_reflection')}
                                    className={classes.textarea}/>
                            </Grid>
                        </Grid>
                    </form>
                </Container>
            </div>
        );
    }
}

export default withStyles(style)(DesignAndImplementationForm);