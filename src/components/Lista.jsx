import React from 'react';
import PropTypes from 'prop-types';

const Lista = ({ nombres, name }) => {
    return (
        <>
        <label>{name}</label>
        <ul className='list-group'>
            { 
                nombres.map((nombre, index) => <li key={index} className="list-group-item">{nombre}</li>)
            }
        </ul>
        </>
    )
}

Lista.defaultProps = {
    nombres: ["Ana", "Lisa", "Maria"]
}

Lista.propTypes = {
    nombres: PropTypes.array.isRequired
}

export default Lista;