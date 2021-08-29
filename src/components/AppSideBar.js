import React, { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { PanelMenu } from 'primereact/panelmenu';
import { useDispatch } from 'react-redux';
import { OnLogout } from '../store/modules/auth';
import { Link } from 'react-router-dom';

// import './AppSideBar.css';
import agentService from 'services/agent.service';

const AppSideBar = (props) => {
    const dispatch = useDispatch();
    const [visibleLeft, setVisibleLeft] = useState(false);

    const LogOut = () => {
        dispatch(OnLogout());
    };

    const userAccountType = agentService.Auth.current().accountType;
    const items = [
        {
            label: 'Notifications',
            icon: 'pi pi-bell',
            items: [
                {
                    label: 'Left',
                    icon: 'pi pi-fw pi-align-left'
                },
                {
                    label: 'Right',
                    icon: 'pi pi-fw pi-align-right'
                },
                {
                    label: 'Center',
                    icon: 'pi pi-fw pi-align-center'
                },
                {
                    label: 'Justify',
                    icon: 'pi pi-fw pi-align-justify'
                },

            ]
        },
    ];

    return (
        <>
            <Button icon="pi pi-arrow-right" onClick={() => setVisibleLeft(true)} className="p-mr-2 sideBar-button" />
            <Sidebar visible={visibleLeft} onHide={() => setVisibleLeft(false)}>
                <div className="col-12">
                    <div className="dashbord-sidebar">
                        <ul>
                            <li className="heading">Manage Account</li>
                            {userAccountType === "Corporate" ? <li className='li-border'>
                                <Link to="/company">
                                    <i className="li-icon lni lni-user"></i>
                                    <span className="li-title">My Profile</span>
                                </Link>
                            </li> : <li className='li-border'>
                                <Link to="/profile">
                                    <i className="li-icon lni lni-user"></i>
                                    <span className="li-title">My Profile</span>
                                </Link>
                            </li>}

                            <li className='li-border'>
                                <Link to="/howtostart">
                                    <i className="li-icon lni lni-clipboard"></i>
                                    <span className="li-title">CV Service</span>
                                </Link>
                            </li>
                            <li className='li-border'>
                                <a href="bookmarked.html">
                                    <i className="li-icon lni lni-bookmark"></i>
                                    <span className="li-title">Bookmarked Jobs</span>
                                </a>
                            </li>
                            <li>
                                <Link to="/dashboard">
                                    <PanelMenu model={items} />
                                </Link>
                            </li>
                            <li className='li-border'>
                                <a href="manage-applications.html">
                                    <i className="li-icon lni lni-envelope"></i>
                                    <span className="li-title">Manage Applications</span>
                                </a>
                            </li>
                            <li className='li-border'>
                                <a className="active" href="manage-jobs.html">
                                    <i className="li-icon lni lni-briefcase"></i>
                                    <span className="li-title">Manage Jobs</span>
                                </a>
                            </li>
                            <li className='li-border'>
                                <a href="change-password.html">
                                    <i className="li-icon lni lni-lock"></i>
                                    <span className="li-title">Change Password</span>
                                </a>
                            </li>
                            <li className='li-border' onClick={LogOut}>
                                <a href="change-password.html">
                                    <i className="li-icon lni lni-upload"></i>
                                    <span className="li-title">Sign Out</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </Sidebar>
        </>
    );
}

export default AppSideBar;