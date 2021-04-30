import React from 'react';
import {Link} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import {Button} from 'primereact/button';
import {InputText} from 'primereact/inputtext';
import { verifyAccount } from 'store/modules/auth';

import './SecurityVerification.css'
import { useQuery } from 'hooks/use-query';


const SecurityVerification = ({}) => {

    const dispatch = useDispatch();
    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: "onChange",
        reValidateMode: "onChange"
    });

    const query = useQuery();
    const email = query.get('email');
    const phonenumber = query.get('phonenumber');

    const onSubmit = ({code}) => {
        dispatch(verifyAccount(code))
    }
    return (
        <>
            <div className="p-fluid">
                <div className="p-grid">
                    <div className="login-pane-left p-col-12"
                        style={
                            {
                                minHeight: '101vh',
                                margin: 0
                            }
                    }>
                        <div className="left-content p-col-8 mx-auto">
                            <div className="card card-size">
                                <div className="card-header p-text-secondary font-weight-bold">
                                    Security Verification
                                </div>
                                <div className="card-body">
                                    <div className="login-pane-right p-4">
                                        <div className="">
                                            <div className="panel-login text-center"></div>
                                            <div className="panel-signup ">
                                                <section>
                                                    <div className="authfy-heading message">
                                                        <h4 className="">Enter the code  that was sent to your email
                                                        </h4>
                                                    </div>
                                                    <div className="p-field message p-text-secondary">
                                                        <div className="p-mt-4">
                                                            <p>To finish your registration, please enter the verification code we sent to
                                                                 &nbsp;<strong>{email || phonenumber}</strong>. It might take a few seconds to receive your code.</p>
                                                        </div>
                                                    </div>
                                                </section>
                                                <form onSubmit={handleSubmit(onSubmit)}>
                                                    <div className="p-fluid">
                                                        <div className="p-field">
                                                            <InputText type="text"
                                                             placeholder="Enter verification code"
                                                             name="code"
                                                             {...register("code", { required: "verification code is required" })}
                                                             />
                                                             <label htmlFor="lastname" className="">
                                                                {errors.code && <span className="text-danger font-weight-bold "> <p>{errors.code.message}</p>
                                                                </span>}
                                                            </label>
                                                        </div>
                                                        <div className="font-weight-bold">
                                                            <Link to="#">
                                                                <span className="app-color">Resend Code</span>
                                                            </Link>
                                                        </div>
                                                        <hr className="p-mb-3"/>
                                                    </div>

                                                    <Button type="submit" label="Submit" className="appcolor continue-btn"/>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SecurityVerification;
