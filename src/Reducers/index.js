/**
 * Created by Douglas on 7/9/2017.
 */

import { combineReducers } from 'redux';
import storage from 'redux-storage';

import cart from './cart';
import items from './items';



export default storage.reducer(combineReducers({
    cart,
    items
}));