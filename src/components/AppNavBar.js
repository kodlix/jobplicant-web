import React from 'react';
import {Link} from 'react-router-dom';
import './AppNavBar.css';

const AppNavBar = () => {

    return (
        <div className="header-container">
            <header className="header">
                <div className="navbar-area brown-color text-light">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-12">
                                <nav className="navbar navbar-expand-lg">
                                    <a className="navbar-brand logo" href="index.html">
                                      <img className="logo1" src="assets/logo.png" alt="Logo" />
                                    </a>
                                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="toggler-icon"></span>
                                        <span className="toggler-icon"></span>
                                        <span className="toggler-icon"></span>
                                    </button>
                                    <div className="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
                                        <ul id="nav" className="navbar-nav ml-auto">
                                            <li className="nav-item">
                                                <a className="active text-light" href="index.html">Home</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="#">Jobs</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="#">Hire</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="#">Contacts
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="#">messages</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="contact.html">Contact
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="#">notifications</a>
                                                <ul className="sub-menu">
                                                    <li>
                                                        <a href="blog-grid-sidebar.html">notification 1</a>
                                                    </li>
                                                    <li>
                                                    <a href="blog-grid-sidebar.html">notification 2</a>
                                                    </li>
                                                    <li>
                                                    <a href="blog-grid-sidebar.html">notification 3</a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>

                                    <button className="button btn bg-light text-muted font-weight-bold" style={{width: '14rem'}}>
                                            Post Instant Job
                                    </button>
                                </nav>

                            </div>
                        </div>

                    </div>

                </div>
            </header>
            <div class="app-alert">
                <div className="container">
                <p className="px-4">
                    There are 9 available Plumbers for your location at Ikeja, Lagos
                </p>
                </div>                
            </div>
            <div class="search-bar mx-auto align-content-center">
                <div class="input-group py-4 mx-auto" style={{width: '25rem'}}>
                    <input type="text" class="form-control" placeholder="search for content" aria-label="search for content" aria-describedby="basic-addon2"/>
                    <span class="input-group-text btn brown-color" id="basic-addon2">Search</span>
                </div>
            </div>
        </div>

    );
}

export default AppNavBar;
