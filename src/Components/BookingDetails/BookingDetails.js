import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';

import './BookingDetails.css'

const Booking = () => {
    const { bookingId } = useParams();
    const [singlePackage, setSinglePackage] = useState({});
    const { register, handleSubmit, reset } = useForm();
    const { user } = useAuth();

    useEffect(() => {
        fetch(`https://enigmatic-ridge-54979.herokuapp.com/packages/${bookingId}`)
            .then(res => res.json())
            .then(data => setSinglePackage(data))
    }, [])

    const onSubmit = data => {
        fetch('https://enigmatic-ridge-54979.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Order processed Successfully');
                    reset();
                }
            })
    };

    return (

        <div>
            <div className="container">
                <div className="row mt-4">
                    <div className="col-lg-6">
                        <img src={singlePackage?.img} alt="" className="img-fluid" />
                        <h3 className="text-center mt-2 pb-3 theme-color">{singlePackage.name}</h3>
                    </div>
                    <div className="col-lg-6">
                        <div className="shadow-lg">
                            <h3 className="text-center pt-5 pb-3 theme-color">Please, Order your favorite package</h3>
                            <div className="text-start px-5">
                                <form onSubmit={handleSubmit(onSubmit)} className="px-4 pb-5">
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlInput1" className="form-label">User Name</label>
                                        <input type="text" className="form-control" id="exampleFormControlInput1" defaultValue={user.displayName} {...register("name", { required: true })} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlInput1" className="form-label">User Email</label>
                                        <input type="email" className="form-control" id="exampleFormControlInput1" defaultValue={user.email} {...register("email", { required: true })} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlInput1" className="form-label">Package Title</label>
                                        <input type="text" className="form-control" id="exampleFormControlInput1" defaultValue={singlePackage.name} {...register("title", { required: true })} placeholder="Package title" />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlInput1" className="form-label">Package Price</label>
                                        <input type="number" className="form-control" id="exampleFormControlInput1" defaultValue={singlePackage.price} {...register("price", { required: true })} placeholder="$ price" />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlInput1" className="form-label">User Address</label>
                                        <input type="text" className="form-control" id="exampleFormControlInput1" defaultValue="" {...register("address", { required: true })} placeholder="User address" />
                                    </div>

                                    <span className="w-50 mx-auto" style={{ display: "block" }}>
                                        <input type="submit" className="btn btn-submit w-100 text-center" />
                                    </span>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Booking;