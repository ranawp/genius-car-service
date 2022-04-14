import React from 'react';
import sleeping from '../../../image/sleeping-cute-cat.jpg'
const NotFound = () => {
    return (
        <div>
            <h2 className='text-primary text-color text-center'>Mechanic is sleeping</h2>
            <img width='50%' src={sleeping} alt="" />
        </div>
    );
};

export default NotFound;