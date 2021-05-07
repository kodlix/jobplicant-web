import AppNavBar from 'components/AppNavBar';
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
            <div class="d-flex flex-column">
                <AppNavBar />
                <div class="manage-jobs section">
                    <div class="container">
                        <div class="alerts-inner">
                            <div class="row">

                                <div class="col-lg-4 col-12">
                                    <div class="dashbord-sidebar">
                                        <ul>
                                            <li class="heading">Manage Account</li>
                                            <li>
                                                <a href="resume.html">
                                                    <i class="lni lni-clipboard"></i>
                                                    My Resume</a>
                                            </li>
                                            <li>
                                                <a href="bookmarked.html">
                                                    <i class="lni lni-bookmark"></i>
                                                    Bookmarked Jobs</a>
                                            </li>
                                            <li>
                                                <a href="notifications.html">
                                                    <i class="lni lni-alarm"></i>
                                                    Notifications
                                                    <span class="notifi">5</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="manage-applications.html">
                                                    <i class="lni lni-envelope"></i>
                                                    Manage
                                                                        Applications</a>
                                            </li>
                                            <li>
                                                <a class="active" href="manage-jobs.html">
                                                    <i class="lni lni-briefcase"></i>
                                                    Manage
                                                                        Jobs</a>
                                            </li>
                                            <li>
                                                <a href="change-password.html">
                                                    <i class="lni lni-lock"></i>
                                                    Change Password</a>
                                            </li>
                                            <li>
                                                <span className="text-primary pointer" onClick={LogOut}>
                                                    <i class="lni lni-upload"></i>
                                                    Sign Out</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div class="col-lg-8 col-12">
                                    <div class="job-items">
                                        <div class="manage-list">
                                            <div class="row">
                                                <div class="col-lg-3 col-md-3 col-12">
                                                    <p>Name</p>
                                                </div>
                                                <div class="col-lg-3 col-md-3 col-12">
                                                    <p>Contract Type</p>
                                                </div>
                                                <div class="col-lg-3 col-md-3 col-12">
                                                    <p>Candidates</p>
                                                </div>
                                                <div class="col-lg-3 col-md-3 col-12">
                                                    <p>Featured</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="manage-content">
                                            <div class="row align-items-center justify-content-center">
                                                <div class="col-lg-3 col-md-3 col-12">
                                                    <h3>Web Designer</h3>
                                                </div>
                                                <div class="col-lg-3 col-md-3 col-12">
                                                    <p>
                                                        <span class="time">Full-Time</span>
                                                    </p>
                                                </div>
                                                <div class="col-lg-3 col-md-3 col-12">
                                                    <div class="can-img">
                                                        <a href="#"><img src="assets/images/jobs/candidates.png" alt="#" /></a>
                                                    </div>
                                                </div>
                                                <div class="col-lg-3 col-md-3 col-12">
                                                    <p>
                                                        <i class="lni lni-star"></i>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="manage-content">
                                            <div class="row align-items-center justify-content-center">
                                                <div class="col-lg-3 col-md-3 col-12">
                                                    <h3>UI/UX designer</h3>
                                                </div>
                                                <div class="col-lg-3 col-md-3 col-12">
                                                    <p>
                                                        <span class="time">Full-Time</span>
                                                    </p>
                                                </div>
                                                <div class="col-lg-3 col-md-3 col-12">
                                                    <div class="can-img">
                                                        <a href="#"><img src="assets/images/jobs/candidates.png" alt="#" /></a>
                                                    </div>
                                                </div>
                                                <div class="col-lg-3 col-md-3 col-12">
                                                    <p>
                                                        <i class="lni lni-star"></i>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="manage-content">
                                            <div class="row align-items-center justify-content-center">
                                                <div class="col-lg-3 col-md-3 col-12">
                                                    <h3>Developer</h3>
                                                </div>
                                                <div class="col-lg-3 col-md-3 col-12">
                                                    <p>
                                                        <span class="time">Full-Time</span>
                                                    </p>
                                                </div>
                                                <div class="col-lg-3 col-md-3 col-12">
                                                    <div class="can-img">
                                                        <a href="#"><img src="assets/images/jobs/candidates.png" alt="#" /></a>
                                                    </div>
                                                </div>
                                                <div class="col-lg-3 col-md-3 col-12">
                                                    <p>
                                                        <i class="lni lni-star"></i>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="manage-content">
                                            <div class="row align-items-center justify-content-center">
                                                <div class="col-lg-3 col-md-3 col-12">
                                                    <h3>Senior UX Designer</h3>
                                                </div>
                                                <div class="col-lg-3 col-md-3 col-12">
                                                    <p>
                                                        <span class="time">Full-Time</span>
                                                    </p>
                                                </div>
                                                <div class="col-lg-3 col-md-3 col-12">
                                                    <div class="can-img">
                                                        <a href="#"><img src="assets/images/jobs/candidates.png" alt="#" /></a>
                                                    </div>
                                                </div>
                                                <div class="col-lg-3 col-md-3 col-12">
                                                    <p>
                                                        <i class="lni lni-star"></i>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="manage-content">
                                            <div class="row align-items-center justify-content-center">
                                                <div class="col-lg-3 col-md-3 col-12">
                                                    <h3>Graphics Design</h3>
                                                </div>
                                                <div class="col-lg-3 col-md-3 col-12">
                                                    <p>
                                                        <span class="time">Full-Time</span>
                                                    </p>
                                                </div>
                                                <div class="col-lg-3 col-md-3 col-12">
                                                    <div class="can-img">
                                                        <a href="#"><img src="assets/images/jobs/candidates.png" alt="#" /></a>
                                                    </div>
                                                </div>
                                                <div class="col-lg-3 col-md-3 col-12">
                                                    <p>
                                                        <i class="lni lni-star"></i>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="manage-content">
                                            <div class="row align-items-center justify-content-center">
                                                <div class="col-lg-3 col-md-3 col-12">
                                                    <h3>Sales Manager</h3>
                                                </div>
                                                <div class="col-lg-3 col-md-3 col-12">
                                                    <p>
                                                        <span class="time">Part-Time</span>
                                                    </p>
                                                </div>
                                                <div class="col-lg-3 col-md-3 col-12">
                                                    <div class="can-img">
                                                        <a href="#"><img src="assets/images/jobs/candidates.png" alt="#" /></a>
                                                    </div>
                                                </div>
                                                <div class="col-lg-3 col-md-3 col-12">
                                                    <p>
                                                        <i class="lni lni-star"></i>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="pagination left pagination-md-center">
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
                </div>
            </div>
        </>
    );
};

export default Dashboard;
