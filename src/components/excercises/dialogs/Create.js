import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Fab from "@material-ui/core/Fab";
import makeStyles from "@material-ui/core/styles/makeStyles";
import AddIcon from '@material-ui/icons/Add';
import FormControl from "@material-ui/core/FormControl/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import {muscles} from "../../../store";

const useStyles = makeStyles(theme => ({
    fab: {
        margin: theme.spacing(1),
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 500,
    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 200,
    },
    formControl: {
        margin: theme.spacing(1),
        width: 500,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

const Create = ({onCreate}) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [values, setValues] = React.useState({
        title: '',
        description: '',
        muscles: ''
    });

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = ({target: {name, value}}) => {
        setValues({...values, [name]: value});
    };

    const handleSubmit = () => {
        onCreate({
            ...values,
            id: values.title.toLowerCase().replace(/ /g, '-')
        });
        handleClose();
        setValues({
            title: '',
            description: '',
            muscles: ''
        })
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
                    <form className={classes.root}>
                        <TextField
                            label="Title"
                            className={classes.textField}
                            value={values.title}
                            name={'title'}
                            onChange={handleChange}
                            margin="normal"
                        />
                        <br/>
                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="muscles-select">Muscles</InputLabel>
                            <Select
                                value={values.muscles}
                                onChange={handleChange}
                                inputProps={{
                                    id: 'muscles-select',
                                    name: 'muscles'
                                }}
                            >
                                {muscles.map((category, index) =>
                                    <MenuItem value={category} key={index}>{category}</MenuItem>
                                )}

                            </Select>
                        </FormControl>
                        <br/>
                        <TextField
                            label="Description"
                            className={classes.textField}
                            multiline
                            rowsMax="4"
                            value={values.description}
                            name={'description'}
                            onChange={handleChange}
                            margin="normal"
                        />
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleSubmit} color="primary">
                        Create
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default Create;
