/**
 * Created by Douglas on 7/10/2017.
 */
import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    CLEAR_CART,
    QUANTITY_CHANGE,
} from '../Actions';


export default (state = [], action = {}) => {
    switch (action.type) {

        case ADD_TO_CART :
            const {item, quantity} = action;
            if (state.some(c => c.name === item.name)) {
                state.map(c => {
                    if (c.name !== item.name) return c;
                    c.quantity = parseInt(c.quantity) + parseInt(quantity);
                    return c;
                });
                return state;
            }


            return [
                ...state,
                {
                    ...item,
                    quantity,
                },
            ];

        case REMOVE_FROM_CART :
            return state.filter(i => i.name !== action.item.name);

        case CLEAR_CART:
            return [];

        case QUANTITY_CHANGE :
            state.map(c => {
                if (c.name !== action.item.name) return c;
                c.quantity = action.quantity;
                return c;
            }); return state;


        default :
            return state;
    }
};