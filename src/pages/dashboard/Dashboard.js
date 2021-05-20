import AppNavBar from 'components/AppNavBar';
import React from 'react';
import EmployeeDashboard from './EmployeeDashboard';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <>
            <div className="d-flex flex-column">
                <AppNavBar />
                <div className="background-dashboard">
                    <div className="background-top">
                    </div>
                    <div className="background-bottom">
                        <EmployeeDashboard />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
