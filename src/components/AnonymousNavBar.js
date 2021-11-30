import React from 'react';
import { Link } from 'react-router-dom';
import './AnonymousNavBar.css';

const AnonymousNavBar = () => {
  return (
    <div className="header header-anonymous">
      <div className="navbar-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <nav className="navbar navbar-expand-lg py-2">
                <Link className="navbar-brand logo" to="/timeline">
                  <img className="logo1" src="/assets/images/logo/applogo.jpeg" alt="Logo" />
                </Link>
                <div className="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent"></div>
                <div className="button">
                  <Link to="/jobs" className="login"> <i className="lni lni-briefcase"></i>
                    Jobs</Link>
                  <Link to="/login" className="login"> <i className="lni lni-lock-alt"></i>
                    Login</Link>
                  <Link to="/register" className="btn">Sign Up</Link>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default AnonymousNavBar;