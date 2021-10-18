import React, { Component } from 'react';

import cartWhite from "../images/cart_white.svg";

interface Props {
    product: {
        name: string;
        inStock: boolean;
        gallery: string[];
        description: string;
        category: string;
    }
}

export default class ProductCard extends Component<Props> {
    render() {
        const { product } = this.props;
        return (
            <div id="product-card">
                <img src={product.gallery[0]} alt="Product description" />
                <p>{product.name}</p>
                <strong>$50.00</strong>
                <div>
                    <img src={cartWhite} alt="Cart" />
                </div>
            </div>
        )
    }
}
