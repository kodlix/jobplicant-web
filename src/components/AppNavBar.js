import React from 'react';
import { Link } from 'react-router-dom';

import agentService from 'services/agent.service';
import { Navbar, Container, Nav } from 'react-bootstrap'

// import './AppNavBar.css';

const AppNavBar = ({ displaySearBar = false }) => {
    const userAccountType = agentService.Auth.current().accountType;


    return (
        <div className="header-container">
            <header>
                <Navbar collapseOnSelect expand="lg" className="navbar-area brown-color text-light py-4" style={{ borderRadius: '0px' }} >
                    <Container className="d-flex">
                        <div className="d-flex " style={{ width: `100%` }}>
                            <Navbar.Brand>
                                <a className="navbar-brand logo" href="/">
                                    <img className="logo1" src="/assets/logo.png" alt="Logo" />
                                </a>
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" className="bg-white" />
                        </div>
                        <Navbar.Collapse id="responsive-navbar-nav" className="brown-color text-center">
                            <Nav className="me-auto text-align-sm-center">
                                <Nav.Link className="text-white" href="/timeline">Home</Nav.Link>
                                {userAccountType === "Artisan" ?
                                    <Nav.Link className="text-white" href="/instant-jobs">Jobs</Nav.Link>
                                    : <Nav.Link className="text-white" href="/jobs">Jobs</Nav.Link>}
                                <Nav.Link className="text-white" href="/contacts">Contacts</Nav.Link>
                                <Nav.Link className="text-white" href="#">Messages</Nav.Link>
                                <Nav.Link className="text-white" href="#">Notifications</Nav.Link>
                                <Nav.Link className="text-white d-lg-none" href="/instant-hires">Request Instant Job</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                        <Link to={"/instant-hires"} className="button btn bg-light text-muted font-weight-bold request-instant-job d-none d-lg-block" >
                            Request Instant Job
                        </Link>
                    </Container>
                </Navbar>
            </header>
            <div className="app-alert">
                <div className="container">
                    <p className="px-4">
                        There are 9 available Plumbers for your location at Ikeja, Lagos
                    </p>
                </div>
            </div>
            {displaySearBar &&
                <div className="search-bar mx-auto align-content-center">
                    <div className="input-group py-4 mx-auto" style={{ width: '25rem' }}>
                        <input type="text" className="form-control" placeholder="search for content" aria-label="search for content" aria-describedby="basic-addon2" />
                        <span className="input-group-text btn brown-color" id="basic-addon2">Search</span>
                    </div>
                </div>
            }
        </div>
    )

    return (
        <div className="header-container">
            <header className="header">
                <div className="navbar-area brown-color text-light">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-12">
                                <nav className="navbar navbar-expand-lg">
                                    <Link className="navbar-brand logo" to="/profile-info">
                                        <img className="logo1" src="/assets/logo.png" alt="Logo" />
                                    </Link>
                                    <button
                                        className="navbar-toggler"
                                        type="button"
                                        data-toggle="collapse"
                                        data-target="#navbarSupportedContent"
                                        aria-controls="navbarSupportedContent"
                                        aria-expanded="false"
                                        aria-label="Toggle navigation">
                                        <span className="toggler-icon"></span>
                                        <span className="toggler-icon"></span>
                                        <span className="toggler-icon"></span>
                                    </button>
                                    <div className="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
                                        <ul id="nav" className="navbar-nav ml-auto">
                                            <li className="nav-item">
                                                <Link className="active text-light" to="/timeline">Home</Link>
                                            </li>
                                            <li className="nav-item">
                                                {userAccountType === "Artisan" ?
                                                    <Link to="/instant-jobs">Jobs</Link> : <Link to="/jobs">Jobs</Link>}
                                            </li>
                                            {/* <li className="nav-item">
                                                <Link to="#">Hire</Link>
                                            </li> */}
                                            <li className="nav-item">
                                                <Link to="/contacts">Contacts
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link to="#">messages</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link to="#">notifications</Link>
                                                {/* <ul className="sub-menu">
                                                    <li>
                                                        <Link to="/instant-jobs">Instant Jobs</Link>
                                                    </li>
                                                </ul> */}
                                            </li>
                                        </ul>
                                    </div>
                                    <Link to={"/instant-hires"} className="button btn bg-light text-muted font-weight-bold" style={{ width: '14rem' }}>
                                        Request Instant Job
                                    </Link>
                                </nav>

                            </div>
                        </div>

                    </div>

                </div>
            </header>
            <div className="app-alert">
                <div className="container">
                    <p className="px-4">
                        There are 9 available Plumbers for your location at Ikeja, Lagos
                    </p>
                </div>
            </div>
            {displaySearBar &&
                <div className="search-bar mx-auto align-content-center">
                    <div className="input-group py-4 mx-auto" style={{ width: '25rem' }}>
                        <input type="text" className="form-control" placeholder="search for content" aria-label="search for content" aria-describedby="basic-addon2" />
                        <span className="input-group-text btn brown-color" id="basic-addon2">Search</span>
                    </div>
                </div>
            }
        </div>

    );
}

export default AppNavBar;
