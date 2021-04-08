import React, { useState } from 'react';
import './Register.css'
import { InputText } from 'primereact/inputtext';
import { RadioButton } from 'primereact/radiobutton';
import { Link } from 'react-router-dom';

import { Button } from 'primereact/button';



const Register = ({ }) => {

    const [gender, setGender] = useState(null)
    return (
        <>
            <div className="p-grid">
                <div className="p-col bgimage p-col-12 p-md-8 p-lg-8">
                </div>
                <div className="login-pane-right p-col-12 p-md-4 p-lg-4">
                    <div class="brand-logo text-center">
                        <img src="/assets/logo.png" width="150" alt="brand-logo" />
                    </div>
                    <div className="">
                        <div className=" panel-login text-center active">
                        </div>
                        <div className="panel-signup text-center">
                            <div className="">
                                <div className="authfy-heading">
                                    <h3 className="login-title p-mb-5">Sign up for free!</h3>
                                </div>
                                <form name="signupForm" className="signupForm p-field">

                                    <div className="p-field p-grid">
                                        <InputText type="text" className="form-control p-ml-6 p-mr-6" name="newpassword" placeholder="First Name" />
                                    </div>
                                    <div className="p-field p-grid">
                                        <InputText type="text" className="form-control p-ml-6 p-mr-6" name="newpassword" placeholder="Last Name" />
                                    </div>

                                    <div className="p-field p-grid">
                                        <InputText type="text" className="form-control p-ml-6 p-mr-6" name="numberoremail" placeholder="Mobile number or email address" />
                                    </div>
                                    <div className="p-field p-grid">
                                        <InputText type="text" className="form-control p-ml-6 p-mr-6" name="newpassword" placeholder="New password" />
                                    </div>
                                    <div className="p-field p-grid">
                                        <InputText type="text" className="form-control p-ml-6 p-mr-6" name="companyname" placeholder="Company Name" hidden={false} />
                                    </div>

                                    <div><label htmlFor="city7" style={{ marginRight: 339, }} className="p-mb-2 p-text-bold p-ml-6" > Gender</label> </div>

                                    <div className="p-formgroup-inline p-ml-6">

                                        <div className="p-field-checkbox">
                                            <RadioButton inputId="male" name="gender" value="male" onChange={(e) => setGender(e.value)} checked={gender === 'male'} />
                                            <label htmlFor="female">Female</label>
                                        </div>
                                        <div className="p-field-checkbox">
                                            <RadioButton inputId="female" name="gender" value="female" onChange={(e) => setGender(e.value)} checked={gender === 'female'} />
                                            <label htmlFor="male">Male</label>
                                        </div>
                                        <div className="p-field-checkbox">
                                            <RadioButton inputId="custom" name="gender" value="custom" onChange={(e) => setGender(e.value)} checked={gender === 'custom'} />
                                            <label htmlFor="custom">Custom</label>
                                        </div>
                                        <div>
                                            <p className="term-policy small p-mb-3 p-mr-5 text-black">By clicking Sign Up, you agree to our <Link to="">Terms, Data Policy</Link>
                                                 and <Link to="">Cookie Policy.</Link> You may receive SMS
                                                notifications from us and can opt out at any time.</p>

                                        </div>
                                    </div>
                                    <div className="p-grid">
                                        <Button label="Sign up with email" className="signupbtn p-button-secondary p-col-10" />
                                    </div>

                                </form>
                                <Link to="/Login" className="lnk-toggler p-text-secondary" data-panel=".panel-login" href="#">Already have an account?</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register;