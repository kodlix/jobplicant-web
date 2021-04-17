import React from 'react';
import { Link } from 'react-router-dom';
import './EmailConfirmation.css'


const EmailConfirmation = () => {
    // const dispatch = useDispatch();

    // const userEmail = useSelector(state => state.auth.currentUser.email);


    // TODO Bind user email to the message displayed to user.





    return (
        <>
            <div className="verify-content">
                {/* <div className="p-col bgimage login-pane-left p-col-12 p-md-8 p-lg-8">
                </div> */}
                {/* <div className="login-pane-left p-col-12 p-md-8 p-lg-8 p-xl-8">
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

                </div> */}
                {/* <div className="login-pane-right p-col-12 p-md-4 p-lg-4"> */}
                {/* <div className="brand-logo text-center">
                        <img src="/assets/logo.png" width="150" alt="brand-logo" />
                    </div> */}
                {/* <div className=""> */}
                <div className="panel-login">

                    {/* <div className="p-mt-6 p-mb-5">
                            <h3 className="auth-title"> Verifiction Link Sent</h3>
                        </div> */}

                    <div className="">
                        <div>
                            <h3 className="p-text-secondary text-center"> A verification link has been sent to your email account</h3>
                            <hr className="verify" />
                        </div>

                        <p className="feedback p-mt-6 verifycontent">We now need to verify your email address, we've sent an email to
                            verify your email address. kindly click the link in that email to continue.</p>
                    </div>
                </div>

                <div className="confirmbtn p-grid">
                    <Link to="/login">
                        < span className="p-p-4 p-text-primary resendemail"> Resend email </span>  </Link>
                    {/* <Link>
                                <span className="p-p-4 p-text-secondary ">Back</span>
                            </Link> */}
                </div>
                {/* </div> */}
            </div>

            {/* </div > */}
        </>
    )
}

export default EmailConfirmation;
