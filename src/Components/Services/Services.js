import React from 'react';
import { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://enigmatic-ridge-54979.herokuapp.com/packages')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div className="container my-5">
                <h2 className="mb-4">Services</h2>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        services.map(service => <Service key={service._id} service={service}></Service>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;