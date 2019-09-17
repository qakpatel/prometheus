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

class OverviewForm extends Component {

    state = {

    }

    render(){
        const { classes, onChangeHandler } = this.props;
        const { LABELS } = Lang;
        return (
            <div>
                <Container>
                    <form className={classes.container} noValidate autoComplete="off">
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
                                    <TextField
                                        id="outlined-name"
                                        label={LABELS.OVERVIEW_FORM.TITLE}
                                        className={classes.textField}
                                        onChange={onChangeHandler('title')}
                                        fullWidth
                                        margin="normal"
                                        variant="outlined"
                                    />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                    <TextField
                                        id="outlined-name"
                                        label={LABELS.OVERVIEW_FORM.GRADE}
                                        className={classes.textField}
                                        onChange={onChangeHandler('grade')}
                                        InputProps={{
                                            readOnly: true,
                                          }}
                                        fullWidth
                                        margin="normal"
                                        variant="outlined"
                                    />  
                            </Grid>
                            <Grid item xs={12}>
                                <Typography>
                                    {LABELS.OVERVIEW_FORM.TIMELINE}
                                </Typography>
                                <TextareaAutosize 
                                    aria-label="minimum height" 
                                    rows={3}                                     
                                    placeholder=""
                                    onChange={onChangeHandler('timeline')}
                                    className={classes.textarea}/>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography>
                                    {LABELS.OVERVIEW_FORM.Transdisciplinary_THEME}
                                </Typography>
                                <TextareaAutosize 
                                    aria-label="minimum height" 
                                    rows={3} 
                                    placeholder=""
                                    onChange={onChangeHandler('transdisciplinary_theme')}
                                    className={classes.textarea}/>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography>
                                    {LABELS.OVERVIEW_FORM.CENTRAL_IDEA}
                                </Typography>
                                <TextareaAutosize 
                                    aria-label="minimum height" 
                                    rows={3} 
                                    placeholder=""
                                    onChange={onChangeHandler('central_idea')}
                                    className={classes.textarea}/>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography>
                                    {LABELS.OVERVIEW_FORM.LINE_OF_ENQUIRY}
                                </Typography>
                                <TextareaAutosize 
                                    aria-label="minimum height" 
                                    rows={3} 
                                    placeholder=""
                                    onChange={onChangeHandler('lines_of_enquiry')}
                                    className={classes.textarea}/>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography>
                                    {LABELS.OVERVIEW_FORM.KEY_CONCEPT}
                                </Typography>
                                <TextareaAutosize 
                                    aria-label="minimum height" 
                                    rows={3} 
                                    placeholder=""
                                    onChange={onChangeHandler('key_concepts')}
                                    className={classes.textarea}/>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography>
                                    {LABELS.OVERVIEW_FORM.RELATED_CONCEPTS}
                                </Typography>
                                <TextareaAutosize 
                                    aria-label="minimum height" 
                                    rows={3} 
                                    placeholder=""
                                    onChange={onChangeHandler('related_concepts')}
                                    className={classes.textarea}/>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography>
                                    {LABELS.OVERVIEW_FORM.LEARNER_PROFILE_ATTRIBUTES}
                                </Typography>
                                <TextareaAutosize 
                                    aria-label="minimum height" 
                                    rows={3} 
                                    placeholder=""
                                    onChange={onChangeHandler('learner_profile_attributes')}
                                    className={classes.textarea}/>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography>
                                    {LABELS.OVERVIEW_FORM.APPROACHES_TO_LEARNING}
                                </Typography>
                                <TextareaAutosize 
                                    aria-label="minimum height" 
                                    rows={3} 
                                    placeholder=""
                                    onChange={onChangeHandler('approaches_to_learning')}
                                    className={classes.textarea}/>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography>
                                    {LABELS.OVERVIEW_FORM.ACTION}
                                </Typography>
                                <TextareaAutosize 
                                    aria-label="minimum height" 
                                    rows={3} 
                                    placeholder=""
                                    onChange={onChangeHandler('action')}
                                    className={classes.textarea}/>
                            </Grid>
                        </Grid>
                    </form>
                </Container>
            </div>
        )
    }
}

export default withStyles(style)(OverviewForm);