import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core';
import {pink} from "@material-ui/core/colors";

const theme = createMuiTheme({
    palette: {
        primary: pink
    }
});


ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <App />
    </MuiThemeProvider>
    , document.getElementById('root'));
