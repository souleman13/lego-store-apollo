/**
 * Created by Douglas on 7/9/2017.
 */

import { combineReducers } from 'redux';

import cart from './cart';
import items from './items';


export default combineReducers({
    cart,
    items
});