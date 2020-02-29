import React from 'react';
import './Button.css';

const Button = (props) => {
    const {Name} = props;
    return (
        <button className="button">
            {Name} home
        </button>
    );
}
export default Button;
