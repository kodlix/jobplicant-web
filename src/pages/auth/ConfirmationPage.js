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
                <div className="p-col bgimage">
                </div>
                <div className="p-col-fixed login-pane-right">
                    <div class="brand-logo text-center">
                        <img src="/assets/logo.png" width="150" alt="brand-logo" />
                    </div>
                    <div className="authfy-login">
                        <div className="authfy-panel panel-login text-center active">
                        </div>
                        <div className="authfy-panel panel-signup text-center">
                            <div className="row">
                                <div className="col-xs-12 col-sm-12">
                                    <div className="authfy-heading">
                                        <h3 className="login-title p-m-5">Enter the code from the SMS message</h3>
                                    </div>
                                    <div className=" p-field">

                                        <div className="p-m-4">  <p>Let us know if this mobile number belongs to you.
                                             Enter the code in the SMS sent to <b>0807 923 2514</b> (Nigeria).</p></div>

                                        <div className="p-field p-grid">
                                            <InputText type="text" className="form-control p-ml-6 p-mr-6" name="companyname" placeholder="Company Name" />
                                        </div>
                                    </div>
                                    <div className="sendsms p-text-secondary"><span >Send SMS Again</span></div>
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
            </div>
        </>
    )
}

export default ConfirmationPage;