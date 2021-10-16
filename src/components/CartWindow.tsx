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
                className={ 
                    this.props.isOpen
                        ? "visible one-opacity" 
                        : "hidden zero-opacity"
                }
            >
                <strong>My bag, </strong> 2 items
                <CartProduct />
                <CartProduct />

                <div className="total">
                    <strong>Total</strong>
                    <b>$ 100.00</b>
                </div>

                <div className="btn-group">
                    <button className="button button-secondary">
                        View bag
                    </button>
                    <button className="button">
                        Checkout
                    </button>
                </div>
            </div>
        )
    }
}
