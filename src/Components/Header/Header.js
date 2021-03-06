import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import logoImg from './image/logo.png'


const Header = () => {
    const { user, logOut } = useAuth();
    const activeStyle = {
        color : '#f68712', fontWeight : 'bold',
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-lg">
                <div className="container">
                    <NavLink className="navbar-brand" to="/">
                        <img src={logoImg} alt="" width="130" />
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link me-1" aria-current="page" to="/home" activeStyle={activeStyle}>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link me-1" aria-current="page" to="/packages" activeStyle={activeStyle}>Package</NavLink>
                            </li>
                            {
                                ((user.displayName) || (user.photoURL) || (user.email)) &&
                                <li className="nav-item">
                                    <NavLink className="nav-link mx-1" to="/myorders" activeStyle={activeStyle}>My Orders</NavLink>
                                </li>
                            }
                            {
                                ((user.displayName) || (user.photoURL) || (user.email)) &&
                                <li className="nav-item">
                                    <NavLink className="nav-link mx-1" to="/manageorders" activeStyle={activeStyle}>Manage All Orders</NavLink>
                                </li>
                            }
                            {
                                ((user.displayName) || (user.photoURL) || (user.email)) &&
                                <li className="nav-item">
                                    <NavLink className="nav-link ms-1" to="/addpackages" activeStyle={activeStyle}>Add Packages</NavLink>
                                </li>
                            }
                        </ul>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                {
                                    ((user?.displayName) || (user?.photoURL) || (user?.email)) &&
                                    <div className="rounded-pill mx-lg-0 mx-auto py-1 px-2 d-flex align-items-center justify-content-center my-3 my-lg-0">
                                        <img src={user?.photoURL} className="rounded-pill user" alt="" style={{ width: 35 }} />
                                        <p className="ms-2 mb-2 fw-bold">{(user?.displayName) || (user?.email)}</p>
                                    </div>
                                }
                            </li>
                            <li className="nav-item">
                                {(user?.displayName) || (user?.photoURL) || (user?.email) ?
                                    <button onClick={logOut} className="btn btn-outline-primary ms-2">LOG OUT</button> :
                                    <NavLink to="/login"><button className="btn btn-primary me-1" type="submit" >LOG IN</button></NavLink>
                                }
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;