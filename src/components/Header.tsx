import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import { client } from '../service/client';
import { LOAD_CATEGORIES } from '../GraphQL/Queries';

import logo from "../images/logo.svg";
import cart from "../images/cart.svg";
import chevronDown from "../images/chevron-down.svg";
import CartWindow from './CartWindow';
import CurrencyWindow from './CurrencyWindow';

type HeaderStates = {
    cartMenuOpened: boolean;
    currencyMenuOpened: boolean;
    items: string[];
};

export default class Header extends Component<{}, HeaderStates> {
    state: HeaderStates = {
        cartMenuOpened: false,
        currencyMenuOpened: false,
        items: [],
    };

    componentDidMount() {
        client.query({
            query: LOAD_CATEGORIES
        }).then(({ data, loading }) => this.setState({
            items: data.categories.map((category: { name: string; }) => category.name)
        }));
    }

    toggleCart = () => {
        this.setState((prevState) => ({
            cartMenuOpened: !prevState.cartMenuOpened,
            currencyMenuOpened: !prevState.cartMenuOpened && false, //close when cart opened
        }));
    }

    toggleCurrency = () => {
        this.setState((prevState) => ({
            currencyMenuOpened: !prevState.currencyMenuOpened,
            cartMenuOpened: !prevState.currencyMenuOpened && false, //close when currency opened
        }));
    }

    render() {
        const { items } = this.state;

        return (
            <div id="header">
                <nav>
                    {
                        items && items.map(item => (
                            <NavLink
                                exact
                                activeClassName="selected"
                                to={`/category/${item}`}
                            >
                                {item}
                            </NavLink>
                        ))
                    }
                </nav>
                <a href="/#"> <img id="logo" src={logo} alt="Logo" /> </a>
                <div>
                    <button onClick={this.toggleCurrency}>
                        $ <img src={chevronDown} alt="Arrow down" />
                    </button>
                    <CurrencyWindow isOpen={this.state.currencyMenuOpened} />
                    <button onClick={this.toggleCart}>
                        <img src={cart} alt="Cart" />
                        <span>2</span>
                    </button>
                    <CartWindow isOpen={this.state.cartMenuOpened} />
                </div>
                <div 
                    id="overlay"
                    onClick={this.toggleCart}
                    className={
                        this.state.cartMenuOpened
                            ? "visible one-opacity" 
                            : "hidden zero-opacity"
                    }
                />
            </div>
        )
    }
}
