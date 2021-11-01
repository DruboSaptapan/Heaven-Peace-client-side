import React from 'react';
import FAQ from '../FAQ/FAQ';
import Services from '../Packages/Packages';

import './Home.css'

const Home = () => {

    return (
        <div>
            <div className="banner w-100">
                <div className="container">
                    <h1 className="text-start text-center fw-bold p-5">Welcome to heaven peace</h1>
                </div>
            </div>
            <Services></Services>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;