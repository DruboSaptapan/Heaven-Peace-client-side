import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
// import './AddPackages.css';

const AddPackages = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('https://enigmatic-ridge-54979.herokuapp.com/packages', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Successfully Added')
                    reset();
                }
            })
    }
    return (
        <div className="add-service">
            <h1 className="mb-3">Add a Package</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="w-50 mx-auto">
                <div className="form-floating mb-3">
                    <input {...register("name")} placeholder="name" type="text" className="form-control" />
                    <label htmlFor="floatingInput">Name</label>
                </div>
                <div className="form-floating mb-3">
                    <input {...register("img")} placeholder="image-url" type="text" className="form-control" />
                    <label htmlFor="floatingInput">Image URL</label>
                </div>
                <div className="form-floating mb-3">
                    <textarea {...register("description")} placeholder="description"  className="form-control"></textarea>
                    <label htmlFor="floatingTextarea">Description</label>
                </div>
                <div className="form-floating">
                    <input type="number" {...register("price")} placeholder="price" className="form-control" />
                    <label htmlFor="floatingNumber">Price</label>
                </div>
                <input type="submit" value="Add Package" className="mt-3 btn btn-success"/>
            </form>
        </div>
    );
};

export default AddPackages;