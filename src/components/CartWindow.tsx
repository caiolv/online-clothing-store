import React, { Component } from 'react';

import CartProduct from './CartProduct';

export default class CartWindow extends Component {
    render() {
        return (
            <div id="cart-window">
                <strong>My bag, </strong> 2 items
                <CartProduct />
                <CartProduct />
                <CartProduct />
            </div>
        )
    }
}
