import React, { useState } from 'react';
import './ConfirmationPage.css'
import { InputText } from 'primereact/inputtext';
import { Link } from 'react-router-dom';
import './Carousel.css';


import { Button } from 'primereact/button';




const ConfirmationPage = () => {

    const [sliderImage] = useState([{ image1: '../../assets/images/workspace.jpg', altImage1: "worksplace" },
    { image2: '../../assets/images/loginimg.jpg', altImage2: "loading" }])


    console.log({ sliderImage });
    return (
        <>
            <div className="p-fluid">
                <div className="p-grid p-mx-0">
                    <div className="login-pane-left p-col-12 p-md-7 p-lg-8 p-xl-8 small-screen">
                        <div className="left-content">
                            <div><h1 className="p-mb-0 p-text-center title">Joplicant Home for all</h1></div>
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
                    <div className="login-pane-right p-col-12 p-md-5 p-lg-4">
                        <div className="logo-container">
                            <img src="/assets/logo.png" width="150" alt="brand-logo" />
                        </div>
                        <div className="">
                            <div className="panel-login text-center">
                            </div>
                            <div className="panel-signup text-center">
                                <section>
                                    <div className="authfy-heading message">
                                        <h3 className="login-title p-m-5">Enter the code from the SMS message</h3>
                                    </div>
                                    <div className="p-field message">
                                        <div className="p-m-4">  <p>Let us know if this mobile number belongs to you.
                                             Enter the code in the SMS sent to <b>0807 923 2514</b> (Nigeria).</p></div>
                                    </div>
                                </section>
                                <form>
                                    <div className="p-fluid">
                                        <div className="p-field">
                                            <InputText type="text"
                                                name="companyname"
                                                placeholder="Enter Code" />
                                        </div>
                                        <div className="sendsms message font-weight-bold"><Link to="#"><span className="app-color">Send SMS again</span></Link></div>
                                        <hr className="p-mb-3" />
                                    </div>
                                    <div className="row">
                                        <div className="p-col-7">
                                            <Link to="/register">
                                                <Button label="Update Contact Info" className="appcolor label" /> </Link>
                                        </div>
                                        <div className="p-col-5">
                                            <Button label="Continue" className="p-button-success continue-btn" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ConfirmationPage;