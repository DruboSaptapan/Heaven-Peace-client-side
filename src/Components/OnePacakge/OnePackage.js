import React from 'react';
import { Link } from 'react-router-dom';

import './OnePackage.css'

const Service = ({ onePackage }) => {
  const { _id, name, img, description, price } = onePackage;
  return (
    <div className="col">
      <div className="card h-100 me-0 service-card d-flex flex-column align-items-start service">
        <img src={img} className="card-img-top img-fluid" alt="" />
        <div className="card-body p-4">
          <div className="row my-2 border-bottom">
            <div className="col-8">
              <h5 className="card-title fw-bold text-start">{name}</h5>
            </div>
            <div className="col-4">
              <h5>${price}</h5>
            </div>
          </div>
          <p className="card-text text-start">{description}</p>
          <div className="row">
            <div className="col-lg-6 d-flex justify-content-start">
            <i className="fas fa-star" style={{color: '#FFD700', fontSize: 30}}></i>
            <i className="fas fa-star" style={{color: '#FFD700', fontSize: 30}}></i>
            <i className="fas fa-star" style={{color: '#FFD700', fontSize: 30}}></i>
            <i className="fas fa-star" style={{color: '#FFD700', fontSize: 30}}></i>
            <i className="fas fa-star" style={{color: '#FFD700', fontSize: 30}}></i>
            </div>
            <div className="col-lg-6 d-flex justify-content-end">
              <Link to={`/bookingDetails/${_id}`}>
                <button className="btn btn-theme rounded-pill" onePackage={onePackage}>Booking</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Service;