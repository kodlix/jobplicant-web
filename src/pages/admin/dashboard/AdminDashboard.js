import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch, Route, Link } from 'react-router-dom';
import { loadProfileInfo } from 'store/modules/account';

import EmployeeDashboard from './EmployeeDashboard';


const AdminDashboard = () => {
    const dispatch = useDispatch();
    const match = useRouteMatch();
    const profileInfo = useSelector((state) => state.account.profileInfo);

    useEffect(() => {
        dispatch(loadProfileInfo());
    }, [])


    // const openCreate = (name) => {
    //     setMode("create");
    //     dispatch(openModal(name));
    // };

    // const openEdit = (name) => {
    //     setMode("edit");
    //     // setItemToEdit(data);
    //     dispatch(openModal(name));
    // };



    return (
        <div className="background-dashboard container">
            <div className="background-top"></div>
            <div className="background-bottom" >
                <EmployeeDashboard />            
            </div>

        </div>
    );
}


export default AdminDashboard;
