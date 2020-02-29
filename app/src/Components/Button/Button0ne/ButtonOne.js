import React from 'react';
import './ButtonOne.css';

const ButtonOne = (props) => {
    const {Name} = props;
    return (
        <button className="button">
            {Name}home
        </button>
    );
}
export default ButtonOne;
