import { Component, ButtonHTMLAttributes } from 'react';

import '../styles/button.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export default class Button extends Component<ButtonProps> {
    constructor(props: ButtonProps) {
        super(props);
    }

    render() {
        return (
            <button className="button" {...this.props}/>
        )
    }
}