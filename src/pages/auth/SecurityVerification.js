import { getLocation } from 'connected-react-router';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { registerUser } from 'store/modules/auth';

import './SecurityVerification.css'


const SecurityVerification = ({ goto, setAccountType }) => {
    const setSelectedAccountType = (type, e) => {
        if (e.target.checked) {
            setAccountType(type)
        }
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
                                    {/* <h5 className="card-title">Security Verification</h5> */}

                                    <div className="login-pane-right p-4">
                                        {/* <div className="logo-container">
                                            <img src="/assets/logo.png" width="150" alt="brand-logo" />
                                        </div> */}
                                        <div className="">
                                            <div className="panel-login text-center">
                                            </div>
                                            <div className="panel-signup ">
                                                <section>
                                                    <div className="authfy-heading message">
                                                        <h4 className="">Enter the code  that was sent to your email </h4>
                                                    </div>
                                                    <div className="p-field message p-text-secondary">
                                                        <div className="p-mt-4"> <p>To finish your registration,
                                                             please enter the verification code we gave you.It might take a few minutes to receive your code.</p></div>
                                                    </div>
                                                </section>
                                                <form>
                                                    <div className="p-fluid">
                                                        <div className="p-field">
                                                            <InputText type="text"
                                                                name="companyname"
                                                                placeholder="Enter code" />
                                                        </div>
                                                        <div className="font-weight-bold"><Link to="#"><span className="app-color">Resend Code</span></Link></div>
                                                        <hr className="p-mb-3" />
                                                    </div>

                                                    <Button label="Submit" className="appcolor continue-btn" />
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer text-muted font-weight-bold text-center">
                                    STEP 1/3
                                </div>
                                {/* <div className=" text-right p-2 px-10">
                                    <button type="button" className="btn btn-primary"
                                        onClick={
                                            () => goto(2)
                                        }>Next</button>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SecurityVerification;
