import React from 'react';
import { Link } from 'react-router-dom';

import './Service.css'

const Service = ({ service }) => {
  const { _id, name, img, description, price } = service;
  return (
    <div className="col">
      <div className="card h-100 me-0 service-card d-flex flex-column align-items-start service">
        <img src={img} className="card-img-top" alt="" />
        <div className="card-body p-3">
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
            <div className="col-lg-6"></div>
            <div className="col-lg-6">
              <Link to={`/bookingDetails/${_id}`}>
                <button className="btn btn-theme rounded-pill" service={service}>See more info</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Service;