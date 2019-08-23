import React from 'react';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Form from "./Form";

const RightPane = ({styles, exercise, exercise: {id, title = 'Welcome!', description = 'Please select an exercise from the list'}, editMode}) => {
    return (
        <Grid item sm>
            <Paper style={styles.Paper}>
                {editMode ?
                    <Form
                        exercise={exercise}
                    /> :
                    <>
                        <Typography
                            variant={'h5'}
                        >
                            {title}
                        </Typography>
                        <Typography
                            variant={'subtitle1'}
                            style={{marginTop: 20}}
                        >
                            {description}
                        </Typography>
                    </>
                }
            </Paper>
        </Grid>
    );
};

export default RightPane;
