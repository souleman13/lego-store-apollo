import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import TouchTapPlugin from 'react-tap-event-plugin'

import theme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import './index.css';



const Wrapped = (
    <MuiThemeProvider muiTheme={getMuiTheme(theme)}>
        <App />
    </MuiThemeProvider>
)

TouchTapPlugin();

ReactDOM.render(Wrapped, document.getElementById('root'));

registerServiceWorker();
