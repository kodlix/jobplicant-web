import React from 'react';
import {Link} from 'react-router-dom';
import './LandingPage.css';


const LandingPage = () => {
    return (
        <>
            <header class="header">
                <div class="navbar-area">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-lg-12">
                                <nav class="navbar navbar-expand-lg py-2">
                                    <a class="navbar-brand logo" href="index.html">
                                        <img class="logo1" src="assets/images/logo/logo.svg" alt="Logo"/>
                                    </a>
                                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <span class="toggler-icon"></span>
                                        <span class="toggler-icon"></span>
                                        <span class="toggler-icon"></span>
                                    </button>
                                    <div class="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent"></div>

                                    <div class="button">
                                        <a href="javacript:" data-toggle="modal" data-target="#login" class="login">
                                            <i class="lni lni-lock-alt"></i>
                                            Login</a>
                                        <a href="javacript:" data-toggle="modal" data-target="#signup" class="btn">Sign Up</a>
                                    </div>
                                </nav>

                            </div>
                        </div>

                    </div>
                </div>
            </header>

            <section class="hero-area style2">
                <div class="hero-inner">
                    <div class="home-slider">
                        <div class="single-slider">
                            <div class="container">
                                <div class="row ">
                                    <div class="col-lg-6 co-12">
                                        <div class="inner-content">
                                            <div class="hero-text">
                                                <h1 class="wow fadeInUp prim"  data-wow-delay=".3s">Find Your Career
                                                    <br/>to Make a
                                                                                                        Better Life
                                                </h1>
                                                <p class="wow fadeInUp" data-wow-delay=".5s">Creating a beautiful job website is
                                                                                                        not
                                                                                                        easy always. To make your life easier we are introducing Jobcamp template,
                                                                                                        Leverage agile frameworks to high level overviews.
                                                </p>
                                                <div class="button wow fadeInUp" data-wow-delay=".7s">
                                                    <a href="#" class="btn">Post a Job</a>
                                                    <a href="#" class="btn btn-alt green-back">See Our Jobs</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 co-12">
                                        <div class="hero-image wow fadeInRight" data-wow-delay=".4s">
                                            <img src="assets/images/hero/banner.png" alt="#"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="single-slider">
                            <div class="container">
                                <div class="row ">
                                    <div class="col-lg-6 co-12">
                                        <div class="inner-content">
                                            <div class="hero-text">
                                                <h1 class="wow fadeInUp" data-wow-delay=".3s">Find Your Career
                                                    <br/>to Make a
                                                                                                        Better Life
                                                </h1>
                                                <p class="wow fadeInUp" data-wow-delay=".5s">Creating a beautiful job website is
                                                                                                        not
                                                                                                        easy always. To make your life easier we are introducing Jobcamp template,
                                                                                                        Leverage agile frameworks to high level overviews.
                                                </p>
                                                <div class="button wow fadeInUp" data-wow-delay=".7s">
                                                    <a href="#" class="btn">Post a Job</a>
                                                    <a href="#" class="btn btn-alt">See Our Jobs</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 co-12">
                                        <div class="hero-image wow fadeInRight" data-wow-delay=".ss">
                                            <img src="assets/images/hero/banner2.png" alt="#"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <section class="apply-process section">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4 col-md-4 col-12">
                            <div class="process-item">
                                <i class="lni lni-user"></i>
                                <h4>Register Your Account</h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4 col-12">
                            <div class="process-item">
                                <i class="lni lni-book"></i>
                                <h4>Upload Your Resume</h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4 col-12">
                            <div class="process-item">
                                <i class="lni lni-briefcase"></i>
                                <h4>Apply for Dream Job</h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="job-category section">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="section-title">
                                <span class="wow fadeInDown" data-wow-delay=".2s">Job Category</span>
                                <h2 class="wow fadeInUp" data-wow-delay=".4s">Choose Your Desire Category</h2>
                                <p class="wow fadeInUp" data-wow-delay=".6s">There are many variations of passages of Lorem
                                                                        Ipsum available, but the majority have suffered alteration in some form.</p>
                            </div>
                        </div>
                    </div>
                    <div class="cat-head">
                        <div class="row">
                            <div class="col-lg-3 col-md-6 col-12">
                                <a href="browse-jobs.html" class="single-cat wow fadeInUp" data-wow-delay=".2s">
                                    <div class="icon">
                                        <i class="lni lni-cog"></i>
                                    </div>
                                    <h3>Technical<br/>
                                        Support</h3>
                                </a>
                            </div>
                            <div class="col-lg-3 col-md-6 col-12">
                                <a href="browse-jobs.html" class="single-cat wow fadeInUp" data-wow-delay=".4s">
                                    <div class="icon">
                                        <i class="lni lni-layers"></i>
                                    </div>
                                    <h3>Business<br/>
                                        Development</h3>
                                </a>
                            </div>
                            <div class="col-lg-3 col-md-6 col-12">
                                <a href="browse-jobs.html" class="single-cat wow fadeInUp" data-wow-delay=".6s">
                                    <div class="icon">
                                        <i class="lni lni-home"></i>
                                    </div>
                                    <h3>Real Estate<br/>
                                        Business</h3>
                                </a>
                            </div>
                            <div class="col-lg-3 col-md-6 col-12">
                                <a href="browse-jobs.html" class="single-cat wow fadeInUp" data-wow-delay=".8s">
                                    <div class="icon">
                                        <i class="lni lni-search"></i>
                                    </div>
                                    <h3>Share Maeket<br/>
                                        Analysis</h3>
                                </a>
                            </div>
                            <div class="col-lg-3 col-md-6 col-12">
                                <a href="browse-jobs.html" class="single-cat wow fadeInUp" data-wow-delay=".2s">
                                    <div class="icon">
                                        <i class="lni lni-investment"></i>
                                    </div>
                                    <h3>Finance & Banking
                                        <br/>
                                        Service</h3>
                                </a>
                            </div>
                            <div class="col-lg-3 col-md-6 col-12">
                                <a href="browse-jobs.html" class="single-cat wow fadeInUp" data-wow-delay=".4s">
                                    <div class="icon">
                                        <i class="lni lni-cloud-network"></i>
                                    </div>
                                    <h3>IT & Networing
                                        <br/>
                                        Sevices</h3>
                                </a>
                            </div>
                            <div class="col-lg-3 col-md-6 col-12">
                                <a href="browse-jobs.html" class="single-cat wow fadeInUp" data-wow-delay=".6s">
                                    <div class="icon">
                                        <i class="lni lni-restaurant"></i>
                                    </div>
                                    <h3>Restaurant
                                        <br/>
                                        Services</h3>
                                </a>
                            </div>
                            <div class="col-lg-3 col-md-6 col-12">
                                <a href="browse-jobs.html" class="single-cat wow fadeInUp" data-wow-delay=".8s">
                                    <div class="icon">
                                        <i class="lni lni-fireworks"></i>
                                    </div>
                                    <h3>Defence & Fire
                                        <br/>
                                        Service</h3>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="hero-area style3 bg-white">
                <div class="hero-inner">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-7 co-12">
                                <div class="inner-content">
                                    <div class="hero-text">
                                        <h1 class="wow fadeInUp" data-wow-delay=".3s">Find the Most Exciting<br/>
                                            Jobs to Make a
                                                                                        Better Life
                                        </h1>
                                        <p class="wow fadeInUp" data-wow-delay=".5s">Creating a beautiful job website is not
                                                                                        easy always. To make<br/>
                                            your life easier, we are introducing Jobcamp template,<br/>
                                            Leverage agile frameworks to provide a robust<br/>
                                            synopsis for high level overviews.
                                        </p>
                                        <div class="button wow fadeInUp" data-wow-delay=".7s">
                                            <a href="#" class="btn">Post a Job</a>
                                            <a href="#" class="btn btn-alt">See Our Jobs</a>
                                        </div>
                                    </div>
                                    <div class="job-search-wrap-two mt-50 wow fadeInUp" data-wow-delay=".9s">
                                        <div class="trending-keywords mt-30">
                                            <div class="keywords style-two">
                                                <span class="title">Popular Keywords:</span>
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
                            <div class="col-lg-5 offset-lg-0 col-md-8 offset-md-2 co-12">
                                <form class="home-search wow fadeInRight" data-wow-delay=".5s">
                                    <div class="form-group">
                                        <label class="font-weight-bold text-dark">What?</label>
                                        <div class=" form-location">
                                            <input type="text" class="form-control" placeholder="What are you looking for..."/>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="font-weight-bold text-dark">Where?</label>
                                        <div class="form-location">
                                            <input type="text" class="form-control" placeholder="Where..."/>
                                        </div>
                                    </div>
                                    <div class="form-group select-border">
                                        <label class="font-weight-bold text-dark">Choose Category?</label>
                                        <select class="form-control basic-select">
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
                                    <div class="button">
                                        <a class="btn green-back" href="#">
                                            Search
                                        </a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="call-action overlay section">
                <div class="container">
                    <div class="row ">
                        <div class="col-lg-8 offset-lg-2 col-12">
                            <div class="inner">
                                <div class="section-title">
                                    <span class="wow fadeInDown" data-wow-delay=".2s">GETTING STARTED TO WORK</span>
                                    <h2 class="wow fadeInUp" data-wow-delay=".4s">Don’t just find. Be found. Put your
                                                                                CV in front of great employers</h2>
                                    <p class="wow fadeInUp" data-wow-delay=".6s">It helps you to increase your chances of
                                                                                finding a suitable job and let recruiters contact you
                                                                                about jobs that are not needed to pay for advertising.</p>
                                    <div class="button wow fadeInUp" data-wow-delay=".8s">
                                        <a href="add-resume.html" class="btn">
                                            <i class="lni lni-upload"></i>
                                            Upload Your
                                                                                        Resume</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section class="find-job section">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="section-title">
                                <span class="wow fadeInDown" data-wow-delay=".2s">Hot Jobs</span>
                                <h2 class="wow fadeInUp" data-wow-delay=".4s">Browse Recent Jobs</h2>
                                <p class="wow fadeInUp" data-wow-delay=".6s">There are many variations of passages of Lorem
                                                                        Ipsum available, but the majority have suffered alteration in some form.</p>
                            </div>
                        </div>
                    </div>
                    <div class="single-head">
                        <div class="row">
                            <div class="col-lg-6 col-12">

                                <div class="single-job wow fadeInUp" data-wow-delay=".3s">
                                    <div class="job-image">
                                        <img src="assets/images/jobs/img1.png" alt="#"/>
                                    </div>
                                    <div class="job-content">
                                        <h4>
                                            <a href="job-details.html">Software Engineer</a>
                                        </h4>
                                        <p>We are looking for Enrollment Advisors who are looking to take 30-35 appointments per
                                                                                        week. All leads are pre-scheduled.
                                        </p>
                                        <ul>
                                            <li>
                                                <i class="lni lni-website"></i>
                                                <a href="#">
                                                    winbrans.com</a>
                                            </li>
                                            <li>
                                                <i class="lni lni-dollar"></i>
                                                $20k - $25k</li>
                                            <li>
                                                <i class="lni lni-map-marker"></i>
                                                New York</li>
                                        </ul>
                                    </div>
                                    <div class="job-button">
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


                                <div class="single-job wow fadeInUp" data-wow-delay=".3s">
                                    <div class="job-image">
                                        <img src="assets/images/jobs/img2.png" alt="#"/>
                                    </div>
                                    <div class="job-content">
                                        <h4>
                                            <a href="job-details.html">Graphics Design</a>
                                        </h4>
                                        <p>We are looking for Enrollment Advisors who are looking to take 30-35 appointments per
                                                                                        week. All leads are pre-scheduled.
                                        </p>
                                        <ul>
                                            <li>
                                                <i class="lni lni-website"></i>
                                                <a href="#">
                                                    designhub.com</a>
                                            </li>
                                            <li>
                                                <i class="lni lni-dollar"></i>
                                                $20k - $25k</li>
                                            <li>
                                                <i class="lni lni-map-marker"></i>
                                                Washington, USA</li>
                                        </ul>
                                    </div>
                                    <div class="job-button">
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


                                <div class="single-job wow fadeInUp" data-wow-delay=".3s">
                                    <div class="job-image">
                                        <img src="assets/images/jobs/img3.png" alt="#"/>
                                    </div>
                                    <div class="job-content">
                                        <h4>
                                            <a href="job-details.html">Ui/Ux Design</a>
                                        </h4>
                                        <p>We are looking for Enrollment Advisors who are looking to take 30-35 appointments per
                                                                                        week. All leads are pre-scheduled.
                                        </p>
                                        <ul>
                                            <li>
                                                <i class="lni lni-website"></i>
                                                <a href="#">
                                                    uddesign.com</a>
                                            </li>
                                            <li>
                                                <i class="lni lni-dollar"></i>
                                                $20k - $25k</li>
                                            <li>
                                                <i class="lni lni-map-marker"></i>
                                                Cupertino, USA</li>
                                        </ul>
                                    </div>
                                    <div class="job-button">
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


                                <div class="single-job wow fadeInUp" data-wow-delay=".3s">
                                    <div class="job-image">
                                        <img src="assets/images/jobs/img4.png" alt="#"/>
                                    </div>
                                    <div class="job-content">
                                        <h4>
                                            <a href="job-details.html">Web Developer</a>
                                        </h4>
                                        <p>We are looking for Enrollment Advisors who are looking to take 30-35 appointments per
                                                                                        week. All leads are pre-scheduled.
                                        </p>
                                        <ul>
                                            <li>
                                                <i class="lni lni-website"></i>
                                                <a href="#">
                                                    webinner.com</a>
                                            </li>
                                            <li>
                                                <i class="lni lni-dollar"></i>
                                                $20k - $25k</li>
                                            <li>
                                                <i class="lni lni-map-marker"></i>
                                                Delaware, USA</li>
                                        </ul>
                                    </div>
                                    <div class="job-button">
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
                            <div class="col-lg-6 col-12">

                                <div class="single-job wow fadeInUp" data-wow-delay=".5s">
                                    <div class="job-image">
                                        <img src="assets/images/jobs/img7.png" alt="#"/>
                                    </div>
                                    <div class="job-content">
                                        <h4>
                                            <a href="job-details.html">Digital Marketer</a>
                                        </h4>
                                        <p>We are looking for Enrollment Advisors who are looking to take 30-35 appointments per
                                                                                        week. All leads are pre-scheduled.
                                        </p>
                                        <ul>
                                            <li>
                                                <i class="lni lni-website"></i>
                                                <a href="#">
                                                    marketers.com</a>
                                            </li>
                                            <li>
                                                <i class="lni lni-dollar"></i>
                                                $20k - $25k</li>
                                            <li>
                                                <i class="lni lni-map-marker"></i>
                                                New York, USA</li>
                                        </ul>
                                    </div>
                                    <div class="job-button">
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


                                <div class="single-job wow fadeInUp" data-wow-delay=".5s">
                                    <div class="job-image">
                                        <img src="assets/images/jobs/img5.png" alt="#"/>
                                    </div>
                                    <div class="job-content">
                                        <h4>
                                            <a href="job-details.html">Sales Manager</a>
                                        </h4>
                                        <p>We are looking for Enrollment Advisors who are looking to take 30-35 appointments per
                                                                                        week. All leads are pre-scheduled.
                                        </p>
                                        <ul>
                                            <li>
                                                <i class="lni lni-website"></i>
                                                <a href="#">
                                                    winbrans.com</a>
                                            </li>
                                            <li>
                                                <i class="lni lni-dollar"></i>
                                                $20k - $25k</li>
                                            <li>
                                                <i class="lni lni-map-marker"></i>
                                                Delaware, USA</li>
                                        </ul>
                                    </div>
                                    <div class="job-button">
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


                                <div class="single-job wow fadeInUp" data-wow-delay=".5s">
                                    <div class="job-image">
                                        <img src="assets/images/jobs/img6.png" alt="#"/>
                                    </div>
                                    <div class="job-content">
                                        <h4>
                                            <a href="job-details.html">Product Designer</a>
                                        </h4>
                                        <p>We are looking for Enrollment Advisors who are looking to take 30-35 appointments per
                                                                                        week. All leads are pre-scheduled.
                                        </p>
                                        <ul>
                                            <li>
                                                <i class="lni lni-website"></i>
                                                <a href="#">
                                                    winbrans.com</a>
                                            </li>
                                            <li>
                                                <i class="lni lni-dollar"></i>
                                                $20k - $25k</li>
                                            <li>
                                                <i class="lni lni-map-marker"></i>
                                                New York, USA</li>
                                        </ul>
                                    </div>
                                    <div class="job-button">
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


                                <div class="single-job wow fadeInUp" data-wow-delay=".5s">
                                    <div class="job-image">
                                        <img src="assets/images/jobs/img8.png" alt="#"/>
                                    </div>
                                    <div class="job-content">
                                        <h4>
                                            <a href="job-details.html">Android Developer</a>
                                        </h4>
                                        <p>We are looking for Enrollment Advisors who are looking to take 30-35 appointments per
                                                                                        week. All leads are pre-scheduled.
                                        </p>
                                        <ul>
                                            <li>
                                                <i class="lni lni-website"></i>
                                                <a href="#">
                                                    androidplex.com</a>
                                            </li>
                                            <li>
                                                <i class="lni lni-dollar"></i>
                                                $20k - $25k</li>
                                            <li>
                                                <i class="lni lni-map-marker"></i>
                                                Cupertino, USA</li>
                                        </ul>
                                    </div>
                                    <div class="job-button">
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

                        <div class="row">
                            <div class="col-12">
                                <div class="pagination center wow fadeInUp" data-wow-delay=".3s">
                                    <ul class="pagination-list">
                                        <li>
                                            <a href="#">
                                                <i class="lni lni-arrow-left"></i>
                                            </a>
                                        </li>
                                        <li class="active">
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
                                                <i class="lni lni-arrow-right"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section class=" testimonials">
                <img class="patern1 wow fadeInRight" data-wow-delay=".3s" src="assets/images/testimonial/patern1.png" alt="#"/>
                <img class="patern2 wow fadeInLeft" data-wow-delay=".5s" src="assets/images/testimonial/patern1.png" alt="#"/>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 col-12">
                            <div class="section-title align-left wow fadeInLeft" data-wow-delay=".3s">
                                <span>What saye's Our Clients</span>
                                <h2>Our Testimonials</h2>
                            </div>
                            <div class=" testimonial-inner-head wow fadeInLeft" data-wow-delay=".3s">
                                <div class=" testimonial-inner">
                                    <div class="testimonial-slider">

                                        <div class="single-testimonial">
                                            <div class="quote">
                                                <i class="lni lni-quotation"></i>
                                            </div>
                                            <p>" I just brought it and i love it. Lorem Ipsum is simply dummy text of the and
                                                                                                typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                                                                                                ever
                                                                                                since the 1500s."
                                            </p>
                                            <div class="bottom">
                                                <div class="clien-image">
                                                    <img src="assets/images/testimonial/testi1.jpg" alt="#"/>
                                                </div>
                                                <h4 class="name">Musharof Chowdhury
                                                    <span>CEO - Graygrids</span>
                                                </h4>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-12">
                            <div class="testimonial-right wow fadeInRight" data-wow-delay=".5s">
                                <img src="assets/images/testimonial/testimonial-right.png" alt="#"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section class="pricing-table section">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="section-title">
                                <span class="wow fadeInDown" data-wow-delay=".2s">Pricing Table</span>
                                <h2 class="wow fadeInUp" data-wow-delay=".4s">Our Pricing Plan</h2>
                                <p class="wow fadeInUp" data-wow-delay=".6s">There are many variations of passages of Lorem
                                                                        Ipsum available, but the majority have suffered alteration in some form.</p>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-4 col-md-6 col-12">

                            <div class="single-table wow fadeInUp" data-wow-delay=".2s">

                                <div class="table-head">
                                    <h4 class="title">BASIC PACK</h4>
                                    <div class="price">
                                        <p class="amount">$30<span class="duration">per month</span>
                                        </p>
                                    </div>
                                </div>


                                <ul class="table-list">
                                    <li>5+ Listings</li>
                                    <li>Contact With Agent</li>
                                    <li>Contact With Agent</li>
                                    <li>7×24 Fully Support</li>
                                    <li>50GB Space</li>
                                </ul>


                                <div class="button">
                                    <a class="btn" href="#">Register Now</a>
                                </div>

                            </div>

                        </div>
                        <div class="col-lg-4 col-md-6 col-12">

                            <div class="single-table wow fadeInUp" data-wow-delay=".4s">

                                <div class="table-head">
                                    <h4 class="title">STANDARD PACK</h4>
                                    <div class="price">
                                        <p class="amount">$40<span class="duration">per month</span>
                                        </p>
                                    </div>
                                </div>


                                <ul class="table-list">
                                    <li>5+ Listings</li>
                                    <li>Contact With Agent</li>
                                    <li>Contact With Agent</li>
                                    <li>7×24 Fully Support</li>
                                    <li>50GB Space</li>
                                </ul>


                                <div class="button">
                                    <a class="btn" href="#">Register Now</a>
                                </div>

                            </div>

                        </div>
                        <div class="col-lg-4 col-md-6 col-12">

                            <div class="single-table wow fadeInUp" data-wow-delay=".6s">

                                <div class="table-head">
                                    <h4 class="title">PREMIUM PACK</h4>
                                    <div class="price">
                                        <p class="amount">$60<span class="duration">per month</span>
                                        </p>
                                    </div>
                                </div>


                                <ul class="table-list">
                                    <li>5+ Listings</li>
                                    <li>Contact With Agent</li>
                                    <li>Contact With Agent</li>
                                    <li>7×24 Fully Support</li>
                                    <li>50GB Space</li>
                                </ul>


                                <div class="button">
                                    <a class="btn" href="#">Register Now</a>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <div class="client-logo-section">
                <div class="container">
                    <div class="client-logo-wrapper">
                        <div class="client-logo-carousel d-flex align-items-center justify-content-between">
                            <div class="client-logo">
                                <img src="assets/images/clients/client1.png" alt="#"/>
                            </div>
                            <div class="client-logo">
                                <img src="assets/images/clients/client2.png" alt="#"/>
                            </div>
                            <div class="client-logo">
                                <img src="assets/images/clients/client3.png" alt="#"/>
                            </div>
                            <div class="client-logo">
                                <img src="assets/images/clients/client4.png" alt="#"/>
                            </div>
                            <div class="client-logo">
                                <img src="assets/images/clients/client5.png" alt="#"/>
                            </div>
                            <div class="client-logo">
                                <img src="assets/images/clients/client6.png" alt="#"/>
                            </div>
                            <div class="client-logo">
                                <img src="assets/images/clients/client2.png" alt="#"/>
                            </div>
                            <div class="client-logo">
                                <img src="assets/images/clients/client3.png" alt="#"/>
                            </div>
                            <div class="client-logo">
                                <img src="assets/images/clients/client4.png" alt="#"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div class="modal fade form-modal" id="login" tabindex="-1" aria-hidden="true">
                <div class="modal-dialog max-width-px-840 position-relative">
                    <button type="button" class="circle-32 btn-reset bg-white pos-abs-tr mt-md-n6 mr-lg-n6 focus-reset z-index-supper" data-dismiss="modal">
                        <i class="lni lni-close"></i>
                    </button>
                    <div class="login-modal-main">
                        <div class="row no-gutters">
                            <div class="col-12">
                                <div class="row">
                                    <div class="heading">
                                        <h3>Login From Here</h3>
                                        <p>Log in to continue your account
                                            <br/>
                                            and explore new jobs.</p>
                                    </div>
                                    <div class="social-login">
                                        <ul>
                                            <li><a class="linkedin" href="#"><i class="lni lni-linkedin-original"></i>Log in
                                                                                                    with LinkedIn</a></li>
                                            <li><a class="google" href="#"><i class="lni lni-google"></i>Log in with
                                                                                                    Google</a></li>
                                            <li><a class="facebook" href="#"><i class="lni lni-facebook-original"></i>Log in
                                                                                                    with Facebook</a></li>
                                        </ul>
                                    </div>
                                    <div class="or-devider">
                                        <span>Or</span>
                                    </div>
                                    <form action="https://demo.graygrids.com/">
                                        <div class="form-group">
                                            <label for="email" class="label">E-mail</label>
                                            <input type="email" class="form-control" placeholder="example@gmail.com" id="email"/>
                                        </div>
                                        <div class="form-group">
                                            <label for="password" class="label">Password</label>
                                            <div class="position-relative">
                                                <input type="password" class="form-control" id="password" placeholder="Enter password"/>
                                            </div>
                                        </div>
                                        <div class="form-group d-flex flex-wrap justify-content-between">

                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                                <label class="form-check-label" for="flexCheckDefault">Remember password</label>
                                            </div>
                                            <a href="#" class="font-size-3 text-dodger line-height-reset">Forget Password</a>
                                        </div>
                                        <div class="form-group mb-8 button">
                                            <button class="btn ">Log in
                                            </button>
                                        </div>
                                        <p class="text-center create-new-account">Don’t have an account?
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


            <div class="modal fade form-modal" id="signup" tabindex="-1" aria-hidden="true">
                <div class="modal-dialog max-width-px-840 position-relative">
                    <button type="button" class="circle-32 btn-reset bg-white pos-abs-tr mt-md-n6 mr-lg-n6 focus-reset z-index-supper" data-dismiss="modal">
                        <i class="lni lni-close"></i>
                    </button>
                    <div class="login-modal-main">
                        <div class="row no-gutters">
                            <div class="col-12">
                                <div class="row">
                                    <div class="heading">
                                        <h3>Create a free Account
                                            <br/>
                                            Today</h3>
                                        <p>Create your account to continue
                                            <br/>
                                            and explore new jobs.</p>
                                    </div>
                                    <div class="social-login">
                                        <ul>
                                            <li><a class="linkedin" href="#"><i class="lni lni-linkedin-original"></i>Import
                                                                                                    from LinkedIn</a></li>
                                            <li><a class="google" href="#"><i class="lni lni-google"></i>Import from
                                                                                                    Google</a></li>
                                            <li><a class="facebook" href="#"><i class="lni lni-facebook-original"></i>Import
                                                                                                    from Facebook</a></li>
                                        </ul>
                                    </div>
                                    <div class="or-devider">
                                        <span>Or</span>
                                    </div>
                                    <form action="https://demo.graygrids.com/">
                                        <div class="form-group">
                                            <label for="email" class="label">E-mail</label>
                                            <input type="email" class="form-control" placeholder="example@gmail.com"/>
                                        </div>
                                        <div class="form-group">
                                            <label for="password" class="label">Password</label>
                                            <div class="position-relative">
                                                <input type="password" class="form-control" placeholder="Enter password"/>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label for="password" class="label">Confirm Password</label>
                                            <div class="position-relative">
                                                <input type="password" class="form-control" placeholder="Enter password"/>
                                            </div>
                                        </div>
                                        <div class="form-group d-flex flex-wrap justify-content-between">

                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value=""/>
                                                <label class="form-check-label" for="flexCheckDefault">Agree to the
                                                    <a href="#">Terms & Conditions</a>
                                                </label>
                                            </div>
                                        </div>
                                        <div class="form-group mb-8 button">
                                            <button class="btn ">Sign Up
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <footer class="footer apply-process">
                <div class="footer-top apply-process">
                    <div class="container">
                        <div class="row align-items-center justify-content-center">
                            <div class="col-lg-6 col-12">
                                <div class="download-text text-white">
                                    <h3 class="text-white">Download Our Best Apps</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do<br/>
                                        eiusmod tempor
                                                                                incididunt ut labore et dolore</p>
                                </div>
                            </div>
                            <div class="col-lg-6 col-12">
                                <div class="download-button">
                                    <div class="button">
                                        <a class="btn bg-white text-dark" href="#">
                                            <i class="lni lni-apple"></i>
                                            App Store</a>
                                        <a class="btn bg-white text-dark" href="#">
                                            <i class="lni lni-play-store"></i>
                                            Google Play</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="footer-middle">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-4 col-md-6 col-12">

                                <div class="f-about single-footer">
                                    <div class="logo">
                                        <a href="index.html"><img src="assets/images/logo/logo.svg" alt="Logo"/></a>
                                    </div>
                                    <p>Start building your creative website with our awesome template Massive.</p>
                                    <ul class="contact-address">
                                        <li>
                                            <span>Address:</span>
                                            555 Wall Street, USA, NY</li>
                                        <li>
                                            <span>Email:</span>
                                            <a href="https://demo.graygrids.com/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="b7d2cfd6dac7dbd2f7d6c7c2c499d4d8da">[email&#160;protected]</a>
                                        </li>
                                        <li>
                                            <span>Call:</span>
                                            555-555-1234</li>
                                    </ul>
                                    <div class="footer-social">
                                        <ul>
                                            <li><a href="#"><i class="lni lni-facebook-original"></i></a></li>
                                            <li><a href="#"><i class="lni lni-twitter-original"></i></a></li>
                                            <li><a href="#"><i class="lni lni-linkedin-original"></i></a></li>
                                            <li><a href="#"><i class="lni lni-pinterest"></i></a></li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                            <div class="col-lg-8 col-12">
                                <div class="row">
                                    <div class="col-lg-4 col-md-6 col-12">

                                        <div class="single-footer f-link">
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
                                    <div class="col-lg-4 col-md-6 col-12">

                                        <div class="single-footer f-link">
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
                                    <div class="col-lg-4 col-md-6 col-12">

                                        <div class="single-footer newsletter">
                                            <h3>Join Our Newsletter</h3>
                                            <p>Subscribe to get the latest jobs posted, candidates...</p>
                                            <form action="https://demo.graygrids.com/themes/jobgrids/mail/mail.php" method="get" target="_blank" class="newsletter-inner">
                                                <input name="EMAIL" placeholder="Your email address" class="common-input" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Your email address'" required="" type="email"/>
                                                <div class="button">
                                                    <button class="btn">Subscribe Now!
                                                        <span class="dir-part"></span>
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

                <div class="footer-bottom">
                    <div class="container">
                        <div class="inner">
                            <div class="row">
                                <div class="col-lg-6 col-md-6 col-12">
                                    <div class="left">
                                        <p>Designed and Developed by<a href="https://graygrids.com/" rel="nofollow" target="_blank">GrayGrids</a>
                                        </p>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6 col-12">
                                    <div class="right">
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
