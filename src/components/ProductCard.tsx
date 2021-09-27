import React, { Component } from 'react';

import product from '../images/product.png';

import cartWhite from "../images/cart_white.svg";

export default class ProductCard extends Component {
    render() {
        return (
            <div id="product-card">
                <img src={product} alt="Product description" />
                <p>Apollo Running Short</p>
                <strong>$50.00</strong>
                <div>
                    <img src={cartWhite} alt="Cart" />
                </div>
            </div>
        )
    }
}