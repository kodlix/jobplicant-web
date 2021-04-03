import React from 'react';
import { NavLink } from 'react-router-dom';

const AppFooter = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row align-items-center no-gutters border-top py-2">
                    <div className="col-md-6 col-12">
                        <span>© 2020 All Rights Reserved.</span>
                    </div>
                    <div className="col-12 col-md-6">
                        <nav className="nav justify-content-center justify-content-md-end">
                            <a className="nav-link active pl-0" href="#">Privacy</a>
                            <a className="nav-link" href="#">Terms </a>
                            <a className="nav-link" href="#">Feedback</a>
                            <a className="nav-link" href="#">Support</a>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AppFooter;