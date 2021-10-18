import React, { Component } from 'react';

import { client } from '../service/client';
import { LOAD_CATEGORIES } from '../GraphQL/Queries';

import ProductCard from '../components/ProductCard';

export default class Category extends Component {
    state = {
        // category: [],
        products: []
    }

    componentDidMount() {
        client.query({
            query: LOAD_CATEGORIES
        }).then(({ data, loading }) => this.setState({
            products: data.category.products
        }));
    }

    render() {
        console.log(this.state.products)
        return (
            <section id="category">
                <h2>Category name</h2>
                <ul>
                    {
                        this.state.products.map(product => (
                            <ProductCard product={product} />
                        ))
                    }
                    {/* <ProductCard product={this.state.category.product[0]} />
                    <ProductCard product={this.state.category.product[0]} />
                    <ProductCard product={this.state.category.product[0]} />
                    <ProductCard product={this.state.category.product[0]} />
                    <ProductCard product={this.state.category.product[0]} />
                    <ProductCard product={this.state.category.product[0]} />
                    <ProductCard product={this.state.category.product[0]} />
                    <ProductCard product={this.state.category.product[0]} />
                    <ProductCard product={this.state.category.product[0]} /> */}
                </ul>
            </section>
        )
    }
}
