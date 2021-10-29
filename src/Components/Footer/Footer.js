import React from 'react';
// import { Link } from 'react-router-dom';

import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="container mt-5 pt-5 pb-3">
                <div>
                    <div className="row">
                        <div className="col-12 col-lg-3 py-4">
                            {/* <Link className="navbar-brand" to="/">
                                <img src={logo} alt="" style={{ width: 40, fontWeight: 700, color: 'black', marginRight: 5 }} />
                                Fetoscope
                            </Link> */}
                        </div>
                        <div className="col-6 col-lg-3">
                            <ul className="service-list">
                                <li className="text-start">Services</li>
                                <li className="text-start">Cardiology(Adult)</li>
                                <li className="text-start">Dentistry</li>
                                <li className="text-start">Pharmacy</li>
                                <li className="text-start">Therapies</li>
                            </ul>
                        </div>
                        <div className="col-6 col-lg-3">
                            <ul className="important-list">
                                <li className="text-start">Important Links</li>
                                <li className="text-start">Home</li>
                                <li className="text-start">Services</li>
                                <li className="text-start">Contact Us</li>
                            </ul>
                        </div>
                        <div className="col-6 col-lg-3">
                            <ul className="important-list">
                                <li className="text-start">Support</li>
                                <li className="text-start">Terms of services</li>
                                <li className="text-start">Privacy policy</li>
                            </ul>
                        </div>
                    </div>
                    <p className="mt-5 mb-0 fw-bold pb-4">Copyright © 2021 | This website is made by Saptapan Barua</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;