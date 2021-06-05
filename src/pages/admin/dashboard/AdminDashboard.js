import React from 'react';
import EmployeeDashboard from './EmployeeDashboard';


const AdminDashboard = () => {
    return (
        <div className="background-dashboard container">
            <div className="background-top"></div>
            <div className="background-bottom">
                <EmployeeDashboard/>
            </div>
        </div>
    );
}

export default AdminDashboard;
