import React from 'react';
import PropTypes from 'prop-types';

// Definicion 
const Titulo = ({ text }) => {
    return (
        <>
            <h1 className='text-center'>{text}</h1>
            {/* {
                type === 1 && <h1 className='text-center'>{text}</h1>
            }
            {
                type === 2 && <h2 className='text-center'>{text}</h2>
            } */}

            {/* {
                type === 1 ?
                    <h1 className='text-center'>{text}</h1>
                    : type === 2 ?
                        (
                            <h2 className='text-center'>{text}</h2>
                        ) : (
                            null
                        )
            } */}
        </>
    )
}

// Validacion de Props
Titulo.propTypes = {
    text: PropTypes.string.isRequired,
    //type: PropTypes.number
}

export default Titulo;