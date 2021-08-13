import React from 'react';
import { Link } from 'react-router-dom';

import agentService from 'services/agent.service';
import { Navbar, Container, Nav } from 'react-bootstrap'

// import './AppNavBar.css';

const AppNavBar = ({ displaySearBar = false }) => {
    const userAccountType = agentService.Auth.current().accountType;


    return (
        <div className="header-container menubar">
            <header className="menu d-flex flex-column-reverse">
                <Navbar collapseOnSelect expand="lg" className="navbar-area brown-color text-light py-4" style={{ borderRadius: '0px' }} >
                    <Container className="d-flex">
                        <div className="d-flex " style={{ width: `100%` }}>
                            <Navbar.Brand href="#home">
                                <Link className="navbar-brand logo" to="/profile-info">
                                    <img className="logo1" src="/assets/logo.png" alt="Logo" height="20" />
                                </Link>
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
}

export default AppNavBar;
