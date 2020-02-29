import React from 'react';
import './ButtonTwo.css';

const ButtonTwo = (props) => {
    const {Name} = props;
    return (
        <button className="button">
            {Name}home
        </button>
    );
}
export default ButtonTwo;
