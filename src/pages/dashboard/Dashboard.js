import AppNavBar from 'components/AppNavBar';
import AppSideBar from 'components/AppSideBar';
import React from 'react';
import { useDispatch } from 'react-redux';
import { OnLogout } from '../../store/modules/auth';
import './Dashboard.css';

const Dashboard = () => {

    const dispatch = useDispatch();
    const LogOut = () => {
        dispatch(OnLogout());
    }
    return (
        <>
            <div className="d-flex flex-column">
                <AppNavBar />
                <AppSideBar />
                <div class="manage-jobs section">
                    <div class="container">
                        <div class="alerts-inner">
                            <div class="row">

                                <div className="col-lg-4 col-12">
                                    <div className="dashbord-sidebar">
                                        <ul>
                                            <li className="heading">Manage Account</li>
                                            <li>
                                                <a href="/">
                                                    <i className="lni lni-clipboard"></i>
                                                    My Resume</a>
                                            </li>
                                            <li>
                                                <a href="/">
                                                    <i className="lni lni-bookmark"></i>
                                                    Bookmarked Jobs</a>
                                            </li>
                                            <li>
                                                <a href="/">
                                                    <i className="lni lni-alarm"></i>
                                                    Notifications
                                                    <span className="notifi">5</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/">
                                                    <i className="lni lni-envelope"></i>
                                                    Manage
                                                                        Applications</a>
                                            </li>
                                            <li>
                                                <a className="active" href="/">
                                                    <i className="lni lni-briefcase"></i>
                                                    Manage
                                                                        Jobs</a>
                                            </li>
                                            <li>
                                                <a href="/">
                                                    <i className="lni lni-lock"></i>
                                                    Change Password</a>
                                            </li>
                                            <li>
                                                <span className="text-primary pointer" onClick={LogOut}>
                                                    <i className="lni lni-upload"></i>
                                                    Sign Out</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="col-lg-8 col-12">
                                    <div className="job-items">
                                        <div className="manage-list">
                                            <div className="row">
                                                <div className="col-lg-3 col-md-3 col-12">
                                                    <p>Name</p>
                                                </div>
                                                <div className="col-lg-3 col-md-3 col-12">
                                                    <p>Contract Type</p>
                                                </div>
                                                <div className="col-lg-3 col-md-3 col-12">
                                                    <p>Candidates</p>
                                                </div>
                                                <div className="col-lg-3 col-md-3 col-12">
                                                    <p>Featured</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="manage-content">
                                            <div className="row align-items-center justify-content-center">
                                                <div className="col-lg-3 col-md-3 col-12">
                                                    <h3>Web Designer</h3>
                                                </div>
                                                <div className="col-lg-3 col-md-3 col-12">
                                                    <p>
                                                        <span className="time">Full-Time</span>
                                                    </p>
                                                </div>
                                                <div className="col-lg-3 col-md-3 col-12">
                                                    <div className="can-img">
                                                        <a href="/"><img src="assets/images/jobs/candidates.png" alt="#" /></a>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-3 col-12">
                                                    <p>
                                                        <i className="lni lni-star"></i>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="manage-content">
                                            <div className="row align-items-center justify-content-center">
                                                <div className="col-lg-3 col-md-3 col-12">
                                                    <h3>UI/UX designer</h3>
                                                </div>
                                                <div className="col-lg-3 col-md-3 col-12">
                                                    <p>
                                                        <span className="time">Full-Time</span>
                                                    </p>
                                                </div>
                                                <div className="col-lg-3 col-md-3 col-12">
                                                    <div className="can-img">
                                                        <a href="/"><img src="assets/images/jobs/candidates.png" alt="#" /></a>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-3 col-12">
                                                    <p>
                                                        <i className="lni lni-star"></i>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="manage-content">
                                            <div className="row align-items-center justify-content-center">
                                                <div className="col-lg-3 col-md-3 col-12">
                                                    <h3>Developer</h3>
                                                </div>
                                                <div className="col-lg-3 col-md-3 col-12">
                                                    <p>
                                                        <span className="time">Full-Time</span>
                                                    </p>
                                                </div>
                                                <div className="col-lg-3 col-md-3 col-12">
                                                    <div className="can-img">
                                                        <a href="/"><img src="assets/images/jobs/candidates.png" alt="#" /></a>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-3 col-12">
                                                    <p>
                                                        <i className="lni lni-star"></i>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="manage-content">
                                            <div className="row align-items-center justify-content-center">
                                                <div className="col-lg-3 col-md-3 col-12">
                                                    <h3>Senior UX Designer</h3>
                                                </div>
                                                <div className="col-lg-3 col-md-3 col-12">
                                                    <p>
                                                        <span className="time">Full-Time</span>
                                                    </p>
                                                </div>
                                                <div className="col-lg-3 col-md-3 col-12">
                                                    <div className="can-img">
                                                        <a href="/"><img src="assets/images/jobs/candidates.png" alt="#" /></a>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-3 col-12">
                                                    <p>
                                                        <i className="lni lni-star"></i>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="manage-content">
                                            <div className="row align-items-center justify-content-center">
                                                <div className="col-lg-3 col-md-3 col-12">
                                                    <h3>Graphics Design</h3>
                                                </div>
                                                <div className="col-lg-3 col-md-3 col-12">
                                                    <p>
                                                        <span className="time">Full-Time</span>
                                                    </p>
                                                </div>
                                                <div className="col-lg-3 col-md-3 col-12">
                                                    <div className="can-img">
                                                        <a href="/"><img src="assets/images/jobs/candidates.png" alt="#" /></a>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-3 col-12">
                                                    <p>
                                                        <i className="lni lni-star"></i>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="manage-content">
                                            <div className="row align-items-center justify-content-center">
                                                <div className="col-lg-3 col-md-3 col-12">
                                                    <h3>Sales Manager</h3>
                                                </div>
                                                <div className="col-lg-3 col-md-3 col-12">
                                                    <p>
                                                        <span className="time">Part-Time</span>
                                                    </p>
                                                </div>
                                                <div className="col-lg-3 col-md-3 col-12">
                                                    <div className="can-img">
                                                        <a href="/"><img src="assets/images/jobs/candidates.png" alt="#" /></a>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-3 col-12">
                                                    <p>
                                                        <i className="lni lni-star"></i>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="pagination left pagination-md-center">
                                        <ul className="pagination-list">
                                            <li>
                                                <a href="/">
                                                    <i className="lni lni-arrow-left"></i>
                                                </a>
                                            </li>
                                            <li className="active">
                                                <a href="/">1</a>
                                            </li>
                                            <li>
                                                <a href="/">2</a>
                                            </li>
                                            <li>
                                                <a href="/">3</a>
                                            </li>
                                            <li>
                                                <a href="/">4</a>
                                            </li>
                                            <li>
                                                <a href="/">
                                                    <i className="lni lni-arrow-right"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
