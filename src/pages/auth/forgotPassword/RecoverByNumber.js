import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import './ForgotPassword.css';

const ResetPassword = () => {
    return (
        <>
            <div className="p-fluid">
                <div className="p-grid p-mx-0">
                    <div className="p-col-12 p-md-7 p-lg-8 jobplicant-panel-left p-p-0">
                        <div className="p-col bgimage">
                        </div>
                    </div>
                    <div className="p-col-12 p-md-5 p-lg-4 jobplicant-panel-right">
                        <div className="logo-container">
                            <img src="../../assets/logo.png" alt="Logo" className="reponsive-logo" width="150" />
                        </div>
                        <div className="jobplicant-panel">
                            <div className="jobplicant-heading">
                                <h3 className="jobplicant-title p-mb-1 text-white">Recover your password</h3>
                                <p>Please enter the code sent to your mobile number <b>(08125649573)</b></p>
                            </div>
                            <form>
                                <div className="p-fluid">
                                    <div className="p-field">
                                        <InputText id="enterCode" type="text" placeholder="Enter Code" />
                                        <a href="#" className="p-ml-2"><i class="pi pi-undo"></i> <small>Resend code</small></a>
                                    </div>
                                    <Button label="Reset Password" className="form-group p-button-secondary" />
                                    <div className="form-group">
                                        <Link to="/login">Back</Link>
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

export default ResetPassword;