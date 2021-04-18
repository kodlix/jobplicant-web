import React, { useState } from 'react';
import './ConfirmationPage.css'
import { InputText } from 'primereact/inputtext';
import { Link } from 'react-router-dom';
import './Carousel.css';


import { Button } from 'primereact/button';




const ConfirmationPage = ({ }) => {

    const [sliderImage] = useState([{ image1: '../../assets/images/workspace.jpg', altImage1: "worksplace" },
    { image2: '../../assets/images/loginimg.jpg', altImage2: "loading" }])


    console.log({ sliderImage });
    return (
        <>
            <div className="p-grid">
                <div className="login-pane-left p-col-12 p-md-8 p-lg-8 p-xl-8">
                    <div className="left-content">

                        <div><h1 className="p-mb-6 p-mt-6 p-text-center text-white">Joplicant Home for all</h1></div>
                        <div>
                            <section>
                                <p> <h3 className="text-white p-text-center"> Job seekers, Artisan, Employer</h3></p>
                            </section>

                            <section className="p-mt-6 p-text-center">
                                <p>Artisans meets employers, you need to get a skilled worker for that urgent need? not too worry, </p>
                                <p>Employeers find employees you need to get a skilled worker for that urgent need? not too worry, </p>
                                <p>Employees find the right jobs you need to get a skilled worker for that urgent need? not too worry, </p>
                            </section>

                        </div>
                        <div>
                            <section className="p-text-center">
                                <p>you need to get a skilled worker for that urgent need? not too worry, Instant Job Hire is all you need to connect to the right person within you.</p>
                            </section>
                        </div>
                    </div>

                </div>
                <div className="login-pane-right p-col-12 p-md-4 p-lg-4">
                    <div className="brand-logo text-center">
                        <img src="/assets/logo.png" width="150" alt="brand-logo" />
                    </div>
                    <div className="authfy-login">
                        <div className="authfy-panel panel-login text-center active">
                        </div>
                        <div className="authfy-panel panel-signup text-center">
                            <div className="">
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
                                    <div className="p-field p-grid inputfield">
                                        <InputText type="text" className="form-control p-ml-6 p-mr-6" name="companyname" placeholder="Enter Code" />
                                    </div>
                                </form>
                                <div className="sendsms p-text-secondary message font-weight-bold"><Link to="#"><span >Send SMS Again</span></Link></div>
                                <hr className="p-mb-6" />
                                <div className="confirmbtn p-grid">
                                    <Link to="/register">
                                        <Button label="Update Contact Info" className="p-ml-3 appcolor" /> </Link>
                                    <Button label="Continue" className="p-button-success p-ml-3" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ConfirmationPage;