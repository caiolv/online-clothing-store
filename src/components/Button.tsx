import { Component, ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export default class Button extends Component<ButtonProps> {
    constructor(props: ButtonProps) {
        super(props);
    }

    render() {
        return (
            <button className="button" {...this.props} />
        )
    }
}