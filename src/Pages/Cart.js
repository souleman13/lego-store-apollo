/**
 * Created by Douglas on 7/10/2017.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import Actions from '../Actions'
import {bindActionCreators} from 'redux'


class Cart extends Component {

    onQuantityChange = (e, item) => {
        this.props.actions.quantityChange(item, e.target.value);
        this.forceUpdate();
    };

    render() {

        const sub = this.props.cart.map(i => i.price * i.quantity).reduce((prev, current) => prev + current, 0);
        const tax = sub * 0.065;
        const total = tax + sub;

        return (

            <form>
                <h1>Cart</h1>

                <table cellPadding="5" cellSpacing="5">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Total</th>
                    </tr>
                    </thead>
                    <tbody>
                    { this.props.cart.map(item => {
                        return (
                            <tr key={item.name}>
                                <td>{item.name}</td>
                                <td><input name="cartQuantity"
                                           type="number"
                                           min={0}
                                           value={item.quantity}
                                           onChange={e => this.onQuantityChange(e, item)}
                                />
                                </td>
                                <td>$ {item.price}</td>
                                <td>$ {item.quantity * item.price}</td>
                                <td>
                                    <button
                                        type="reset"
                                        width={25}
                                        onClick={e => this.props.actions.removeFromCart(item)}>Remove
                                    </button>
                                </td>
                            </tr>
                        );
                    })}

                    </tbody>
                </table>

                <div>
                    <strong>Subtotal:</strong> $ {sub}
                </div>
                <div>
                    <strong>Tax:</strong> $ {tax}
                </div>
                <div>
                    <strong>Total:</strong> $ {total}
                </div>

                <button type="reset" width={50} onClick={e => this.props.actions.clearCart()}> Clear Cart</button>

            </form>

        );
    }

}

export default connect(state => ({
        cart: state.cart,

    }),
    dispatch => ({
        actions: bindActionCreators(Actions, dispatch)
    }),
)(Cart);
