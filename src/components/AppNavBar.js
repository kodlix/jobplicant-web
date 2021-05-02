import React from 'react';
import {Link} from 'react-router-dom';
import './AppNavBar.css';

const AppNavBar = () => {

    return (
        <header className="header">
            <div className="navbar-area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12">
                            <nav className="navbar navbar-expand-lg">
                                <a className="navbar-brand logo" href="index.html">
                                    <img className="logo1" src="assets/images/logo/logo.svg" alt="Logo"/>
                                </a>
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="toggler-icon"></span>
                                    <span className="toggler-icon"></span>
                                    <span className="toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
                                    <ul id="nav" className="navbar-nav ml-auto">
                                        <li className="nav-item">
                                            <a className="active" href="index.html">Home</a>
                                            <ul className="sub-menu">
                                                <li>
                                                    <a href="index.html">Home 1</a>
                                                </li>
                                                <li>
                                                    <a className="active" href="index2.html">Home 2</a>
                                                </li>
                                                <li>
                                                    <a href="index3.html">Home 3</a>
                                                </li>
                                                <li>
                                                    <a href="index4.html">Home 4</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#">Pages</a>
                                            <ul className="sub-menu">
                                                <li>
                                                    <a href="about-us.html">About Us</a>
                                                </li>
                                                <li>
                                                    <a href="job-list.html">Job List</a>
                                                </li>
                                                <li>
                                                    <a href="job-details.html">Job Details</a>
                                                </li>
                                                <li>
                                                    <a href="resume.html">Resume Page</a>
                                                </li>
                                                <li>
                                                    <a href="privacy-policy.html">Privacy Policy</a>
                                                </li>
                                                <li>
                                                    <a href="faq.html">Faq</a>
                                                </li>
                                                <li>
                                                    <a href="pricing.html">Our Pricing</a>
                                                </li>
                                                <li>
                                                    <a href="404.html">404 Error</a>
                                                </li>
                                                <li>
                                                    <a href="mail-success.html">Mail Success</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#">Candidates</a>
                                            <ul className="sub-menu">
                                                <li>
                                                    <a href="browse-jobs.html">Browse Jobs</a>
                                                </li>
                                                <li>
                                                    <a href="browse-categories.html">Browse Categories</a>
                                                </li>
                                                <li>
                                                    <a href="add-resume.html">Add Resume</a>
                                                </li>
                                                <li>
                                                    <a href="job-alerts.html">Job Alerts</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#">Employers
                                            </a>
                                            <ul className="sub-menu">
                                                <li>
                                                    <a href="post-job.html">Add Job</a>
                                                </li>
                                                <li>
                                                    <a href="manage-jobs.html">Manage Jobs</a>
                                                </li>
                                                <li>
                                                    <a href="manage-applications.html">Manage Applications</a>
                                                </li>
                                                <li>
                                                    <a href="manage-resumes.html">Manage Resume</a>
                                                </li>
                                                <li>
                                                    <a href="browse-resumes.html">Browse Resumes</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#">Blog</a>
                                            <ul className="sub-menu">
                                                <li>
                                                    <a href="blog-grid-sidebar.html">Blog Grid Sidebar</a>
                                                </li>
                                                <li>
                                                    <a href="blog-single.html">Blog Single</a>
                                                </li>
                                                <li>
                                                    <a href="blog-single-sidebar.html">Blog Single Sibebar</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item">
                                            <a href="contact.html">Contact
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="button">
                                    <a href="javacript:" data-toggle="modal" data-target="#login" className="login">
                                        <i className="lni lni-lock-alt"></i>
                                        Login</a>
                                    <a href="javacript:" data-toggle="modal" data-target="#signup" className="btn">Sign Up</a>
                                </div>
                            </nav>

                        </div>
                    </div>

                </div>

            </div>

        </header>

    );
}

export default AppNavBar;
