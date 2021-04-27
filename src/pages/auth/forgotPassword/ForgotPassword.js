import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import './ForgotPassword.css';
import { useForm } from 'react-hook-form';
import { forgotPasswordUser } from 'store/modules/auth';
import { useDispatch, useSelector } from 'react-redux';


const ForgotPassword = () => {
    const dispatch = useDispatch();
    const { register, handleSubmit, formState: { errors, } } = useForm("");

    const { user } = useSelector((state) => ({ ...state }))


    console.log(({ user }));

    const onSubmit = (user) => {
        console.log({ user })

        dispatch(forgotPasswordUser(user))
    }



    return (
        <>
            <div className="p-fluid">
                <div className="p-grid p-mx-0">
                    <div className="p-col-12 p-md-7 p-lg-8 jobplicant-panel-left p-p-0 small-screen">
                        <div className="p-col bgimage">
                        </div>
                    </div>
                    <div className="p-col-12 p-md-5 p-lg-4 jobplicant-panel-right">
                        <div className="logo-container">
                            <img src="../../assets/logo.png" alt="Logo" className="reponsive-logo" width="150" />
                        </div>
                        <div className="jobplicant-panel">
                            <div className="jobplicant-heading">
                                <h3 className="jobplicant-title p-mb-1">Recover your password</h3>
                                <p className="p-text-secondary">Fill in your e-mail address or mobile number below.</p>
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
                                    <Button label="Recover Password" className="form-group" />
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