import React from 'react';
import './Login.css'
import { InputText } from 'primereact/inputtext';
import { RadioButton } from 'primereact/radiobutton';
import { Link } from 'react-router-dom';
// import { Dropdown } from 'primereact/dropdown';
// import './DropdownDemo.css';

import { Button } from 'primereact/button';

// import { Accordion, AccordionTab } from 'primereact/accordion';


const Login = ({ }) => {
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
                            <div className="authfy-heading">
                                <h3 className="auth-title text-white">Login to your account</h3>
                                <p className="p-m-4">Don’t have an account? <Link className="lnk-toggler " data-panel=".panel-signup" to="/register">Sign Up Free!</Link></p>
                            </div>
                            <div className="p-grid p-mt-2 p-pb-6 ">
                                <div className="p-col-6 socialmedia facebook">
                                    <Link className="p-pb-4 ">
                                        <i className="pi pi-facebook p-pt-3" style={{ fontSize: 40 }}></i>
                                    </Link>
                                </div>
                                <div className="p-col-6 socialmedia google">
                                    <Link to="#" className="">
                                        <i className="pi pi-google p-pt-3 " style={{ fontSize: 40 }}></i>
                                    </Link>
                                </div>
                            </div>
                            {/* <div className="row loginOr p-mb-2">
                                <div className="col-xs-12 col-sm-12">
                                    <span className="spanOr">or</span>
                                </div>
                            </div> */}
                            <div className="p-grid">
                                <div className="col-xs-12 col-sm-12">
                                    <form name="loginForm" className="loginForm">
                                        <div className="p-field p-grid">
                                            <InputText type="text" className="form-control p-ml-6 p-mr-6" name="numberoremail" placeholder="Mobile number or email address" />
                                        </div>
                                        <div className="p-field p-grid">
                                            <InputText type="text" className="form-control p-ml-6 p-mr-6" name="newpassword" placeholder="Last Name" />
                                        </div>

                                        <div className="row remember-row">
                                            <div className="col-6 col-xs-3 ">
                                                <label className="checkbox text-left">
                                                    <input type="checkbox" value="remember-me" /><span className="label-text p-ml-1">Remember me</span>
                                                </label>
                                            </div>
                                            <div className="col-6 col-xs-3 ">
                                                <p className="forgotPwd col-xs-2">
                                                    <a className="lnk-toggler" data-panel=".panel-forgot" href="#">Forgot password?</a>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="p-grid p-mt-2">
                                            <Button label="Login" className="loginbtn p-button-secondary p-col-10" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>


                        {/* <div className="p-formgroup-inline p-ml-5 fandlname">
                        <div className="authfy-panel panel-signup text-center">
                            <div className="row">
                                <div className="col-xs-12 col-sm-12">
                                    <div className="authfy-heading">
                                        <h3 className="login-title p-mb-5 p-text-secondary">Sign up for free!</h3>
                                    </div>
                                    <form name="signupForm" className="signupForm p-field">
                                            <div className="p-field ">
                                                <label htmlFor="firstname5" className="p-sr-only">Firstname</label>
                                                <InputText id="firstname5" type="text" lassName="form-control p-ml-6" placeholder="Firstname" />
                                            </div>
                                            <div className="p-field">
                                                <label htmlFor="lastname5" className="p-sr-only">Lastname</label>
                                                <InputText id="lastname5" type="text" placeholder="Lastname" />
                                            </div>
                                        </div> */}
                        {/* <div className="p-field p-grid">
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
                                            <InputText type="text" className="form-control p-ml-6 p-mr-6" name="companyname" placeholder="Company Name" />
                                        </div>



                                        <div><label htmlFor="city7" style={{ marginRight: 339, }} className="p-mb-2 p-text-bold" > Gender</label> </div>

                                        <div className="p-formgroup-inline p-ml-6">

                                            <div className="p-field-checkbox">
                                                <RadioButton inputId="city5" name="gender" value="female" />
                                                <label htmlFor="city7">Female</label>
                                            </div>
                                            <div className="p-field-checkbox">
                                                <RadioButton inputId="city6" name="gender" value="male" />
                                                <label htmlFor="city6">Male</label>
                                            </div>
                                            <div className="p-field-checkbox">
                                                <RadioButton inputId="city7" name="gender" value="custom" />
                                                <label htmlFor="city7">Custom</label>
                                            </div>
                                            <div>
                                                <p className="term-policy small p-mb-3 p-mr-5">By clicking Sign Up, you agree to our <Link to="">Terms, Data Policy</Link>
                                                 and <Link to="">Cookie Policy.</Link> You may receive SMS
                                                notifications from us and can opt out at any time.</p>

                                            </div>
                                        </div> */}

                        {/* <div className="p-formgroup-inline p-ml-5">
                                            <div className="p-field">
                                                <label htmlFor="firstname5" className="p-sr-only">Firstname</label>
                                                <InputText id="firstname5" type="number" lassName="form-control" placeholder="Firstname" />
                                            </div>
                                            <div className="p-field ">
                                                <label htmlFor="lastname5" className="p-sr-only">Lastname</label>
                                                <InputText id="firstname5" type="number" lassName="form-control" placeholder="Firstname" />
                                            </div>
                                            <div className="p-field">
                                                <label htmlFor="lastname5" className="p-sr-only">Lastname</label>
                                                <InputText id="lastname5" type="text" placeholder="Lastname" />
                                            </div>
                                        </div> */}

                        {/* 
                                        <div className="p-formgroup-inline">
                                            <span className="p-field-checkbox">
                                                <label htmlFor="firstname5" className="p-sr-only">Female</label>
                                                <RadioButton id="firstname5" type="radio" lassName="form-control p-ml-6" placeholder="Firstname" />
                                            </span>
                                            <div className="p-field-checkbox">
                                                <label htmlFor="lastname5" className="p-sr-only">Male</label>
                                                <RadioButton id="lastname5" type="radio" placeholder="Lastname" />
                                            </div>
                                            <span className="p-field-checkbox">
                                                <label htmlFor="lastname5" className="p-sr-only">Custom</label>
                                                <RadioButton id="lastname5" type="radio" placeholder="Lastname" />
                                            </span>
                                        <div className="p-grid">
                                            <Button label="Sign up with email" className="signupbtn p-button-secondary p-col-10" />
                                        </div>

                                    </form>
                                    <a className="lnk-toggler p-text-secondary" data-panel=".panel-login" href="#">Already have an account?</a>
                                </div>
                            </div>
                        </div>
                                    </div> */}

                        {/* <div className="p-fluid">
                                <div className="p-field p-grid">
                                    <label htmlFor="firstname4" className="p-col-12 p-md-2">Firstname</label>
                                    <div className="p-col-12 p-md-10">
                                        <InputText id="firstname4" type="text" />
                                    </div>
                                </div>
                                <div className="p-field p-grid">
                                    <label htmlFor="lastname4" className="p-col-12 p-md-2">Lastname</label>
                                    <div className="p-col-12 p-md-10">
                                        <InputText id="lastname4" type="text" />
                                    </div>
                                </div>
                            </div> */}





                        {/* <div className="authfy-panel panel-forgot">
                            <div className="row">
                                <div className="col-xs-12 col-sm-12">
                                    <div className="authfy-heading">
                                        <h3 className="auth-title">Recover your password</h3>
                                        <p>Fill in your e-mail address below and we will send you an email with further instructions.</p>
                                    </div>
                                    <form name="forgetForm" className="forgetForm" action="#" method="POST">
                                        <div className="form-group">
                                            <input type="email" className="form-control" name="username" placeholder="Email address" />
                                        </div>
                                        <div className="form-group">
                                            <button className="btn btn-lg btn-primary btn-block" type="submit">Recover your password</button>
                                        </div>
                                        <div className="form-group">
                                            <a className="lnk-toggler" data-panel=".panel-login" href="#">Already have an account?</a>
                                        </div>
                                        <div className="form-group">
                                            <a className="lnk-toggler" data-panel=".panel-signup" href="#">Don’t have an account?</a>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>

            </div >
        </>
    )
}

export default Login;