import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';


import './ForgotPassword.css';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { updateUserPassword } from 'store/modules/auth';

const NewPassword = (props) => {
    const dispatch = useDispatch();
    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        mode: 'onChange',
        reValidateMode: 'onChange'
    })

    const password = useRef(({}));
    password.current = watch("password", "");
    const sortCode = props.match.params.id

    console.log({ props });

    // const data = {
    //     sortCode: props.match.params.id
    // }



    const onSubmit = (user) => {
        user.sortCode = sortCode;

        dispatch(updateUserPassword(user))
    }


    return (
        <>
            <div className="p-fluid">
                <div className="p-grid p-mx-0">
                    <div className="p-col-12 p-md-7 p-lg-8 jobplicant-panel-left p-p-0 ">
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
                                <p className="p-text-secondary">Please enter a new password</p>
                            </div>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="p-fluid">
                                    <div className="p-field">
                                        <InputText
                                            id="newPassword"
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
                                        />  <label htmlFor="name" className="">
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
                                        <label htmlFor="name" className="">
                                            {errors.confirmPassword && <span className="text-danger font-weight-bold"> <p>{errors.confirmPassword.message}</p>
                                            </span>}
                                        </label>
                                    </div>
                                    <Button label="Confirm" className="form-group" />
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