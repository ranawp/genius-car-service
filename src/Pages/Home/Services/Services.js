import React, { useEffect, useState } from 'react';
import Service from '../Service/Service'
import './Services.css'


const Services = () => {
    const [service, setService] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <div className='container'>
            <div className="row">
                <h2 className='service-title'>Our Services </h2>

                <div className="services-container">
                    {
                        service.map(service => <Service
                            key={service.id}
                            service={service}
                        >

                        </Service>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;