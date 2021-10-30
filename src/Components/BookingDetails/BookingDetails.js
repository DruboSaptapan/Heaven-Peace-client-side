import React from 'react'
import { BsCurrencyDollar } from "react-icons/bs";
import { FaHeadphones } from "react-icons/fa";
import { BsFillStarFill } from "react-icons/bs";
import { MdLuggage } from "react-icons/md";

import demoImg from './amikhum.jpg'
import { useForm } from 'react-hook-form';
import useAuth from '../../Hooks/useAuth';

const BookingDetails = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useAuth();
    // console.log(user)

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
                <div className="row mt-3">
                    <div className="col-lg-6 col-12">
                        <img src={demoImg} className="img-fluid" alt="" />
                        <h3 className="text-start mt-3 mb-lg-0 mb-3">Amiakhum</h3>
                        <div className="row row-cols-3">
                            <div className="col">Column</div>
                            <div className="col">Column</div>
                            <div className="col">Column</div>
                            <div className="col">Column</div>
                            <div className="col">Column</div>
                            <div className="col">Column</div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12">
                        <h2 className="text-center mb-4 mt-lg-0 mt-4">Registration service</h2>
                        <form className="w-100 mb-5" onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="floatingInput" placeholder="Your name" defaultValue={user.displayName} {...register("name")} required />
                                <label htmlFor="floatingInput">Name</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" id="floatingInput" placeholder="Your email address" defaultValue={user.email} {...register("email", { required: true })} required />
                                {errors.email && <span className="error">This field is required</span>}
                                <label htmlFor="floatingInput">Email Address</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="floatingInput" placeholder="Service title" {...register("title")} />
                                <label htmlFor="floatingInput">Service Title</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="number" className="form-control" id="floatingInput" placeholder="price" defaultValue={user.price} {...register("price")} />
                                <label htmlFor="floatingInput">Price</label>
                            </div>
                            <div className="form-floating">
                                <textarea className="form-control" id="floatingTextarea2" placeholder="Address" defaultValue="" {...register("address")}  style={{height: 100}}></textarea>
                                <label htmlFor="floatingTextarea2">Address</label>
                            </div>
                            <input type="submit" className="btn btn-success mt-2"/>
                        </form>

                        <h2 className="mb-4">Why book with us</h2>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item text-start"><BsCurrencyDollar style={{ color: '#34547a', marginRight: 14, width: 20, height:20 }} /> No hassle-best price guaranty</li>
                            <li className="list-group-item text-start"><FaHeadphones style={{ color: '#34547a', marginRight: 14, width: 20, height:20 }} /> Customer care 24/7</li>
                            <li className="list-group-item text-start"><BsFillStarFill style={{ color: '#34547a', marginRight: 14, width: 20, height:20 }} /> Hand picked tour & Activities</li>
                            <li className="list-group-item text-start"><MdLuggage style={{ color: '#34547a', marginRight: 14, width: 20, height:20 }} /> Free travel insurance</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingDetails;
