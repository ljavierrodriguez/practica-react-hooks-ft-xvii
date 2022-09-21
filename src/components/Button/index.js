import React from 'react';
import PropTypes from 'prop-types';

// Definicion
const Button = ({ onClick, className, text, icon }) => {
    return <button type='button' className={className} onClick={onClick}>{icon} {text}</button>
}

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    className: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}

export default Button;