import React, { Component } from 'react';

type IsOpen = {
    isOpen: boolean;
};

export default class CartWindow extends Component<IsOpen> {
    render() {
        return (
            <div 
                id="currency-window"
                className={ 
                    this.props.isOpen
                        ? "visible one-opacity" 
                        : "hidden zero-opacity"
                }
            >
                <button>
                    $ USD
                </button>
                <button>
                    € EUR
                </button>
                <button>
                    ¥ JPY
                </button>
            </div>
        )
    }
}
