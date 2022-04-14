import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'
const Service = ({ service }) => {
    // console.log(service)
    const { id, name, img, description, price } = service;
    const navigate = useNavigate();
    const navigateToServiceDetail = id => {
        navigate(`/service/${id}`)

    }
    return (
        <div>
            <div id='services' className='service'>
                <img className='w-100' src={img} alt="" />
                <h3>This is service:{name}</h3>
                <small>Price:{price}</small>
                <p><small>{description}</small></p>
                <button onClick={() => navigateToServiceDetail(id)} className='btn btn-primary'>Book: {name}</button>
            </div>
        </div>
    );
};

export default Service;