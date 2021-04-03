import React from 'react';
import { useDispatch } from 'react-redux';
import { OnLogout } from '../Store/modules/auth';
import { Link } from 'react-router-dom';

import './AppSideBar.css';
import agent from '../../agent';

const AppSideBar = (props) => {
    return (
        <div className="col-lg-3 col-md-4 col-12">
            Side bar
        </div>

    );
}

export default AppSideBar;