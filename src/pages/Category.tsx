import React, { Component } from 'react';
import { withRouter, RouteComponentProps } from "react-router";

import { client } from '../service/client';
import { LOAD_CATEGORY } from '../GraphQL/Queries';

import ProductCard from '../components/ProductCard';

class Category extends Component<RouteComponentProps<any>> {
    state = {
        products: [],
        page: "",
    }

    fetchProducts = () => {
        const { category } = this.props.match.params;
        this.setState({ page: category });
        client.query({
            query: LOAD_CATEGORY,
            variables: {
                category: category
            }
        }).then(({ data, loading }) => this.setState({
            products: data.category.products
        }));
    }

    componentDidMount() {
        this.fetchProducts();
    }

    componentDidUpdate() {
        const { category } = this.props.match.params;

        if (category != this.state.page)
            this.fetchProducts();
    }

    render() {
        const { category } = this.props.match.params;
        return (
            <section id="category">
                <h2>{category}</h2>
                <ul>
                    {
                        this.state.products.map(product => (
                            <ProductCard product={product} />
                        ))
                    }
                </ul>
            </section>
        )
    }
};

export default withRouter(Category);
