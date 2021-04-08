import React from 'react';
import './ConfirmationPage.css'
import { InputText } from 'primereact/inputtext';
import { RadioButton } from 'primereact/radiobutton';
import { Link } from 'react-router-dom';

import { Button } from 'primereact/button';



const ConfirmationPage = ({ }) => {
    return (
        <>
            <div className="p-grid">
                <div className="p-col bgimage login-pane-left p-col-12 p-md-8 p-lg-8">
                </div>
                {/* <section className="left-pane-content">
                    <h1> jobplicant for every one in need of rendering or providing services</h1>
                    <p> A platform for every one, no matter  your type of job, we got you covered.</p>

                </section> */}
                <div className="login-pane-right p-col-12 p-md-4 p-lg-4">
                    <div class="brand-logo text-center">
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
                                        <InputText type="text" className="form-control p-ml-6 p-mr-6" name="companyname" placeholder="Company Name" />
                                    </div>
                                </form>
                                <div className="sendsms p-text-secondary message"><Link to="#"><span >Send SMS Again</span></Link></div>
                                <hr className="p-mb-6" />
                                <div className="confirmbtn p-grid">
                                    <Button label="Update Contact Info" className="p-button-secondary p-ml-3" />
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