import React from 'react';
import { Link } from 'react-router-dom';
import './ForgotPassword.css';

const RecoverByEmail = () => {
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
                                <h3 className="jobplicant-title p-mb-1 text-center">Recover your password</h3>
                                <p className="p-text-secondary text-center">An Email has been sent to you to reset your password.</p>
                            </div>
                            <div className="d-flex justify-content-around">
                                <Link to="/Login" className="p-text-secondary back-button font-weight-bold">Back to Login</Link>
                                <Link to="#" className="p-ml-2"><i className="pi pi-undo app-color" ></i> <small className="app-color font-weight-bold">Resend email</small></Link>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default RecoverByEmail;