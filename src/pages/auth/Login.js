import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Checkbox } from 'primereact/checkbox';
import { Link } from 'react-router-dom';
import { Button } from 'primereact/button';
import { loginUser } from 'store/modules/auth';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';

import './Login.css'



const Login = ({ }) => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: "onChange",
        reValidateMode: "onChange"
    });
    const dispatch = useDispatch();

    console.log({ errors })


    const [checked, setChecked] = useState(false);

    const onSubmit = (user) => {

        user.type = 'artisan';
        console.log(user)
        dispatch(loginUser(user));
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
                                <div className="p-grid p-mt-1">
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
                                        <InputText type="text"
                                            className="form-control p-ml-6 p-mr-6"
                                            name="email"
                                            placeholder="Mobile number or email address"
                                            {...register('email', { required: "Please enter an email address or phone number" })}
                                            id="email"

                                        />
                                        <label htmlFor="email" className="">
                                            {errors?.email?.type === "required" && <span className="text-danger font-weight-bold  p-pl-6"> <p>{errors.email.message}</p>
                                            </span>}
                                        </label>
                                    </div>
                                    <div className="p-field p-grid">
                                        <InputText type="password"
                                            className="form-control p-ml-6 p-mr-6 input-container-pass"
                                            name="password"
                                            placeholder="Password"
                                            {...register("password", { required: "Please enter a password." })}
                                        />

                                        <label htmlFor="password" className="">
                                            {errors?.password?.type === "required" && <span className="text-danger font-weight-bold p-pl-6"> <p>{errors.password.message}</p>
                                            </span>}
                                        </label>
                                        {/* <span> <i className="pi-eye-slash"></i></span>
                                            <span className="fa fa-eye-slash pwd-toggle"></span> */}
                                    </div>

                                    <div className="row remember-row p-m-4">
                                        <div className="col-6 col-xs-3 ">
                                            <div className="p-field-checkbox">
                                                <Checkbox inputId="binary"
                                                    name="rememberme"
                                                    checked={checked} onChange={e => setChecked(e.checked)}
                                                    {...register("rememberme")}
                                                /><span className="label-text p-ml-1">Remember me</span>

                                            </div>
                                        </div>
                                        <div className="col-6 col-xs-3 p-mb-3 ">
                                            <p className="forgotPwd col-xs-2">
                                                <Link className="lnk-toggler" data-panel=".panel-forgot" to="/forgotpassword">Forgot password?</Link>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="p-grid">
                                        <Button label="Login" type="submit" className="loginbtn appcolor p-col-10" />
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