import React, { Component } from 'react';
import { withRouter, RouteComponentProps } from "react-router";

import { client } from '../service/client';
import { LOAD_CATEGORY } from '../GraphQL/Queries';

import ensure from '../utils/ensure';

import { IProductData, IPricesData } from '../types/types';

import ProductCard from '../components/ProductCard';
import Loader from '../components/Loader';

type CategoryStates = {
    products: IProductData[],
    page: string,
    loading: boolean
};

class Category extends Component<RouteComponentProps<any>, CategoryStates> {
    state: CategoryStates = {
        products: [],
        page: "",
        loading: false,
    }

    fetchProducts = async () => {
        const { category } = this.props.match.params;
        const currency = "USD";

        this.setState({ page: category, loading: true });

        const { data } = await client.query({
            query: LOAD_CATEGORY,
            variables: {
                category: category
            }   
        });
        
        const products = data.category.products.map((pdt: IProductData) => ({
            ...pdt,
            price: ensure(pdt.prices.find((p: IPricesData) => p.currency === currency))       
        }));
            console.log(products);

        this.setState({
            products,
            loading: false
        });
    }

    componentDidMount() {
        this.fetchProducts();
    }

    componentDidUpdate() {
        const { category } = this.props.match.params;

        if (category !== this.state.page)
            this.fetchProducts();
    }

    render() {
        const { loading } = this.state;
        const { category } = this.props.match.params; 

        return (
            <> {
                loading ?
                    <Loader />
                :
                    <section id="category">
                    <h2>{category}</h2>
                    <ul>
                        {
                            
                                this.state.products.map(product => (
                                    <ProductCard key={product.id} product={product} />
                                ))
                        }
                    </ul>
                </section>
            } </>
        )
    }
};

export default withRouter(Category);
