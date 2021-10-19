import React, { Component } from 'react';

import cartWhite from "../images/cart_white.svg";

import { IProductData } from '../types/product.type';

interface Props {
    product: IProductData,
}

export default class ProductCard extends Component<Props> {
    render() {
        const { product } = this.props;
        return (
            <div id="product-card">
                <img src={product.gallery[0]} alt="Product description" />
                <p>{product.name}</p>
                <strong>$ {product.price.amount}</strong>
                <div>
                    <img src={cartWhite} alt="Cart" />
                </div>
            </div>
        )
    }
}
