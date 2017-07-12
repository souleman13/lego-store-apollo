/**
 * Created by Douglas on 7/9/2017.
 */
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const CLEAR_CART = 'CLEAR_CART';


export default {

    addToCart(item = {}, quantity = 0) {
        return {
            type: ADD_TO_CART,
            item,
            quantity,
        };
    },

    removeFromCart(item = {}, quantity = 0) {
        return {
            type: REMOVE_FROM_CART,
            item,
            quantity,
        };
    },

    clearCart() {
        return {
            type: CLEAR_CART,
        };
    },

};