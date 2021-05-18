import AppNavBar from 'components/AppNavBar';
import AppSideBar from 'components/AppSideBar';
import React from 'react';
import { useDispatch } from 'react-redux';
import { OnLogout } from '../../store/modules/auth';
import EmployeeDashboard from './EmployeeDashboard';
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
                <div className="background-dashboard">
                    <div className="background-top">
                    </div>
                    <div className="background-bottom"></div>
                </div>
                <EmployeeDashboard />
            </div>
        </>
    );
};

export default Dashboard;
