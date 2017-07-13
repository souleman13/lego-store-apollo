/**
 * Created by Douglas on 7/9/2017.
 */

import { createStore } from 'redux';

import Reducers from '../Reducers';

const REDUX_DEVTOOLS = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export default createStore(Reducers, REDUX_DEVTOOLS);