import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Fab from "@material-ui/core/Fab";
import makeStyles from "@material-ui/core/styles/makeStyles";
import AddIcon from '@material-ui/icons/Add';
import Form from "../Form";

const useStyles = makeStyles(theme => ({
    fab: {
        margin: theme.spacing(1),
    }
}));

const Create = ({onSubmit}) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };



    return (
        <div>
            <Fab onClick={handleClickOpen} aria-label="add" className={classes.fab}>
                <AddIcon />
            </Fab>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Create a New Exercise</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Please fill out the form below.
                    </DialogContentText>
                    <Form
                        onSubmit={onSubmit}
                    />
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default Create;
