import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'primereact/button';
import agentService from 'services/agent.service';
import { loadProfileInfo } from './../store/modules/account';
import { OnLogout } from '../store/modules/auth';

import './AppNavBar.css';

const AppNavBar = ({ displaySearBar = false, instantJobAlert = false }) => {
    const userAccountType = agentService.Auth.current()?.accountType;
    const profileInfo = useSelector((state) => state.account.profileInfo);
    const dispatch = useDispatch();
    const isCorporate = profileInfo.accountType === 'Corporate' ? true : false;
    const LogOut = () => {
        dispatch(OnLogout());
    };

    useEffect(() => {
        dispatch(loadProfileInfo());
    }, [dispatch]);

    return (
        <div className="container-appNavbar">
            <div className="appNavbar">
                <Link
                    to="/dashboard"
                    className="align-self-center">
                    <img
                        className="logo1"
                        src="/assets/logo.png"
                        alt="Logo"
                        width="auto"
                        height="20" />
                </Link>
                <div className="itemContainer-appNavbar">
                    <Link
                        to="/timeline"
                        className="item-appNavbar"
                    >
                        <i className="pi pi-home itemIcon-appNavbar" />
                        <div className="itemTitle-appNavbar">
                            Home
                        </div>
                    </Link>
                    <Link
                        to={userAccountType === "Artisan" ? "/instant-jobs" : "/jobs"}
                        className="item-appNavbar"
                    >
                        <i className="pi pi-briefcase itemIcon-appNavbar" />
                        <div className="itemTitle-appNavbar">
                            Jobs
                        </div>
                    </Link>
                    <Link
                        to="/howtostart"
                        className="item-appNavbar"
                    >
                        <i className="li-icon lni lni-clipboard itemIcon-appNavbar" />
                        <div className="itemTitle-appNavbar">
                            CV Service
                        </div>
                    </Link>
                    <Link
                        to="/contacts"
                        className="item-appNavbar"
                    >
                        <i className="pi pi-users itemIcon-appNavbar" />
                        <div className="itemTitle-appNavbar">
                            Contact
                        </div>
                    </Link>
                    <Link
                        to="#"
                        className="item-appNavbar"
                    >
                        <i className="pi pi-envelope itemIcon-appNavbar" />
                        <div className="itemTitle-appNavbar">
                            Messages
                        </div>
                    </Link>
                    <div
                        id="notification-dropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        className="item-appNavbar"
                    >
                        <i className="pi pi-bell itemIcon-appNavbar" />

                        <div className="itemTitle-appNavbar">
                            Notifications
                        </div>

                    </div>
                    <ul
                        className="dropdown-menu notificationMenu-appNavbar"
                        aria-labelledby="notification-dropdown"
                    >
                        <li className="dropdown-item notification-dropdownItem-appNavbar">
                            <a
                                href="#"
                                className=""
                            >
                                Action
                            </a>
                        </li>
                        <li className="dropdown-item notification-dropdownItem-appNavbar">
                            <a
                                href="#"
                                className=""
                            >
                                Another action
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="d-flex">
                    <Link to={"/instant-hires"} >
                        <Button className="bg-light text-muted requestInstantJob-button-appNavbar">
                            Request Instant Job
                        </Button>
                    </Link>
                    <div
                        id="profile-dropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        className="item-appNavbar"
                    >
                        {
                            profileInfo.imageUrl
                                ?
                                <img
                                    width="40"
                                    height="40"
                                    alt="Profile"
                                    src={profileInfo?.imageUrl}
                                    className="profile-image-appNavbar p-ml-2 profile-largescreen d-flex"
                                />
                                :
                                <div className="profile-largescreen">
                                    <i className="pi pi-user empty-profilepic-appNavbar p-ml-2" />
                                </div>
                        }                    </div>
                    <ul
                        aria-labelledby="profile-dropdown"
                        className="dropdown-menu profileMenu-appNavbar"
                    >
                        <li className="dropdown-item profile-dropdownItem-appNavbar">
                            <Link to={!isCorporate ? "/profile" : "/company"}>
                                < i className="li-icon lni lni-user"></i>
                                <span className="li-title">My Profile</span>
                            </Link>
                        </li>
                        <li className="dropdown-item profile-dropdownItem-appNavbar">
                            <Link to="/change-password">
                                <i className="li-icon lni lni-lock"></i>
                                <span className="li-title">Change Password</span>
                            </Link>
                        </li>
                        <li className='dropdown-item profile-dropdownItem-appNavbar' onClick={LogOut}>
                            <Link to="/howtostart">
                                <i className="li-icon lni lni-upload"></i>
                                <span className="li-title">Sign Out</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            {
                instantJobAlert &&
                <div className="alert-appNavbar">
                    There are 9 available Plumbers for your location at Ikeja, Lagos
                </div>
            }
            {
                displaySearBar &&
                <div className="search-bar mx-auto align-content-center">
                    <div className="input-group py-4 mx-auto" style={{ width: '25rem' }}>
                        <input type="text" className="form-control" placeholder="search for content" aria-label="search for content" aria-describedby="basic-addon2" />
                        <span className="input-group-text btn brown-color" id="basic-addon2">Search</span>
                    </div>
                </div>
            }
        </div >
    )
}

export default AppNavBar;
