/**
 * Created by Douglas on 7/9/2017.
 */
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const CLEAR_CART = 'CLEAR_CART';
export const QUANTITY_CHANGE = 'QUANTITY_CHANGE';


export default {

    addToCart(item = {}, quantity = 0) {
        return {
            type: ADD_TO_CART,
            item,
            quantity,
        };
    },

    removeFromCart(item = {}) {
        return {
            type: REMOVE_FROM_CART,
            item,
        };
    },

    clearCart() {
        return {
            type: CLEAR_CART,
        };
    },

    quantityChange(item = {}, quantity = 0) {
        return {
            type: QUANTITY_CHANGE,
            item,
            quantity,
        }
    }
};