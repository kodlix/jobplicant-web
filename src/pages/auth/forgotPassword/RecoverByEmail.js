import React from 'react';
import { Link } from 'react-router-dom';
import './ForgotPassword.css';

const RecoverByEmail = () => {
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
                                <h3 className="jobplicant-title p-mb-1">Recover your password</h3>
                                <p className="p-text-secondary">An Email has been sent to you to reset your password.</p>
                            </div>
                            <div className="form-group">
                                <Link to="/Login" className="p-mt-2 p-text-secondary back-button">Back to Login</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default RecoverByEmail;