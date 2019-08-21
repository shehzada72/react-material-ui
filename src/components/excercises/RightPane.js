import React from 'react';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const RightPane = ({styles, exercise: {id, title = 'Welcome!', description = 'Please select an exercise from the list'}}) => {
    return (
        <Grid item sm>
            <Paper style={styles.Paper}>
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
            </Paper>
        </Grid>
    );
};

export default RightPane;