import React from 'react';
import Grid from "@material-ui/core/Grid";
import LeftPane from "./LeftPane";
import RightPane from "./RightPane";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
    Paper: {
        padding: 20,
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 5,
        marginRight: 5,
        height: 'calc(100% - 62px)',
        overflowY: 'auto'
    },
    '@global': {
        'html, body, #root': {
            height: '100%'
        }
    },
    container: {
        height: 'calc(100% - 64px - 69px)'
    }
}));

const Index = ({
                   exercises,
                   category,
                   onExerciseSelect,
                   exercise,
                   onExerciseDelete,
                   onExerciseEdit,
                   editMode,
                   onExerciseSubmit
}) => {
    const classes = useStyles();
    return (
        <Grid container className={classes.container}>
            <LeftPane
                onDelete={onExerciseDelete}
                onEdit={onExerciseEdit}
                category={category}
                classes={classes}
                exercises={exercises}
                onSelect={onExerciseSelect}
            />
            <RightPane
                category={category}
                classes={classes}
                exercises={exercises}
                exercise={exercise}
                editMode={editMode}
                onSubmit={onExerciseSubmit}
            />
        </Grid>
    );
};

export default Index;
