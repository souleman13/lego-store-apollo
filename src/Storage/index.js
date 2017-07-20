/**
 * Created by Douglas on 7/9/2017.
 */

import { createStore, applyMiddleware } from 'redux';
import createEngine from 'redux-storage-engine-localstorage';
import storage from 'redux-storage';
import Reducers from '../Reducers';

const engine = createEngine('my-save-key');
const REDUX_DEVTOOLS = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(Reducers, REDUX_DEVTOOLS,(applyMiddleware(storage.createMiddleware(engine))))
const load = storage.createLoader(engine);
load(store);

export default store;