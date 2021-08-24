import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';


const LandingPage = () => {
    return (
        <>
            <header className="header">
                <div className="navbar-area">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-12">
                                <nav className="navbar navbar-expand-lg py-2">
                                    <Link className="navbar-brand logo" to="index.html">
                                        <img className="logo1" src="assets/logo.png" alt="Logo" />
                                    </Link>
                                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="toggler-icon"></span>
                                        <span className="toggler-icon"></span>
                                        <span className="toggler-icon"></span>
                                    </button>
                                    <div className="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent"></div>

                                    <div className="button">
                                        <div><Link to="/login" className="login">  <span><i className="lni lni-lock-alt"></i></span>
                                            Login</Link></div>
                                        <div> <Link to="/register" className="btn">Sign Up</Link></div>
                                    </div>
                                </nav>
                            </div>
                        </div>

                    </div>
                </div>
            </header>

            <section className="hero-area style2">
                <div className="hero-inner">
                    <div className="home-slider">
                        <div className="single-slider">
                            <div className="container">
                                <div className="row ">
                                    <div className="col-lg-6 co-12">
                                        <div className="inner-content">
                                            <div className="hero-text">
                                                <h1 className="wow fadeInUp prim" data-wow-delay=".3s">Find Your Career
                                                    <br />to Make a
                                                    Better Life
                                                </h1>
                                                <p className="wow fadeInUp" data-wow-delay=".5s">Creating a beautiful job website is
                                                    not
                                                    easy always. To make your life easier we are introducing Jobcamp template,
                                                    Leverage agile frameworks to high level overviews.
                                                </p>
                                                <div className="button wow fadeInUp" data-wow-delay=".7s">
                                                    <Link to="#" className="btn">Post a Job</Link>
                                                    <Link to="#" className="btn btn-alt green-back">See Our Jobs</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 co-12">
                                        <div className="hero-image wow fadeInRight" data-wow-delay=".4s">
                                            <img src="assets/images/hero/banner.png" alt="#" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="single-slider">
                            <div className="container">
                                <div className="row ">
                                    <div className="col-lg-6 co-12">
                                        <div className="inner-content">
                                            <div className="hero-text">
                                                <h1 className="wow fadeInUp" data-wow-delay=".3s">Find Your Career
                                                    <br />to Make a
                                                    Better Life
                                                </h1>
                                                <p className="wow fadeInUp" data-wow-delay=".5s">Creating a beautiful job website is
                                                    not
                                                    easy always. To make your life easier we are introducing Jobcamp template,
                                                    Leverage agile frameworks to high level overviews.
                                                </p>
                                                <div className="button wow fadeInUp" data-wow-delay=".7s">
                                                    <Link to="#" className="btn">Post a Job</Link>
                                                    <Link to="#" className="btn btn-alt">See Our Jobs</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 co-12">
                                        <div className="hero-image wow fadeInRight" data-wow-delay=".ss">
                                            <img src="assets/images/hero/job-searcher.jpg" alt="#" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <section className="apply-process section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-12">
                            <div className="process-item">
                                <i className="lni lni-user"></i>
                                <h4>Employer</h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-12">
                            <div className="process-item">
                                <i className="lni lni-book"></i>
                                <h4>Hand - Worker</h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-12">
                            <div className="process-item">
                                <i className="lni lni-briefcase"></i>
                                <h4>Corporate - Workers</h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="job-category section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-title">
                                <span className="wow fadeInDown" data-wow-delay=".2s">Job Category</span>
                                <h2 className="wow fadeInUp" data-wow-delay=".4s">Choose Your Desire Category</h2>
                                <p className="wow fadeInUp" data-wow-delay=".6s">There are many variations of passages of Lorem
                                    Ipsum available, but the majority have suffered alteration in some form.</p>
                            </div>
                        </div>
                    </div>
                    <div className="cat-head">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-12">
                                <Link to="browse-jobs.html" className="single-cat wow fadeInUp" data-wow-delay=".2s">
                                    <div className="icon">
                                        <i className="lni lni-cog"></i>
                                    </div>
                                    <h3>Artisan<br />
                                        Job-seekers</h3>
                                </Link>
                            </div>


                            <div className="col-lg-3 col-md-6 col-12">
                                <Link to="browse-jobs.html" className="single-cat wow fadeInUp" data-wow-delay=".4s">
                                    <div className="icon">
                                        <i className="lni lni-restaurant"></i>
                                    </div>
                                    <h3>Corporate <br />
                                        Employer
                                    </h3>
                                </Link>
                            </div>
                            <div className="col-lg-3 col-md-6 col-12">
                                <Link to="browse-jobs.html" className="single-cat wow fadeInUp" data-wow-delay=".6s">
                                    <div className="icon">
                                        <i className="lni lni-restaurant"></i>
                                    </div>
                                    <h3>Corporate
                                        <br />
                                        Job</h3>
                                </Link>
                            </div>
                            <div className="col-lg-3 col-md-6 col-12">
                                <Link to="browse-jobs.html" className="single-cat wow fadeInUp" data-wow-delay=".8s">
                                    <div className="icon">
                                        <i className="lni lni-fireworks"></i>
                                    </div>
                                    <h3>Instant Job
                                        <br />
                                        Hire</h3>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="hero-area style3 bg-white">
                <div className="hero-inner">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7 co-12">
                                <div className="inner-content">
                                    <div className="hero-text">
                                        <h1 className="wow fadeInUp" data-wow-delay=".3s">Find the Most Exciting<br />
                                            Jobs to Make a
                                            Better Life
                                        </h1>
                                        <p className="wow fadeInUp" data-wow-delay=".5s">Creating a beautiful job website is not
                                            easy always. To make<br />
                                            your life easier, we are introducing Jobcamp template,<br />
                                            Leverage agile frameworks to provide a robust<br />
                                            synopsis for high level overviews.
                                        </p>
                                        <div className="button wow fadeInUp" data-wow-delay=".7s">
                                            <Link to="#" className="btn">Post a Job</Link>
                                            <Link to="#" className="btn btn-alt">See Our Jobs</Link>
                                        </div>
                                    </div>
                                    <div className="job-search-wrap-two mt-50 wow fadeInUp" data-wow-delay=".9s">
                                        <div className="trending-keywords mt-30">
                                            <div className="keywords style-two">
                                                <span className="title">Popular Keywords:</span>
                                                <ul>
                                                    <li><Link to="#">Administrative</Link></li>
                                                    <li><Link to="#">Android</Link></li>
                                                    <li><Link to="#">app</Link></li>
                                                    <li><Link to="#">ASP.NET</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5 offset-lg-0 col-md-8 offset-md-2 co-12">
                                <form className="home-search wow fadeInRight" data-wow-delay=".5s">
                                    <div className="form-group">
                                        <label className="font-weight-bold text-dark">What?</label>
                                        <div className=" form-location">
                                            <input type="text" className="form-control" placeholder="What are you looking for..." />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="font-weight-bold text-dark">Where?</label>
                                        <div className="form-location">
                                            <input type="text" className="form-control" placeholder="Where..." />
                                        </div>
                                    </div>
                                    <div className="form-group select-border">
                                        <label className="font-weight-bold text-dark">Choose Category?</label>
                                        <select className="form-control basic-select">
                                            <option>All categories
                                            </option>
                                            <option>Finance
                                            </option>
                                            <option>Sale/Markting
                                            </option>
                                            <option>Education/Training
                                            </option>
                                            <option>Technologies</option>
                                            <option>Art/Design</option>
                                            <option>Healthcare</option>
                                        </select>
                                    </div>
                                    <div className="button">
                                        <Link className="btn green-back" to="#">
                                            Search
                                        </Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="call-action overlay section">
                <div className="container">
                    <div className="row ">
                        <div className="col-lg-8 offset-lg-2 col-12">
                            <div className="inner">
                                <div className="section-title">
                                    <span className="wow fadeInDown" data-wow-delay=".2s">GETTING STARTED TO WORK</span>
                                    <h2 className="wow fadeInUp" data-wow-delay=".4s">Don’t just find. Be found. Put your
                                        CV in front of great employers</h2>
                                    <p className="wow fadeInUp" data-wow-delay=".6s">It helps you to increase your chances of
                                        finding a suitable job and let recruiters contact you
                                        about jobs that are not needed to pay for advertising.</p>
                                    <div className="button wow fadeInUp" data-wow-delay=".8s">
                                        <Link to="add-resume.html" className="btn">
                                            <i className="lni lni-upload"></i>
                                            Upload Your
                                            Resume</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="find-job section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-title">
                                <span className="wow fadeInDown" data-wow-delay=".2s">Hot Jobs</span>
                                <h2 className="wow fadeInUp" data-wow-delay=".4s">Browse Recent Jobs</h2>
                                <p className="wow fadeInUp" data-wow-delay=".6s">There are many variations of passages of Lorem
                                    Ipsum available, but the majority have suffered alteration in some form.</p>
                            </div>
                        </div>
                    </div>
                    <div className="single-head">
                        <div className="row">
                            <div className="col-lg-6 col-12">



                                <div className="single-job wow fadeInUp" data-wow-delay=".3s">
                                    <div className="job-image">
                                        <img src="assets/images/jobs/img3.png" alt="#" />
                                    </div>
                                    <div className="job-content">
                                        <h4>
                                            <Link to="job-details.html">Ui/Ux Design</Link>
                                        </h4>
                                        <p>We are looking for Enrollment Advisors who are looking to take 30-35 appointments per
                                            week. All leads are pre-scheduled.
                                        </p>
                                        <ul>
                                            <li>
                                                <i className="lni lni-website"></i>
                                                <Link to="#">
                                                    uddesign.com</Link>
                                            </li>
                                            <li>
                                                <i className="lni lni-dollar"></i>
                                                $20k - $25k</li>
                                            <li>
                                                <i className="lni lni-map-marker"></i>
                                                Cupertino, USA</li>
                                        </ul>
                                    </div>
                                    <div className="job-button">
                                        <ul>
                                            <li>
                                                <Link to="job-details.html">Apply</Link>
                                            </li>
                                            <li>
                                                <span>Part Time</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>


                                <div className="single-job wow fadeInUp" data-wow-delay=".3s">
                                    <div className="job-image">
                                        <img src="assets/images/jobs/img4.png" alt="#" />
                                    </div>
                                    <div className="job-content">
                                        <h4>
                                            <Link to="job-details.html">Web Developer</Link>
                                        </h4>
                                        <p>We are looking for Enrollment Advisors who are looking to take 30-35 appointments per
                                            week. All leads are pre-scheduled.
                                        </p>
                                        <ul>
                                            <li>
                                                <i className="lni lni-website"></i>
                                                <Link to="#">
                                                    webinner.com</Link>
                                            </li>
                                            <li>
                                                <i className="lni lni-dollar"></i>
                                                $20k - $25k</li>
                                            <li>
                                                <i className="lni lni-map-marker"></i>
                                                Delaware, USA</li>
                                        </ul>
                                    </div>
                                    <div className="job-button">
                                        <ul>
                                            <li>
                                                <Link to="job-details.html">Apply</Link>
                                            </li>
                                            <li>
                                                <span>Intern</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                            <div className="col-lg-6 col-12">


                                <div className="single-job wow fadeInUp" data-wow-delay=".5s">
                                    <div className="job-image">
                                        <img src="assets/images/jobs/img6.png" alt="#" />
                                    </div>
                                    <div className="job-content">
                                        <h4>
                                            <Link to="job-details.html">Product Designer</Link>
                                        </h4>
                                        <p>We are looking for Enrollment Advisors who are looking to take 30-35 appointments per
                                            week. All leads are pre-scheduled.
                                        </p>
                                        <ul>
                                            <li>
                                                <i className="lni lni-website"></i>
                                                <Link to="#">
                                                    winbrans.com</Link>
                                            </li>
                                            <li>
                                                <i className="lni lni-dollar"></i>
                                                $20k - $25k</li>
                                            <li>
                                                <i className="lni lni-map-marker"></i>
                                                New York, USA</li>
                                        </ul>
                                    </div>
                                    <div className="job-button">
                                        <ul>
                                            <li>
                                                <Link to="job-details.html">Apply</Link>
                                            </li>
                                            <li>
                                                <span>full time</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>


                                <div className="single-job wow fadeInUp" data-wow-delay=".5s">
                                    <div className="job-image">
                                        <img src="assets/images/jobs/img8.png" alt="#" />
                                    </div>
                                    <div className="job-content">
                                        <h4>
                                            <Link to="job-details.html">Android Developer</Link>
                                        </h4>
                                        <p>We are looking for Enrollment Advisors who are looking to take 30-35 appointments per
                                            week. All leads are pre-scheduled.
                                        </p>
                                        <ul>
                                            <li>
                                                <i className="lni lni-website"></i>
                                                <Link to="#">
                                                    androidplex.com</Link>
                                            </li>
                                            <li>
                                                <i className="lni lni-dollar"></i>
                                                $20k - $25k</li>
                                            <li>
                                                <i className="lni lni-map-marker"></i>
                                                Cupertino, USA</li>
                                        </ul>
                                    </div>
                                    <div className="job-button">
                                        <ul>
                                            <li>
                                                <Link to="job-details.html">Apply</Link>
                                            </li>
                                            <li>
                                                <span>Part Time</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12">
                                <div className="pagination center wow fadeInUp" data-wow-delay=".3s">
                                    <ul className="pagination-list">
                                        <li>
                                            <Link to="#">
                                                <i className="lni lni-arrow-left"></i>
                                            </Link>
                                        </li>
                                        <li className="active">
                                            <Link to="#">1</Link>
                                        </li>
                                        <li>
                                            <Link to="#">2</Link>
                                        </li>
                                        <li>
                                            <Link to="#">3</Link>
                                        </li>
                                        <li>
                                            <Link to="#">4</Link>
                                        </li>
                                        <li>
                                            <Link to="#">
                                                <i className="lni lni-arrow-right"></i>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <div className="client-logo-section">
                <div className="container">
                    <div className="client-logo-wrapper">
                        <div className="client-logo-carousel d-flex align-items-center justify-content-between">
                            <div className="client-logo">
                                <img src="assets/images/clients/client1.png" alt="#" />
                            </div>
                            <div className="client-logo">
                                <img src="assets/images/clients/client2.png" alt="#" />
                            </div>
                            <div className="client-logo">
                                <img src="assets/images/clients/client3.png" alt="#" />
                            </div>
                            <div className="client-logo">
                                <img src="assets/images/clients/client4.png" alt="#" />
                            </div>
                            <div className="client-logo">
                                <img src="assets/images/clients/client5.png" alt="#" />
                            </div>
                            <div className="client-logo">
                                <img src="assets/images/clients/client6.png" alt="#" />
                            </div>
                            <div className="client-logo">
                                <img src="assets/images/clients/client2.png" alt="#" />
                            </div>
                            <div className="client-logo">
                                <img src="assets/images/clients/client3.png" alt="#" />
                            </div>
                            <div className="client-logo">
                                <img src="assets/images/clients/client4.png" alt="#" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="modal fade form-modal" id="login" tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog max-width-px-840 position-relative">
                    <button type="button" className="circle-32 btn-reset bg-white pos-abs-tr mt-md-n6 mr-lg-n6 focus-reset z-index-supper" data-dismiss="modal">
                        <i className="lni lni-close"></i>
                    </button>
                    <div className="login-modal-main">
                        <div className="row no-gutters">
                            <div className="col-12">
                                <div className="row">
                                    <div className="heading">
                                        <h3>Login From Here</h3>
                                        <p>Log in to continue your account
                                            <br />
                                            and explore new jobs.</p>
                                    </div>
                                    <div className="social-login">
                                        <ul>
                                            <li><Link className="linkedin" to="#"><i className="lni lni-linkedin-original"></i>Log in
                                                with LinkedIn</Link></li>
                                            <li><Link className="google" to="#"><i className="lni lni-google"></i>Log in with
                                                Google</Link></li>
                                            <li><Link className="facebook" to="#"><i className="lni lni-facebook-original"></i>Log in
                                                with Facebook</Link></li>
                                        </ul>
                                    </div>
                                    <div className="or-devider">
                                        <span>Or</span>
                                    </div>
                                    <form action="https://demo.graygrids.com/">
                                        <div className="form-group">
                                            <label htmlFor="email" className="label">E-mail</label>
                                            <input type="email" className="form-control" placeholder="example@gmail.com" id="email" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="password" className="label">Password</label>
                                            <div className="position-relative">
                                                <input type="password" className="form-control" id="password" placeholder="Enter password" />
                                            </div>
                                        </div>
                                        <div className="form-group d-flex flex-wrap justify-content-between">

                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                <label className="form-check-label" htmlFor="flexCheckDefault">Remember password</label>
                                            </div>
                                            <Link to="#" className="font-size-3 text-dodger line-height-reset">Forget Password</Link>
                                        </div>
                                        <div className="form-group mb-8 button">
                                            <button className="btn ">Log in
                                            </button>
                                        </div>
                                        <p className="text-center create-new-account">Don’t have an account?
                                            <Link to="#">Create a
                                                free account</Link>
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="modal fade form-modal" id="signup" tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog max-width-px-840 position-relative">
                    <button type="button" className="circle-32 btn-reset bg-white pos-abs-tr mt-md-n6 mr-lg-n6 focus-reset z-index-supper" data-dismiss="modal">
                        <i className="lni lni-close"></i>
                    </button>
                    <div className="login-modal-main">
                        <div className="row no-gutters">
                            <div className="col-12">
                                <div className="row">
                                    <div className="heading">
                                        <h3>Create a free Account
                                            <br />
                                            Today</h3>
                                        <p>Create your account to continue
                                            <br />
                                            and explore new jobs.</p>
                                    </div>
                                    <div className="social-login">
                                        <ul>
                                            <li><Link className="linkedin" to="#"><i className="lni lni-linkedin-original"></i>Import
                                                from LinkedIn</Link></li>
                                            <li><Link className="google" to="#"><i className="lni lni-google"></i>Import from
                                                Google</Link></li>
                                            <li><Link className="facebook" to="#"><i className="lni lni-facebook-original"></i>Import
                                                from Facebook</Link></li>
                                        </ul>
                                    </div>
                                    <div className="or-devider">
                                        <span>Or</span>
                                    </div>
                                    <form action="https://demo.graygrids.com/">
                                        <div className="form-group">
                                            <label htmlFor="email" className="label">E-mail</label>
                                            <input type="email" className="form-control" placeholder="example@gmail.com" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="password" className="label">Password</label>
                                            <div className="position-relative">
                                                <input type="password" className="form-control" placeholder="Enter password" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="password" className="label">Confirm Password</label>
                                            <div className="position-relative">
                                                <input type="password" className="form-control" placeholder="Enter password" />
                                            </div>
                                        </div>
                                        <div className="form-group d-flex flex-wrap justify-content-between">

                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" />
                                                <label className="form-check-label" htmlFor="flexCheckDefault">Agree to the
                                                    <Link to="#">Terms & Conditions</Link>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="form-group mb-8 button">
                                            <button className="btn ">Sign Up
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <footer className="footer apply-process">
                <div className="footer-top apply-process">
                    <div className="container">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-lg-6 col-12">
                                <div className="download-text text-white">
                                    <h3 className="text-white">Download Our Best Apps</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do<br />
                                        eiusmod tempor
                                        incididunt ut labore et dolore</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-12">
                                <div className="download-button">
                                    <div className="button">
                                        <Link className="btn bg-white text-dark" to="#">
                                            <i className="lni lni-apple"></i>
                                            App Store</Link>
                                        <Link className="btn bg-white text-dark" to="#">
                                            <i className="lni lni-play-store"></i>
                                            Google Play</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-middle">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-12">

                                <div className="f-about single-footer">
                                    <div className="logo">
                                        <Link to="index.html"><img src="assets/logo.png" alt="Logo" /></Link>
                                    </div>
                                    <p>Start building your creative website with our awesome template Massive.</p>
                                    <ul className="contact-address">
                                        <li>
                                            <span>Address:</span>
                                            555 Wall Street, USA, NY</li>
                                        <li>
                                            <span>Email:</span>
                                            <Link to="https://demo.graygrids.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="b7d2cfd6dac7dbd2f7d6c7c2c499d4d8da">[email&#160;protected]</Link>
                                        </li>
                                        <li>
                                            <span>Call:</span>
                                            555-555-1234</li>
                                    </ul>
                                    <div className="footer-social">
                                        <ul>
                                            <li><Link to="#"><i className="lni lni-facebook-original"></i></Link></li>
                                            <li><Link to="#"><i className="lni lni-twitter-original"></i></Link></li>
                                            <li><Link to="#"><i className="lni lni-linkedin-original"></i></Link></li>
                                            <li><Link to="#"><i className="lni lni-pinterest"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                            <div className="col-lg-8 col-12">
                                <div className="row">
                                    <div className="col-lg-4 col-md-6 col-12">

                                        <div className="single-footer f-link">
                                            <h3>For Candidates</h3>
                                            <ul>
                                                <li><Link to="#">User Dashboard</Link></li>
                                                <li><Link to="#">CV Packages</Link></li>
                                                <li><Link to="#">Jobs Featured</Link></li>
                                                <li><Link to="#">Jobs Urgent</Link></li>
                                                <li><Link to="#">Candidate List</Link></li>
                                                <li><Link to="#">Candidates Grid</Link></li>
                                            </ul>
                                        </div>

                                    </div>
                                    <div className="col-lg-4 col-md-6 col-12">

                                        <div className="single-footer f-link">
                                            <h3>For Employers</h3>
                                            <ul>
                                                <li><Link to="#">Post New</Link></li>
                                                <li><Link to="#">Employer List</Link></li>
                                                <li><Link to="#">Employers Grid</Link></li>
                                                <li><Link to="#">Job Packages</Link></li>
                                                <li><Link to="#">Jobs Listing</Link></li>
                                                <li><Link to="#">Jobs Featured</Link></li>
                                            </ul>
                                        </div>

                                    </div>
                                    <div className="col-lg-4 col-md-6 col-12">

                                        <div className="single-footer newsletter">
                                            <h3>Join Our Newsletter</h3>
                                            <p>Subscribe to get the latest jobs posted, candidates...</p>
                                            <form target="_blank" className="newsletter-inner">
                                                <input name="EMAIL" placeholder="Your email address" className="common-input" required="" type="email" />
                                                <div className="button">
                                                    <button className="btn">Subscribe Now!
                                                        <span className="dir-part"></span>
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="container">
                        <div className="inner">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-12">
                                    <div className="left">
                                        <p>Designed and Developed by<Link to="#" rel="nofollow" target="_blank">RightClicks</Link>
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-12">
                                    <div className="right">
                                        <ul>
                                            <li><Link to="#">Terms of use</Link></li>
                                            <li><Link to="#">Privacy Policy</Link></li>
                                            <li><Link to="#">Faq</Link></li>
                                            <li><Link to="#">Contact</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </footer>
        </>
    );
}

export default LandingPage;
