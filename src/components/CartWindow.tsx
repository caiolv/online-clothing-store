import React, { Component } from 'react';

import CartProduct from './CartProduct';

type IsOpen = {
    isOpen: boolean;
};

export default class CartWindow extends Component<IsOpen> {
    render() {
        return (
            <div id="cart-window" style={
                this.props.isOpen ? {
                    visibility: 'visible',
                    opacity: 1
                } : {
                    visibility: 'visible',
                    opacity: 0
                }
            }>
                <strong>My bag, </strong> 2 items
                <CartProduct />
                <CartProduct />
                <CartProduct />
            </div>
        )
    }
}
