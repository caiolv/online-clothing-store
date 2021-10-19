import React, { Component } from 'react';

import { client } from '../service/client';

import { LOAD_CURRENCIES } from '../GraphQL/Queries';

type CartWindowProps = {
    isOpen: boolean;
};

type CartWindowState = {
    loading: boolean;
    currencies: string[];
}

export default class CartWindow extends Component<CartWindowProps, CartWindowState> {
    state: CartWindowState = {
        loading: false,
        currencies: [],
    }

    fetchCurrencies = async () => {
        this.setState({ loading: true });
        const { data } = await client.query({
            query: LOAD_CURRENCIES
        });
        const { currencies } = data;
        
        this.setState({ currencies, loading: false });
    }

    componentDidMount() { 
        this.fetchCurrencies();
    }

    render() {
        const { currencies } = this.state;
        return (
            <div 
                id="currency-window"
                className={ 
                    this.props.isOpen
                        ? "visible one-opacity" 
                        : "hidden zero-opacity"
                }
            >
                {
                    currencies.map(cur => (
                        <button>
                            $ {cur}
                        </button>
                    ))
                }
            </div>
        )
    }
}
