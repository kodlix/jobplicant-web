import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';

import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { updateUserPassword } from 'store/modules/auth';

import './ForgotPassword.css';

const NewPassword = (props) => {
    const dispatch = useDispatch();

    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        mode: 'onChange',
        reValidateMode: 'onChange'
    })

    const password = useRef(({}));
    password.current = watch("password", "");

    let url = props.location.search;
    console.log("url", url)

    url = url.split('=');
    const shortCode = url[2];
    let paramsEmail = url[1];
    let email = paramsEmail.split("&");
    email = email[0];


    console.log("shortCode =", shortCode);
    console.log("email", email);


    const onSubmit = (userdata) => {
        console.log(userdata, "data");
        dispatch(updateUserPassword(shortCode, email, userdata))
    }


    return (
        <>
            <div className="p-fluid">
                <div className="p-grid p-mx-0">
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
                    <div className="p-col-12 p-md-5 p-lg-4 jobplicant-panel-right">
                        <div className="logo-container">
                            <img src="../../assets/logo.png" alt="Logo" className="reponsive-logo" width="150" />
                        </div>
                        <div className="jobplicant-panel">
                            <div className="jobplicant-heading">
                                <h3 className="jobplicant-title p-mb-1">Recover your password</h3>
                                <p className="p-text-secondary">Please enter a new password</p>
                            </div>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="p-fluid">
                                    <div className="p-field">
                                        <InputText
                                            id="password"
                                            type="password"
                                            name="password"
                                            placeholder="New Password"
                                            {...register("password", {
                                                required: "Password too short",
                                                minLength: {
                                                    value: 8,
                                                    message: "Password must not be less than 8 characters"
                                                }
                                            })}
                                        />  <label htmlFor="password" className="">
                                            {errors.password && <span className="text-danger font-weight-bold"> <p>{errors.password.message}</p>
                                            </span>}
                                        </label>
                                    </div>
                                    <div className="p-field">
                                        <InputText
                                            id="confirmPassword"
                                            type="password"
                                            name="confirmPassword"
                                            placeholder="Confirm New Password"
                                            {...register("confirmPassword", {
                                                validate: value => value === password.current || "The passwords do not match"
                                            })}
                                        />
                                        <label htmlFor="confirmPassword" className="">
                                            {errors.confirmPassword && <span className="text-danger font-weight-bold"> <p>{errors.confirmPassword.message}</p>
                                            </span>}
                                        </label>
                                    </div>
                                    <Button label="Confirm" type="submit" className="form-group" />
                                    <div className="form-group">
                                        <Link to="/Login" className="p-mt-2 p-text-secondary back-button">Back to Login</Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default NewPassword;