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
                                    <a className="navbar-brand logo" href="index.html">
                                        <img className="logo1" src="assets/logo.png" alt="Logo" />
                                    </a>
                                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="toggler-icon"></span>
                                        <span className="toggler-icon"></span>
                                        <span className="toggler-icon"></span>
                                    </button>
                                    <div className="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent"></div>

                                    <div className="button">
                                        <Link to="/login" className="login"> <i className="lni lni-lock-alt"></i>
                                            Login</Link>
                                        <Link to="/register" className="btn">Sign Up</Link>
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
                                                    <a href="#" className="btn">Post a Job</a>
                                                    <a href="#" className="btn btn-alt green-back">See Our Jobs</a>
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
                                                    <a href="#" className="btn">Post a Job</a>
                                                    <a href="#" className="btn btn-alt">See Our Jobs</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 co-12">
                                        <div className="hero-image wow fadeInRight" data-wow-delay=".ss">
                                            <img src="assets/images/hero/banner2.png" alt="#" />
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
                                <h4>Register Your Account</h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-12">
                            <div className="process-item">
                                <i className="lni lni-book"></i>
                                <h4>Upload Your Resume</h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-12">
                            <div className="process-item">
                                <i className="lni lni-briefcase"></i>
                                <h4>Apply for Dream Job</h4>
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
                                <a href="browse-jobs.html" className="single-cat wow fadeInUp" data-wow-delay=".2s">
                                    <div className="icon">
                                        <i className="lni lni-cog"></i>
                                    </div>
                                    <h3>Technical<br />
                                        Support</h3>
                                </a>
                            </div>
                            <div className="col-lg-3 col-md-6 col-12">
                                <a href="browse-jobs.html" className="single-cat wow fadeInUp" data-wow-delay=".4s">
                                    <div className="icon">
                                        <i className="lni lni-layers"></i>
                                    </div>
                                    <h3>Business<br />
                                        Development</h3>
                                </a>
                            </div>
                            <div className="col-lg-3 col-md-6 col-12">
                                <a href="browse-jobs.html" className="single-cat wow fadeInUp" data-wow-delay=".6s">
                                    <div className="icon">
                                        <i className="lni lni-home"></i>
                                    </div>
                                    <h3>Real Estate<br />
                                        Business</h3>
                                </a>
                            </div>
                            <div className="col-lg-3 col-md-6 col-12">
                                <a href="browse-jobs.html" className="single-cat wow fadeInUp" data-wow-delay=".8s">
                                    <div className="icon">
                                        <i className="lni lni-search"></i>
                                    </div>
                                    <h3>Share Maeket<br />
                                        Analysis</h3>
                                </a>
                            </div>
                            <div className="col-lg-3 col-md-6 col-12">
                                <a href="browse-jobs.html" className="single-cat wow fadeInUp" data-wow-delay=".2s">
                                    <div className="icon">
                                        <i className="lni lni-investment"></i>
                                    </div>
                                    <h3>Finance & Banking
                                        <br />
                                        Service</h3>
                                </a>
                            </div>
                            <div className="col-lg-3 col-md-6 col-12">
                                <a href="browse-jobs.html" className="single-cat wow fadeInUp" data-wow-delay=".4s">
                                    <div className="icon">
                                        <i className="lni lni-cloud-network"></i>
                                    </div>
                                    <h3>IT & Networing
                                        <br />
                                        Sevices</h3>
                                </a>
                            </div>
                            <div className="col-lg-3 col-md-6 col-12">
                                <a href="browse-jobs.html" className="single-cat wow fadeInUp" data-wow-delay=".6s">
                                    <div className="icon">
                                        <i className="lni lni-restaurant"></i>
                                    </div>
                                    <h3>Restaurant
                                        <br />
                                        Services</h3>
                                </a>
                            </div>
                            <div className="col-lg-3 col-md-6 col-12">
                                <a href="browse-jobs.html" className="single-cat wow fadeInUp" data-wow-delay=".8s">
                                    <div className="icon">
                                        <i className="lni lni-fireworks"></i>
                                    </div>
                                    <h3>Defence & Fire
                                        <br />
                                        Service</h3>
                                </a>
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
                                            <a href="#" className="btn">Post a Job</a>
                                            <a href="#" className="btn btn-alt">See Our Jobs</a>
                                        </div>
                                    </div>
                                    <div className="job-search-wrap-two mt-50 wow fadeInUp" data-wow-delay=".9s">
                                        <div className="trending-keywords mt-30">
                                            <div className="keywords style-two">
                                                <span className="title">Popular Keywords:</span>
                                                <ul>
                                                    <li><a href="#">Administrative</a></li>
                                                    <li><a href="#">Android</a></li>
                                                    <li><a href="#">app</a></li>
                                                    <li><a href="#">ASP.NET</a></li>
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
                                        <a className="btn green-back" href="#">
                                            Search
                                        </a>
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
                                        <a href="add-resume.html" className="btn">
                                            <i className="lni lni-upload"></i>
                                            Upload Your
                                                                                        Resume</a>
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
                                        <img src="assets/images/jobs/img1.png" alt="#" />
                                    </div>
                                    <div className="job-content">
                                        <h4>
                                            <a href="job-details.html">Software Engineer</a>
                                        </h4>
                                        <p>We are looking for Enrollment Advisors who are looking to take 30-35 appointments per
                                        week. All leads are pre-scheduled.
                                        </p>
                                        <ul>
                                            <li>
                                                <i className="lni lni-website"></i>
                                                <a href="#">
                                                    winbrans.com</a>
                                            </li>
                                            <li>
                                                <i className="lni lni-dollar"></i>
                                                $20k - $25k</li>
                                            <li>
                                                <i className="lni lni-map-marker"></i>
                                                New York</li>
                                        </ul>
                                    </div>
                                    <div className="job-button">
                                        <ul>
                                            <li>
                                                <a href="job-details.html">Apply</a>
                                            </li>
                                            <li>
                                                <span>full time</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>


                                <div className="single-job wow fadeInUp" data-wow-delay=".3s">
                                    <div className="job-image">
                                        <img src="assets/images/jobs/img2.png" alt="#" />
                                    </div>
                                    <div className="job-content">
                                        <h4>
                                            <a href="job-details.html">Graphics Design</a>
                                        </h4>
                                        <p>We are looking for Enrollment Advisors who are looking to take 30-35 appointments per
                                        week. All leads are pre-scheduled.
                                        </p>
                                        <ul>
                                            <li>
                                                <i className="lni lni-website"></i>
                                                <a href="#">
                                                    designhub.com</a>
                                            </li>
                                            <li>
                                                <i className="lni lni-dollar"></i>
                                                $20k - $25k</li>
                                            <li>
                                                <i className="lni lni-map-marker"></i>
                                                Washington, USA</li>
                                        </ul>
                                    </div>
                                    <div className="job-button">
                                        <ul>
                                            <li>
                                                <a href="job-details.html">Apply</a>
                                            </li>
                                            <li>
                                                <span>Intern</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>


                                <div className="single-job wow fadeInUp" data-wow-delay=".3s">
                                    <div className="job-image">
                                        <img src="assets/images/jobs/img3.png" alt="#" />
                                    </div>
                                    <div className="job-content">
                                        <h4>
                                            <a href="job-details.html">Ui/Ux Design</a>
                                        </h4>
                                        <p>We are looking for Enrollment Advisors who are looking to take 30-35 appointments per
                                        week. All leads are pre-scheduled.
                                        </p>
                                        <ul>
                                            <li>
                                                <i className="lni lni-website"></i>
                                                <a href="#">
                                                    uddesign.com</a>
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
                                                <a href="job-details.html">Apply</a>
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
                                            <a href="job-details.html">Web Developer</a>
                                        </h4>
                                        <p>We are looking for Enrollment Advisors who are looking to take 30-35 appointments per
                                        week. All leads are pre-scheduled.
                                        </p>
                                        <ul>
                                            <li>
                                                <i className="lni lni-website"></i>
                                                <a href="#">
                                                    webinner.com</a>
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
                                                <a href="job-details.html">Apply</a>
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
                                        <img src="assets/images/jobs/img7.png" alt="#" />
                                    </div>
                                    <div className="job-content">
                                        <h4>
                                            <a href="job-details.html">Digital Marketer</a>
                                        </h4>
                                        <p>We are looking for Enrollment Advisors who are looking to take 30-35 appointments per
                                        week. All leads are pre-scheduled.
                                        </p>
                                        <ul>
                                            <li>
                                                <i className="lni lni-website"></i>
                                                <a href="#">
                                                    marketers.com</a>
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
                                                <a href="job-details.html">Apply</a>
                                            </li>
                                            <li>
                                                <span>Part Time</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>


                                <div className="single-job wow fadeInUp" data-wow-delay=".5s">
                                    <div className="job-image">
                                        <img src="assets/images/jobs/img5.png" alt="#" />
                                    </div>
                                    <div className="job-content">
                                        <h4>
                                            <a href="job-details.html">Sales Manager</a>
                                        </h4>
                                        <p>We are looking for Enrollment Advisors who are looking to take 30-35 appointments per
                                        week. All leads are pre-scheduled.
                                        </p>
                                        <ul>
                                            <li>
                                                <i className="lni lni-website"></i>
                                                <a href="#">
                                                    winbrans.com</a>
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
                                                <a href="job-details.html">Apply</a>
                                            </li>
                                            <li>
                                                <span>full time</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>


                                <div className="single-job wow fadeInUp" data-wow-delay=".5s">
                                    <div className="job-image">
                                        <img src="assets/images/jobs/img6.png" alt="#" />
                                    </div>
                                    <div className="job-content">
                                        <h4>
                                            <a href="job-details.html">Product Designer</a>
                                        </h4>
                                        <p>We are looking for Enrollment Advisors who are looking to take 30-35 appointments per
                                        week. All leads are pre-scheduled.
                                        </p>
                                        <ul>
                                            <li>
                                                <i className="lni lni-website"></i>
                                                <a href="#">
                                                    winbrans.com</a>
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
                                                <a href="job-details.html">Apply</a>
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
                                            <a href="job-details.html">Android Developer</a>
                                        </h4>
                                        <p>We are looking for Enrollment Advisors who are looking to take 30-35 appointments per
                                        week. All leads are pre-scheduled.
                                        </p>
                                        <ul>
                                            <li>
                                                <i className="lni lni-website"></i>
                                                <a href="#">
                                                    androidplex.com</a>
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
                                                <a href="job-details.html">Apply</a>
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
                                            <a href="#">
                                                <i className="lni lni-arrow-left"></i>
                                            </a>
                                        </li>
                                        <li className="active">
                                            <a href="#">1</a>
                                        </li>
                                        <li>
                                            <a href="#">2</a>
                                        </li>
                                        <li>
                                            <a href="#">3</a>
                                        </li>
                                        <li>
                                            <a href="#">4</a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="lni lni-arrow-right"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className=" testimonials">
                <img className="patern1 wow fadeInRight" data-wow-delay=".3s" src="assets/images/testimonial/patern1.png" alt="#" />
                <img className="patern2 wow fadeInLeft" data-wow-delay=".5s" src="assets/images/testimonial/patern1.png" alt="#" />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-12">
                            <div className="section-title align-left wow fadeInLeft" data-wow-delay=".3s">
                                <span>What saye's Our Clients</span>
                                <h2>Our Testimonials</h2>
                            </div>
                            <div className=" testimonial-inner-head wow fadeInLeft" data-wow-delay=".3s">
                                <div className=" testimonial-inner">
                                    <div className="testimonial-slider">

                                        <div className="single-testimonial">
                                            <div className="quote">
                                                <i className="lni lni-quotation"></i>
                                            </div>
                                            <p>" I just brought it and i love it. Lorem Ipsum is simply dummy text of the and
                                            typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                                            ever
                                            since the 1500s."
                                            </p>
                                            <div className="bottom">
                                                <div className="clien-image">
                                                    <img src="assets/images/testimonial/testi1.jpg" alt="#" />
                                                </div>
                                                <h4 className="name">Musharof Chowdhury
                                                    <span>CEO - Graygrids</span>
                                                </h4>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-12">
                            <div className="testimonial-right wow fadeInRight" data-wow-delay=".5s">
                                <img src="assets/images/testimonial/testimonial-right.png" alt="#" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="pricing-table section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-title">
                                <span className="wow fadeInDown" data-wow-delay=".2s">Pricing Table</span>
                                <h2 className="wow fadeInUp" data-wow-delay=".4s">Our Pricing Plan</h2>
                                <p className="wow fadeInUp" data-wow-delay=".6s">There are many variations of passages of Lorem
                                                                        Ipsum available, but the majority have suffered alteration in some form.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-12">

                            <div className="single-table wow fadeInUp" data-wow-delay=".2s">

                                <div className="table-head">
                                    <h4 className="title">BASIC PACK</h4>
                                    <div className="price">
                                        <p className="amount">$30<span className="duration">per month</span>
                                        </p>
                                    </div>
                                </div>


                                <ul className="table-list">
                                    <li>5+ Listings</li>
                                    <li>Contact With Agent</li>
                                    <li>Contact With Agent</li>
                                    <li>7×24 Fully Support</li>
                                    <li>50GB Space</li>
                                </ul>


                                <div className="button">
                                    <a className="btn" href="#">Register Now</a>
                                </div>

                            </div>

                        </div>
                        <div className="col-lg-4 col-md-6 col-12">

                            <div className="single-table wow fadeInUp" data-wow-delay=".4s">

                                <div className="table-head">
                                    <h4 className="title">STANDARD PACK</h4>
                                    <div className="price">
                                        <p className="amount">$40<span className="duration">per month</span>
                                        </p>
                                    </div>
                                </div>


                                <ul className="table-list">
                                    <li>5+ Listings</li>
                                    <li>Contact With Agent</li>
                                    <li>Contact With Agent</li>
                                    <li>7×24 Fully Support</li>
                                    <li>50GB Space</li>
                                </ul>


                                <div className="button">
                                    <a className="btn" href="#">Register Now</a>
                                </div>

                            </div>

                        </div>
                        <div className="col-lg-4 col-md-6 col-12">

                            <div className="single-table wow fadeInUp" data-wow-delay=".6s">

                                <div className="table-head">
                                    <h4 className="title">PREMIUM PACK</h4>
                                    <div className="price">
                                        <p className="amount">$60<span className="duration">per month</span>
                                        </p>
                                    </div>
                                </div>


                                <ul className="table-list">
                                    <li>5+ Listings</li>
                                    <li>Contact With Agent</li>
                                    <li>Contact With Agent</li>
                                    <li>7×24 Fully Support</li>
                                    <li>50GB Space</li>
                                </ul>


                                <div className="button">
                                    <a className="btn" href="#">Register Now</a>
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
                                            <li><a className="linkedin" href="#"><i className="lni lni-linkedin-original"></i>Log in
                                                                                                    with LinkedIn</a></li>
                                            <li><a className="google" href="#"><i className="lni lni-google"></i>Log in with
                                                                                                    Google</a></li>
                                            <li><a className="facebook" href="#"><i className="lni lni-facebook-original"></i>Log in
                                                                                                    with Facebook</a></li>
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
                                            <a href="#" className="font-size-3 text-dodger line-height-reset">Forget Password</a>
                                        </div>
                                        <div className="form-group mb-8 button">
                                            <button className="btn ">Log in
                                            </button>
                                        </div>
                                        <p className="text-center create-new-account">Don’t have an account?
                                            <a href="#">Create a
                                                                                                free account</a>
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
                                            <li><a className="linkedin" href="#"><i className="lni lni-linkedin-original"></i>Import
                                                                                                    from LinkedIn</a></li>
                                            <li><a className="google" href="#"><i className="lni lni-google"></i>Import from
                                                                                                    Google</a></li>
                                            <li><a className="facebook" href="#"><i className="lni lni-facebook-original"></i>Import
                                                                                                    from Facebook</a></li>
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
                                                    <a href="#">Terms & Conditions</a>
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
                                        <a className="btn bg-white text-dark" href="#">
                                            <i className="lni lni-apple"></i>
                                            App Store</a>
                                        <a className="btn bg-white text-dark" href="#">
                                            <i className="lni lni-play-store"></i>
                                            Google Play</a>
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
                                        <a href="index.html"><img src="assets/logo.png" alt="Logo" /></a>
                                    </div>
                                    <p>Start building your creative website with our awesome template Massive.</p>
                                    <ul className="contact-address">
                                        <li>
                                            <span>Address:</span>
                                            555 Wall Street, USA, NY</li>
                                        <li>
                                            <span>Email:</span>
                                            <a href="https://demo.graygrids.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="b7d2cfd6dac7dbd2f7d6c7c2c499d4d8da">[email&#160;protected]</a>
                                        </li>
                                        <li>
                                            <span>Call:</span>
                                            555-555-1234</li>
                                    </ul>
                                    <div className="footer-social">
                                        <ul>
                                            <li><a href="#"><i className="lni lni-facebook-original"></i></a></li>
                                            <li><a href="#"><i className="lni lni-twitter-original"></i></a></li>
                                            <li><a href="#"><i className="lni lni-linkedin-original"></i></a></li>
                                            <li><a href="#"><i className="lni lni-pinterest"></i></a></li>
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
                                                <li><a href="#">User Dashboard</a></li>
                                                <li><a href="#">CV Packages</a></li>
                                                <li><a href="#">Jobs Featured</a></li>
                                                <li><a href="#">Jobs Urgent</a></li>
                                                <li><a href="#">Candidate List</a></li>
                                                <li><a href="#">Candidates Grid</a></li>
                                            </ul>
                                        </div>

                                    </div>
                                    <div className="col-lg-4 col-md-6 col-12">

                                        <div className="single-footer f-link">
                                            <h3>For Employers</h3>
                                            <ul>
                                                <li><a href="#">Post New</a></li>
                                                <li><a href="#">Employer List</a></li>
                                                <li><a href="#">Employers Grid</a></li>
                                                <li><a href="#">Job Packages</a></li>
                                                <li><a href="#">Jobs Listing</a></li>
                                                <li><a href="#">Jobs Featured</a></li>
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
                                        <p>Designed and Developed by<a href="https://graygrids.com/" rel="nofollow" target="_blank">GrayGrids</a>
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-12">
                                    <div className="right">
                                        <ul>
                                            <li><a href="#">Terms of use</a></li>
                                            <li><a href="#">Privacy Policy</a></li>
                                            <li><a href="#">Faq</a></li>
                                            <li><a href="#">Contact</a></li>
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
