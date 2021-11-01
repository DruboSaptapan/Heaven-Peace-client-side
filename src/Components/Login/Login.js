import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const Login = () => {
    const { signInUsingGoogle, signInUsingGithub } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirectURL = location.state?.from || '/';

    const handleGoogleLogIn = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirectURL)
            })
    }
    const handleGithubLogIn = () => {
        signInUsingGithub()
            .then(result => {
                history.push(redirectURL)
            })
    }

    return (
        <div>
            <div className="container-lg bg-light rounded shadow-sm p-lg-5 py-3 my-5 border border-3 w-50">
                <h2 className="mb-4">Please Login</h2>
                <button onClick={handleGoogleLogIn} className="btn rounded-pill mb-2 border"><FcGoogle /> Login with Google</button>
                <br />
                <button onClick={handleGithubLogIn} className="btn btn-dark mt-2 rounded-pill"><FaGithub /> Login with Github</button>
            </div>
        </div>
    );
};

export default Login;