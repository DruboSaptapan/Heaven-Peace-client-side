import React from 'react';

const MyOrders = () => {
    return (
        <div>
            <div className="container">
                <h2 className="mt-3 mb-5">My orders</h2>
                <table className="table border table-hover">
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
                        <tr>
                            <th className="text-start" scope="row">1</th>
                            <td className="text-start">Urmi</td>
                            <td className="text-start">urmi@gmail.com</td>
                            <td className="text-start">Chittagong</td>
                            <td className="text-start">Kicu ekta</td>
                            <td className="text-start">250</td>
                            <td className="text-start"><span className="badge bg-danger">Pending</span></td>
                        </tr>
                        <tr>
                            <th className="text-start" scope="row">2</th>
                            <td className="text-start">Urmi</td>
                            <td className="text-start">urmi@gmail.com</td>
                            <td className="text-start">Dhaka</td>
                            <td className="text-start">Chol ghurte jai</td>
                            <td className="text-start">100</td>
                            <td className="text-start"><span className="badge bg-danger">Pending</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders