import React from 'react';
import { NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './AppLogo.css';

const AppLogo = () => {
    return (
        <div>
            <Link className="navbar-brand" to="/" >
                <img className="small-logo" src="assets/img/logo-small.png" alt="logo" />
                <span className="badge badge-warning text-white app-name-logo" id="beta_sm">BETA</span>
                {/* <span className="badge badge-warning text-white small-logo">BETA</span> */}
            </Link>
            <Link className="navbar-brand" to="/" id="big-logo" >
                <img className="big-logo" src="assets/img/logo.png" alt="logo" />
                <span className="badge badge-warning text-white" id="big-logo-beta">BETA</span>
            </Link>
            <Link className="navbar-brand" to="/">
                <h1 className="app-name-logo" id="betalogo_sm">Kapsuul</h1>
                <span className="badge badge-warning text-white app-name-logo" id="beta_sm">BETA</span>
            </Link>
        </div>
    );
}

export default AppLogo;