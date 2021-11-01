import React from 'react';
import { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Packages = () => {
    const [packages, setPackages] = useState([])
    useEffect(() => {
        fetch('https://enigmatic-ridge-54979.herokuapp.com/packages')
            .then(res => res.json())
            .then(data => setPackages(data))
    }, [])
    return (
        <div>
            <div className="container my-5">
                <h2 className="mb-4">Packages</h2>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        packages.map(service => <Service key={service._id} service={service}></Service>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Packages;