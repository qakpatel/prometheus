import React , { Component } from 'react';
import Lang from '../../../../Lang/en';
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

class ReflectingForm extends Component {
    render(){
        const { classes , onChangeHandler } = this.props;
        const { LABELS } = Lang;
        return (
            <div>
                <Container>
                    <form className={classes.container} noValidate autoComplete="off">
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Typography>
                                    {LABELS.REFLECTING_FORM.TEACHER_REFLECTION}
                                </Typography>
                                <TextareaAutosize 
                                    aria-label="minimum height" 
                                    rows={3}                                     
                                    placeholder=""
                                    onChange={onChangeHandler('teacher_reflection')}
                                    className={classes.textarea}/>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography>
                                    {LABELS.REFLECTING_FORM.STUDENT_REFLECTION}
                                </Typography>
                                <TextareaAutosize 
                                    aria-label="minimum height" 
                                    rows={3} 
                                    placeholder=""
                                    onChange={onChangeHandler('student_reflection')}
                                    className={classes.textarea}/>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography>
                                    {LABELS.REFLECTING_FORM.ASSESSMENT_REFLECTIONS}
                                </Typography>
                                <TextareaAutosize 
                                    aria-label="minimum height" 
                                    rows={3} 
                                    placeholder=""
                                    onChange={onChangeHandler('assessment_reflections')}
                                    className={classes.textarea}/>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography>
                                    {LABELS.REFLECTING_FORM.NOTES}
                                </Typography>
                                <TextareaAutosize 
                                    aria-label="minimum height" 
                                    rows={3} 
                                    placeholder=""
                                    onChange={onChangeHandler('notes')}
                                    className={classes.textarea}/>
                            </Grid>
                        </Grid>
                    </form>
                </Container>
            </div>
        );
    }
}

export default  withStyles(style)(ReflectingForm);