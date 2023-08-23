import React from 'react';
import './More.css';

function More ({
    handleClick
}) {
    return (
        <div className="more">
            <button className='more__button' onClick={handleClick}>Ещё</button>
        </div>
    )
};

export default More;
