import React, { useState, useRef, useEffect } from 'react';
import { InputText } from 'primereact/inputtext';
import { Checkbox } from 'primereact/checkbox';
import { Link } from 'react-router-dom';
import { Button } from 'primereact/button';
import { loginUser } from 'store/modules/auth';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Toast } from 'primereact/toast';
import { Password } from 'primereact/password';
import { currentApp } from 'services/agent.service';

import './Login.css'

const Login = ({ props }) => {
    const isRequestLoading = useSelector(state => state.auth.loading);
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
        user.app = currentApp;
        dispatch(loginUser(user));
    }

    useEffect(() => {
        register("rememberme")
    }, [register])

    return (
        <>
            <div className="p-fluid">
                <div className="p-grid p-m-6">
                    <Toast ref={toast} />
                    <div className="login-pane-right p-md-4 mx-auto">
                        <div className="brand-logo text-center">
                            <img src="/assets/images/logo/applogo.jpeg" width="150" alt="brand-logo" />
                        </div>
                        <div className="">
                            <div className="">
                                <div className="">
                                    <div className="p-mt-0 p-mb-0">
                                        <h4 className="sm-page-title text-center">Login to your account</h4>
                                        <p className="p-m-4 text-center ">Don’t have an account? <Link className="lnk-toggler font-weight-bold sign-up" data-panel=".panel-signup" to="/register">Sign Up Free!</Link></p>
                                    </div>
                                    <br />
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div className="p-fluid">
                                            <label htmlFor="email" className="">
                                                <span className="text-default font-weight-bold default-color p-my-1">Email
                                                </span>
                                            </label>
                                            <div className="p-field">
                                                <InputText type="email"
                                                    name="email"
                                                    placeholder="email address"
                                                    {...register('email', { required: "Please enter an email address" })}
                                                    id="email"

                                                />
                                                <label htmlFor="email" className="">
                                                    {errors?.email?.type === "required" && <span className="text-danger font-weight-bold"> <p>{errors.email.message}</p>
                                                    </span>}
                                                </label>
                                            </div>
                                            <label htmlFor="password" className="">
                                                <span className="text-default font-weight-bold default-color p-my-1">Password
                                                </span>
                                            </label>
                                            <div className="p-field">
                                                <Password
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
                                            </div>

                                            <div className="p-d-flex p-jc-between">
                                                <div className="p-field-checkbox">
                                                </div>
                                                <div>
                                                    <Link className="font-weight-bold forgot-pwd" to="/forgotpassword">Forgot password?</Link>
                                                </div>
                                            </div>
                                            <br />
                                            <Button
                                                label="Login"
                                                type="submit"
                                                className="form-group"
                                                loading={isRequestLoading}
                                            />

                                        </div>
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