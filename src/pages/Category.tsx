import React, { Component } from 'react';

import ProductCard from '../components/ProductCard';

export default class Category extends Component {
    render() {
        return (
            <section id="category">
                <h2>Category name</h2>
                <main>
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </main>
            </section>
        )
    }
}
