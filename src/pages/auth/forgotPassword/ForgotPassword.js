import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import './ForgotPassword.css';
import { useForm } from 'react-hook-form';
import { forgotPassword } from 'store/modules/auth';
import { useDispatch, useSelector } from 'react-redux';


const ForgotPassword = () => {
    const dispatch = useDispatch();
    const { register, handleSubmit, formState: { errors }, setValue, watch } = useForm({
        mode: "onChange",
        reValidateMode: "onChange"
    });
    const loading = useSelector(state => state.auth.loading)

    const onSubmit = (user) => {
        console.log("useremail", user.email)
        dispatch(forgotPassword(user.email))
    }


    return (
        <>
            <div className="p-fluid">
                <div className="p-grid p-mx-0">
                    <div className="p-col-12 p-md-7 p-lg-8 jobplicant-panel-left login-pane-left p-p-5 small-screen">
                        {/* <div className="p-col bgimage">
                        </div> */}
                        <div className="left-content">
                            <div><h1 className="p-mb-0  p-text-center title">Joplicant Home for all</h1></div>
                            <div>
                                <div>
                                    <p> <h2 className="p-text-center sub-title"> Job seekers, Artisan, Employer</h2></p>
                                </div>
                                <section className="about font-weight-bold p-mt-4 p-mb-4">
                                    <ul>
                                        <li>Artisans meets employers</li>
                                        <li> You need to get a skilled worker for that urgent need? not too worry,</li>
                                        <li> Employeers find employees you need to get a skilled worker for that urgent need? not too worry,</li>
                                        <li>Employees find the right jobs you need to get a skilled worker for that urgent need? not too worry,</li>
                                    </ul>
                                </section>
                            </div>
                            <div>
                                <div className="font-weight-bold">
                                    <p>You need to get a skilled worker for that urgent need? not too worry, Instant Job Hire is all you need to connect to the right person within you.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-col-12 p-md-5 p-lg-4 jobplicant-panel-right">
                        <div className="logo-container">
                            <img src="/assets/images/logo/applogo.jpeg" alt="Logo" className="reponsive-logo" width="150" />
                        </div>
                        <div className="jobplicant-panel">
                            <div className="jobplicant-heading">
                                <h3 className="jobplicant-title p-mb-1">Recover your password</h3>
                                <p className="p-text-secondary">Fill in your e-mail address below.</p>
                            </div>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="p-fluid">
                                    <div className="p-field">
                                        <InputText id="emailOrPassword"
                                            name="email"
                                            className="inputField"
                                            type="email"
                                            placeholder="Enter your email address"
                                            {...register("email", { required: "Please enter your email address" })
                                            }
                                        />
                                        <div className="box"></div>
                                        <label htmlFor="email">
                                            {errors.email && <span className="text-danger font-weight-bold"> <p>{errors.email.message}</p>
                                            </span>}
                                        </label>
                                    </div>
                                    <Button
                                        label={loading ? "Recovering..." : "Recover Password"} className="form-group" />
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

export default ForgotPassword;