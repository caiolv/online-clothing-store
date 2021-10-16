import React, { Component } from 'react';

import CartProduct from './CartProduct';

type IsOpen = {
    isOpen: boolean;
};

export default class CartWindow extends Component<IsOpen> {
    render() {
        return (
            <div 
                id="cart-window"
                className={ this.props.isOpen
                                ? "visible one-opacity" 
                                : "hidden zero-opacity"
                }
            >
                <strong>My bag, </strong> 2 items
                <CartProduct />
                <CartProduct />
                <CartProduct />
                
            </div>
        )
    }
}
