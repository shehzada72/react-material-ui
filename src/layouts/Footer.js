import React from 'react';
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
});


const Footer = ({muscles, category, onSelect}) => {
    const classes = useStyles();

    const index = category ? muscles.findIndex(group => group === category) + 1 : 0;

    const handleChange = (e, index) => {
        onSelect( index === 0 ? '' : muscles[index - 1])
    };

    return (
        <Paper className={classes.root}>
            <Tabs
                value={index}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                centered
            >
                <Tab label={'All'} />
                {muscles.map((muscle, index) => (
                    <Tab key={index} label={muscle} />
                ))}

            </Tabs>
        </Paper>
    );
};

export default Footer;