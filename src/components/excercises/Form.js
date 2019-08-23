import React, {useEffect} from 'react';
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import {muscles} from "../../store";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
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


const Form = ({onSubmit, exercise}) => {
    const classes = useStyles();

    const initialValues = exercise ? exercise : {
        title: '',
        description: '',
        muscles: ''
    };

    const [values, setValues] = React.useState(initialValues);

    useEffect(() => {
        setValues(initialValues)
    }, [initialValues]);

    const handleChange = ({target: {name, value}}) => {
        setValues({...values, [name]: value});
    };

    const handleSubmit = values => {
        onSubmit({
            ...values,
            id: values.title.toLowerCase().replace(/ /g, '-')
        });
        setValues({
            title: '',
            description: '',
            muscles: ''
        })
    };

    return (
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
            <br/>

            <Button onClick={handleSubmit} color="primary">
                Create
            </Button>
        </form>
    );
};

export default Form;
