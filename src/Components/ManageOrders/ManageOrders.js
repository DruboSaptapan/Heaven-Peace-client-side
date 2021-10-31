import React, { useEffect, useState } from 'react';

const ManageOrders = () => {
    const [orders, setServices] = useState([]);

    useEffect(() => {
        fetch('https://enigmatic-ridge-54979.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    // DELETE ORDER
    const handleCancelOrder = id => {
        const url = `https://enigmatic-ridge-54979.herokuapp.com/orders/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    alert('Deleted')
                    const remaining = orders.filter(order => order._id !== id);
                    setServices(remaining);
                }
            })
    }
    return (
        <div className="container">
            <h2 className="mt-5 mb-3">Manage All Orders</h2>
            <div className="table-responsive table-sm-responsive">
                <table className="table border table-hover table-sm">
                    <thead>
                        <tr>
                            <th className="text-start">SL.</th>
                            <th className="text-start">Name</th>
                            <th className="text-start">Email</th>
                            {/* <th className="text-start">Reg. Date</th> */}
                            <th className="text-start">Address</th>
                            <th className="text-start">Service</th>
                            <th className="text-start">Amount</th>
                            <th className="text-start">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) =>
                                <tr key={order._id}>
                                    <th className="text-start" scope="row">{index + 1}</th>
                                    <td className="text-start">{order.name}</td>
                                    <td className="text-start">{order.email}</td>
                                    <td className="text-start">{order.address}</td>
                                    <td className="text-start">{order.title}</td>
                                    <td className="text-start">{order.price}</td>
                                    <td className="text-start">
                                        <button className="btn btn-sm btn-success">Approve</button>
                                    </td>
                                    {
                                        order.status === 'Pending' ? 
                                        <td className="text-danger fw-bold">
                                            {order.status}</td> :<td className="text-success fw-bold">{order.status}</td>
                                    }
                                    <td>
                                        <button onClick={() => handleCancelOrder(order._id)} className="btn btn-sm btn-danger">Cancel</button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageOrders;