import React, { useState, useRef, useEffect } from 'react';
import { InputText } from 'primereact/inputtext';
import { Checkbox } from 'primereact/checkbox';
import { Link } from 'react-router-dom';
import { Button } from 'primereact/button';
import { loginUser } from 'store/modules/auth';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Toast } from 'primereact/toast';
import { Password } from 'primereact/password';

import './Login.css'

const Login = ({ props }) => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: "onChange",
        reValidateMode: "onChange"
    });
    const dispatch = useDispatch();
    const toast = useRef(null);


    const [checked, setChecked] = useState(false);
    const [pass, setPass] = useState('');
    // console.log(props.accountType);

   useEffect(() => {
    console.log(pass)
   }, [pass])
    // console.log({ checked })


    const onSubmit = (user) => {

        user.type = 'artisan'; // Not required but needed to login successfully
        console.log(user)
        dispatch(loginUser(user));
    }

    useEffect(() => {
        register("rememberme")
    }, [register])

    return (
        <>
            <div className="p-fluid">
                <div className="p-grid p-mx-0">
                    <Toast ref={toast} />

                    {/* <div className="p-col bgimage login-pane-left p-col-12 p-md-8 p-lg-8">
                </div> */}
                    <div className="login-pane-left p-col-12 p-md-7 p-lg-8 p-p-5 small-screen">
                        <div className="left-content">
                            <div><h1 className="p-mb-0 p-text-center title">Joplicant Home for all</h1></div>
                            <div>
                                <div>
                                  <h2 className="p-text-center sub-title"> Job seekers, Artisan, Employer</h2>
                                </div>
                                <section className="about p-mt-4 p-mb-4">
                                    <ul>
                                        <li>Artisans meets employers</li>
                                        <li> You need to get a skilled worker for that urgent need? not too worry,</li>
                                        <li> Employeers find employees you need to get a skilled worker for that urgent need? not too worry,</li>
                                        <li>Employees find the right jobs you need to get a skilled worker for that urgent need? not too worry,</li>
                                    </ul>
                                </section>
                            </div>
                            <div>
                                <div>
                                    <p>You need to get a skilled worker for that urgent need? not too worry, Instant Job Hire is all you need to connect to the right person within you.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="login-pane-right p-col-12 p-md-5 p-lg-4">
                        <div className="brand-logo text-center">
                            <img src="/assets/logo.png" width="150" alt="brand-logo" />
                        </div>
                        <div className="">
                            <div className=" panel-login">
                                <div className="">
                                    <div className="p-mt-0 p-mb-0">
                                        <h3 className="sm-page-title text-center">Login to your account</h3>
                                        <p className="p-m-4 text-center ">Don’t have an account? <Link className="lnk-toggler font-weight-bold sign-up" data-panel=".panel-signup" to="/register">Sign Up Free!</Link></p>
                                    </div>
                                    <div className="p-grid p-mt-0 sm-social-media text-center">
                                        <div className="p-col-6">
                                            <Link to="/">
                                                <span className="p-badge p-badge-secondary p-badge-xl" style={{ fontSize: '4rem', minWidth: '6rem', height: '4rem', lineHeight: '3rem' }}>  <i className="pi pi-facebook styleclass" style={{ fontSize: 40 }}></i> </span>
                                            </Link>
                                        </div>
                                        <div className="p-col-6">
                                            <Link to="/" className="">
                                                <span className="p-badge p-badge-danger p-badge-xl " style={{ fontSize: '4rem', minWidth: '6rem', height: '4rem', lineHeight: '3rem' }}>
                                                    <i className="pi pi-google p-pt-1" style={{ fontSize: 40, paddingTop: '20px' }}> </i></span>
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="p-col-xs-12 p-col-sm-12 p-mb-2 text-center">
                                        <span className="spanOr font-weight-bolder">or</span>
                                    </div>

                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div className="p-fluid">
                                            <div className="p-field">
                                                <InputText type="email"
                                                    name="email"
                                                    placeholder="Mobile number or email address"
                                                    {...register('email', { required: "Please enter an email address or phone number" })}
                                                    id="email"

                                                />
                                                <label htmlFor="email" className="">
                                                    {errors?.email?.type === "required" && <span className="text-danger font-weight-bold"> <p>{errors.email.message}</p>
                                                    </span>}
                                                </label>
                                            </div>
                                            <div className="p-field">
                                                {/* <InputText type="password"
                                                    name="password"
                                                    placeholder="Password"
                                                    {...register("password", { required: "Please enter your password." })}
                                                /> */}
                                                <Password
                                                    // value={pass} 
                                                    // onChange={(e) => setPass(e.target.value)}
                                                    toggleMask
                                                    name="password"
                                                    placeholder="Password"
                                                    feedback={false}
                                                    {...register("password", { required: "Please enter your password." })}

                                                />



                                                <label htmlFor="password" className="">
                                                    {errors?.password?.type === "required" && <span className="text-danger font-weight-bold p-mr-6 error-msg"> <p>{errors.password.message}</p>
                                                    </span>}
                                                </label>
                                                {/* <span> <i className="pi-eye-slash"></i></span>
                                            <span className="fa fa-eye-slash pwd-toggle"></span> */}
                                            </div>

                                            <div className="row">
                                                <div className="col-6 col-xs-3 ">
                                                    <div className="p-field-checkbox">
                                                        <Checkbox inputId="rememberMe"
                                                            name="rememberme"
                                                            id="rememberMe"
                                                            checked={checked}
                                                            onChange={e => setChecked(e.checked)}
                                                        /> <label htmlFor="rememberMe"><span className="label-text p-ml-1">Remember me</span></label>
                                                    </div>
                                                </div>
                                                <div className="col-6 col-xs-3 p-mb-1 ">
                                                    <p className="col-xs-2 appcolor">
                                                        <Link className="font-weight-bold forgot-pwd" to="/forgotpassword">Forgot password?</Link>
                                                    </p>
                                                </div>
                                            </div>
                                            <Button label="Login" type="submit" className="form-group" />

                                        </div>
                                        {/* <div className="p-grid"> */}
                                        {/* </div> */}
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Login;