import React, { Component } from 'react';

import logo from "../images/logo.svg";
import cart from "../images/cart.svg";
import chevronDown from "../images/chevron-down.svg";

export default class Header extends Component {
    render() {
        return (
            <div id="header">
                <nav>
                    <a className="selected" href="/#">Women</a>
                    <a href="/#">Men</a>
                    <a href="/#">Kids</a>
                </nav>
                <a href="/#"> <img id="logo" src={logo} alt="Logo" /> </a>
                <div>
                    <button>
                        $ <img src={chevronDown} />
                    </button>
                    <button>
                        <img src={cart} />
                    </button>
                </div>
            </div>
        )
    }
}
