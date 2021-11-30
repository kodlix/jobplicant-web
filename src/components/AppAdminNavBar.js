import React from 'react';
import { Link } from 'react-router-dom';
import './AppNavBar.css';

const AppAdminNavBar = ({
    displaySearBar = false
}) => {

    return (
        <div className="header-container mb-5">
            <header className="header">
                <div className="navbar-area brown-color text-light">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-12">
                                <nav className="navbar navbar-expand-lg">
                                    <Link className="navbar-brand logo" to="/profile-info">
                                        <img className="logo1" src="/assets/images/logo/applogo.jpeg" alt="Logo" />
                                    </Link>
                                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="toggler-icon"></span>
                                        <span className="toggler-icon"></span>
                                        <span className="toggler-icon"></span>
                                    </button>
                                    <div className="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
                                        <ul id="nav" className="navbar-nav ml-auto">
                                            <li className="nav-item">
                                                <Link className="active p-py-3 text-white" to="/">Home</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link to="#" className="p-py-3 text-white">messages</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link to="/contact" className="p-py-3 text-white">Contact
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link to="#" className="p-py-3 text-white">notifications</Link>
                                                <ul className="sub-menu">
                                                    <li>
                                                        <Link to="/blog-grid-sidebar">notification 1</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="blog-grid-sidebar.html">notification 2</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="blog-grid-sidebar.html">notification 3</Link>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </nav>

                            </div>
                        </div>

                    </div>

                </div>
            </header>
            {
                displaySearBar && <div className="search-bar mx-auto align-content-center">
                    <div className="input-group py-4 mx-auto"
                        style={
                            { width: '25rem' }
                        }>
                        <input type="text" className="form-control" placeholder="search for content" aria-label="search for content" aria-describedby="basic-addon2" />
                        <span className="input-group-text btn brown-color" id="basic-addon2">Search</span>
                    </div>
                </div>
            } </div>

    );
}

export default AppAdminNavBar;
