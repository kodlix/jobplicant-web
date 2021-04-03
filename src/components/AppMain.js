import React from 'react';
// import './Dashboard.css';
import AppBreadCrumb from './AppBreadCrumb';
import AppSideBar from './AppSideBar';
import AppFooter from './AppFooter';

const AppMain = (props) => {
    return (
        <React.Fragment>
            <AppBreadCrumb />
            <div className="pb-5 bg-succes">
                <div className="custom-container">
                    <div className="row">
                        <AppSideBar />
                        {props.children}
                    </div>
                </div>
            </div>
            <AppFooter />
        </React.Fragment>
    )
}

export default AppMain;