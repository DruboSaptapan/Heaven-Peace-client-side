import React from 'react';
import { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import OnePackage from '../OnePacakge/OnePackage';

const Packages = () => {
    const [packages, setPackages] = useState([])
    useEffect(() => {
        fetch('https://enigmatic-ridge-54979.herokuapp.com/packages')
            .then(res => res.json())
            .then(data => setPackages(data))
    }, [])
    const { isLoading } = useAuth();
    if (isLoading) {
        return (
            <div className="d-flex justify-content-center align-items-start package-loader">
                <div className="d-flex justify-content-center spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }
    return (
        <div>
            <div className="container my-5">
                <h2 className="mb-4">Packages</h2>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        packages.map(onePackage => <OnePackage key={onePackage._id} onePackage={onePackage}></OnePackage>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Packages;