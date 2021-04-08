import React from 'react';
import './Login.css'
import { InputText } from 'primereact/inputtext';
import { RadioButton } from 'primereact/radiobutton';
import { Link } from 'react-router-dom';
// import { Dropdown } from 'primereact/dropdown';
// import './DropdownDemo.css';

import { Button } from 'primereact/button';


const Login = ({ }) => {
    return (
        <>
            <div className="p-grid smallscreen">
                <div className="p-col bgimage login-pane-left p-col-12 p-md-8 p-lg-8">
                </div>
                <div className="login-pane-right p-col-12 p-md-4 p-lg-4">
                    <div class="brand-logo text-center">
                        <img src="/assets/logo.png" width="150" alt="brand-logo" />
                    </div>
                    <div className="authfy-login">
                        <div className="authfy-panel panel-login text-center">

                            <div className="">
                                <div className="authfy-heading p-mt-6 p-mb-5">
                                    <h3 className="auth-title">Login to your account</h3>
                                    <p className="p-m-4 ">Don’t have an account? <Link className="lnk-toggler " data-panel=".panel-signup" to="/register">Sign Up Free!</Link></p>
                                </div>
                                <div className="p-grid p-mt-2 p-pb-5 ">
                                    <div className="p-col-6 socialmedia facebook">
                                        <Link className="">
                                            <i className="pi pi-facebook p-pt-1" style={{ fontSize: 30 }}></i>
                                        </Link>
                                    </div>
                                    <div className="p-col-6 socialmedia google">
                                        <Link to="#" className="">
                                            <i className="pi pi-google p-pt-1 " style={{ fontSize: 30 }}></i>
                                        </Link>
                                    </div>
                                </div>

                                <div class="p-col-xs-12 p-col-sm-12 p-mb-5">
                                    <span class="spanOr">or</span>
                                </div>

                                <form name="loginForm" className="loginForm">
                                    <div className="p-field p-grid">
                                        <InputText type="text" className="form-control p-ml-6 p-mr-6" name="numberoremail" placeholder="Mobile number or email address" />
                                    </div>
                                    <div className="p-field p-grid">
                                        <InputText type="text" className="form-control p-ml-6 p-mr-6 input-container-pass" name="newpassword" placeholder="Password " />
                                        {/* <span> <i className="pi-eye-slash"></i></span>
                                            <span class="fa fa-eye-slash pwd-toggle"></span> */}
                                    </div>

                                    <div className="row remember-row p-m-4">
                                        <div className="col-6 col-xs-3 ">
                                            <label className="checkbox text-left">
                                                <input type="checkbox" value="remember-me" /><span className="label-text p-ml-1">Remember me</span>
                                            </label>
                                        </div>
                                        <div className="col-6 col-xs-3 p-mb-3 ">
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
                </div>

            </div >
        </>
    )
}

export default Login;