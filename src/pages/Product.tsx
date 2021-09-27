import React, { Component } from 'react';

import Button from '../components/Button';

import product from '../images/product.png';

export default class Product extends Component {
    render() {
        return (
            <section id="product">
                <div className="preview-images">
                    <img src={product} alt="product" />
                    <img src={product} alt="product" />
                    <img src={product} alt="product" />
                </div>

                <img className="preview" src={product} width="" height="80" alt="product" />

                <main>
                    <h1>Apollo</h1>
                    <h2>Running Short</h2>

                    <span>Size: </span>
                    <div className="sizes">
                        <button type="button" disabled>XS</button>
                        <button type="button" className="selected">S</button>
                        <button type="button">M</button>
                        <button type="button">L</button>
                    </div>

                    <span>Price:</span>
                    <b>$50.00</b>

                    <Button>Add to cart</Button>

                    <p>Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.</p>
                </main>
            </section>
        )
    }
}
