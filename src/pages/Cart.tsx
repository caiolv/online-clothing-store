import React, { Component } from 'react';

import product from '../images/product.png';

export default class Cart extends Component {
    render() {
        return (
            <section id="cart">
                <h1>Cart</h1>
                <div className="product">
                    <div className="left">
                        <p className="product-title">Apollo</p>
                        <p className="product-subtitle">Running Short</p>
                        <b className="price">$50.00</b>

                        <div className="sizes">
                            <button type="button">S</button>
                            <button type="button" className="selected">M</button>
                        </div>

                    </div>
                    <div className="right">
                        <div className="amount">
                            <button type="button">+</button>
                            <span>1</span>
                            <button type="button">-</button>
                        </div>
                        <img src={product} />
                    </div>
                </div>
            </section >
        )
    }
}
