import React, { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { PanelMenu } from 'primereact/panelmenu';
import { useDispatch } from 'react-redux';
import { OnLogout } from '../store/modules/auth';
import { Link } from 'react-router-dom';

import './AppAdminSideBar.css';

const AppAdminSideBar = (props) => {
    const dispatch = useDispatch();
    const [visibleLeft, setVisibleLeft] = useState(false);

    const LogOut = () => {
        dispatch(OnLogout());
    };

    const setups = [
        {
            label: 'Setups & Configurations',
            items: [
                {
                    label: 'Qualifications',
                    icon: 'pi pi-fw pi-align-left',
                    url: '/admin-qualification'
                },
                {
                    label: 'Skills',
                    icon: 'pi pi-fw pi-align-right',
                    url: '/admin-skills'
                },
                {
                    label: 'Contract Types',
                    icon: 'pi pi-fw pi-align-center',
                    url: '/admin-contractType'
                },
                {
                    label: 'Countries',
                    icon: 'pi pi-fw pi-align-justify'
                },

                {
                    label: 'States',
                    icon: 'pi pi-fw pi-align-justify'
                },

                {
                    label: 'LGAs',
                    icon: 'pi pi-fw pi-align-justify'
                },

            ]
        },
    ];

    return (
        <div className="adminSidebar">
            <Button icon="pi pi-arrow-right" onClick={() => setVisibleLeft(true)} className="p-mr-2 sideBar-button" />
            <Sidebar visible={visibleLeft} onHide={() => setVisibleLeft(false)} className="adminSidebar">
                <div className="col-12">
                    <div className="dashbord-sidebar">
                        <ul>
                            <li className="heading">Jobplicant Admin Management</li>

                            <li className='li-border'>
                                <Link to="/accounts">
                                    <i className="li-icon lni lni-user"></i>
                                    <span className="li-title">Accounts</span>
                                </Link>
                            </li>
                            <li className='li-border'>
                                <Link to="/admin-services">
                                    <i className="li-icon lni lni-clipboard"></i>
                                    <span className="li-title">Services</span>
                                </Link>
                            </li>
                            <li className='li-border'>
                                <a href="bookmarked.html">
                                    <i className="li-icon lni lni-bookmark"></i>
                                    <span className="li-title">Bookmarked Jobs</span>
                                </a>
                            </li>
                            <li>
                                <PanelMenu model={setups} />
                            </li>
                            <li className='li-border'>
                                <a href="manage-applications.html">
                                    <i className="li-icon lni lni-envelope"></i>
                                    <span className="li-title">CV Templates</span>
                                </a>
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
        </div>
    );
}

export default AppAdminSideBar;