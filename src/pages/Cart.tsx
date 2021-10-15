import React, { Component } from 'react';

import CartProduct from '../components/CartProduct';

export default class Cart extends Component {
    render() {
        return (
            <section id="cart">
                <h1>Cart</h1>
                <CartProduct />
            </section >
        )
    }
}
