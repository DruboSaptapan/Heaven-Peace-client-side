import img from './images/doctor.jpg'
import { FcGoogle } from "react-icons/fc";
import { VscGithubAlt } from "react-icons/vsc";
import { Link } from 'react-router-dom';
// import useAuth from '../../Hooks/useAuth';
// import { useHistory, useLocation } from 'react-router';

const Login = () => {
    // const { signInUsingGoogle, signInUsingGithub, handleEmailChange, handleSignIn, handlePasswordChange, error } = useAuth();
    // const location = useLocation();
    // const history = useHistory()
    // const redirectURL = location.state?.from || '/'

    // /* redirected google log in */
    // const handleGoogleLogIn = () => {
    //     signInUsingGoogle()
    //         .then(result => {
    //             history.push(redirectURL)
    //         })
    // }

    // /* redirected github log in */
    // const handleGithubLogIn = () => {
    //     signInUsingGithub()
    //     .then(result => {
    //         history.push(redirectURL)
    //     })
    // }
    return (
        <div className="container">
            <div className="row mx-3 my-5 no-gutters shadow-lg">
                <div className="col-md-6 d-none d-md-block">
                    <img src={img} alt="" />
                </div>
                <div className="col-md-6 bg-white p-5">
                    <h4 className="pb-3 text-start">Please log in</h4>
                    <div className="form-style">
                        <form>
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" placeholder="name@example.com" />
                                <label htmlFor="floatingInput">Email address</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="password" className="form-control" placeholder="password" />
                                <label htmlFor="floatingInput">Password</label>
                                <div>
                                    <small className="text-danger"></small>
                                </div>
                            </div>
                            <div className="pb-2">
                                <input type="submit" value="LOG IN" className="btn border w-100 btn-primary fw-normal mt-2" />
                            </div>
                        </form>

                        <div className="sideline">OR</div>

                        <div className="pb-2">
                            <button className="btn border w-100 fw-normal mt-2"><FcGoogle />Log in with Google</button>
                        </div>

                        <div className="sideline">OR</div>

                        <div>
                            <button className="btn btn-outline-dark w-100 fw-normal mt-2"> <VscGithubAlt />Log in With Github</button>
                        </div>
                        <div className="pt-4 text-center">
                            New to Fetoscope? <Link to="/register" style={{ textDecoration: 'none' }}>Register</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;