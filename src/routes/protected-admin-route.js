import React from 'react';
import { Route, Redirect } from 'react-router';

import AppAdminNavBar from 'components/AppAdminNavBar';
import AppAdminSideBar from 'components/AppAdminSideBar';
import agent from '../services/agent.service';

const ProtectedAdminRoute = ({ children, ...rest }) => {
  if (agent.Auth.isAuth() && agent.Auth.isAdmin()) {
    return (
      <>
        <div className='d-flex flex-column'>
          <AppAdminNavBar />
          <AppAdminSideBar />
          <Route {...rest}>{children}</Route>
        </div>
      </>
    )
  } else {
    return <Redirect to={{ pathname: '/login' }} />;
  }
};

export default ProtectedAdminRoute;
