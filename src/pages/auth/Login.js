import React, { useState } from 'react';
import './Login.css'
// import { input } from 'primereact/input';
import { Checkbox } from 'primereact/checkbox';
import { Link } from 'react-router-dom';

import { Button } from 'primereact/button';
import { loginUser } from 'store/modules/auth';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';


const Login = ({ props}) => {

    const dispatch = useDispatch();
    const { register, handleSubmit, erorrs } = useForm();
    const [checked, setChecked] = useState(false);


    const onSubmit = (user) => {
        console.log(user)
        // return;
        // // dispatch(loginUser(user));
    }

    return (
        <>
            <div className="p-grid">
                {/* <div className="p-col bgimage login-pane-left p-col-12 p-md-8 p-lg-8">
                </div> */}
                <div className="login-pane-left p-col-12 p-md-8 p-lg-8 p-xl-8">
                    <div className="left-content">

                        <div><h1 className="p-mb-6 p-mt-6 p-text-center text-white">Joplicant Home for all</h1></div>
                        <div>
                            <section>
                                <p> <h3 className="text-white p-text-center"> Job seekers, Artisan, Employer</h3></p>
                            </section>

                            <section className="p-mt-6 p-text-center">
                                <p>Artisans meets employers, you need to get a skilled worker for that urgent need? not too worry, </p>
                                <p>Employeers find employees you need to get a skilled worker for that urgent need? not too worry, </p>
                                <p>Employees find the right jobs you need to get a skilled worker for that urgent need? not too worry, </p>
                            </section>

                        </div>
                        <div>
                            <section className="p-text-center">
                                <p>you need to get a skilled worker for that urgent need? not too worry, Instant Job Hire is all you need to connect to the right person within you.</p>
                            </section>
                        </div>
                    </div>

                </div>
                <div className="login-pane-right p-col-12 p-md-4 p-lg-4">
                    <div className="brand-logo text-center">
                        <img src="/assets/logo.png" width="150" alt="brand-logo" />
                    </div>
                    <div className="">
                        <div className=" panel-login text-center">

                            <div className="">
                                <div className="p-mt-6 p-mb-5">
                                    <h3 className="auth-title">Login to your account</h3>
                                    <p className="p-m-4 ">Don’t have an account? <Link className="lnk-toggler " data-panel=".panel-signup" to="/register">Sign Up Free!</Link></p>
                                </div>
                                <div className="p-grid p-mt-2">
                                    <div className="p-col-6">
                                        <Link to="#">
                                            <span className="p-badge p-badge-secondary p-badge-xl" style={{ fontSize: '4rem', minWidth: '6rem', height: '4rem', lineHeight: '3rem' }}>  <i className="pi pi-facebook styleclass" style={{ fontSize: 40 }}></i> </span>
                                        </Link>
                                    </div>
                                    <div className="p-col-6">
                                        <Link to="#" className="">
                                            <span className="p-badge p-badge-danger p-badge-xl " style={{ fontSize: '4rem', minWidth: '6rem', height: '4rem', lineHeight: '3rem' }}>
                                                <i className="pi pi-google p-pt-1" style={{ fontSize: 40, paddingTop: '20px' }}> </i></span>
                                        </Link>
                                    </div>
                                </div>

                                <div className="p-col-xs-12 p-col-sm-12 p-mb-5">
                                    <span className="spanOr">or</span>
                                </div>

                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="p-field p-grid">
                                        <label htmlFor="numberoremail" className="p-sr-only">Number or Email
                                                  <span className="p-text-danger p-pl-1">
                                                {/* {erorrs.numberoremail && "number or email is required"} */}
                                            </span>
                                        </label>
                                        <input type="text"
                                            className="form-control p-ml-6 p-mr-6"
                                            name="numberoremail"
                                            id="numberoremail"
                                            placeholder="Mobile number or email address"
                                            {...register("numberoremail", { required: true })} />
                                    </div>
                                    <div className="p-field p-grid">
                                        <label htmlFor="password" className="p-sr-only">Password
                                                  <span className="p-text-danger p-pl-1">
                                                {/* {erorrs.password && "password is required"} */}
                                            </span>
                                        </label>
                                        <input type="password"
                                            className="form-control p-ml-6 p-mr-6 input-container-pass"
                                            id="password"
                                            name="password"
                                            placeholder="Password "
                                            {...register("password", { required: true })} />
                                        {/* <span> <i className="pi-eye-slash"></i></span>
                                            <span className="fa fa-eye-slash pwd-toggle"></span> */}
                                    </div>

                                    <div className="row remember-row p-m-4">
                                        <div className="col-6 col-xs-3 ">
                                            <div className="p-field-checkbox">
                                                <Checkbox inputId="binary"
                                                 id="rememberme"
                                                    name="rememberme"
                                                    checked={checked} onChange={e => setChecked(e.checked)}
                                                    {...register("rememberme", { required: true })}
                                                /><span className="label-text p-ml-1">Remember me</span>

                                            </div>

                                        </div>
                                        <div className="col-6 col-xs-3 p-mb-3 ">
                                            <p className="forgotPwd col-xs-2">
                                                <a className="lnk-toggler" data-panel=".panel-forgot" href="#">Forgot password?</a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="p-grid p-mt-2">
                                    <input type="submit" label="Sign up with email" value="click me" className="signupbtn appcolor p-col-10" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div >
        </>
    )
}

export default Login;