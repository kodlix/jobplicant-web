import AppNavBar from 'components/AppNavBar';
import React from 'react';
import { Route, Redirect } from 'react-router';
import AppSideBar from '../components/AppSideBar'

import agent from '../services/agent.service';

const ProtectedRoute = ({ children, ...rest }) => {
  if (agent.Auth.isAuth() && !agent.Auth.isAdmin()) {
    return (
      <>
        <div>
          <AppNavBar />
          <Route {...rest}>{children}</Route>
        </div>
      </>
    )
  } else {
    if(agent.Auth.isAuth() && agent.Auth.isAdmin()){
      return <Redirect to={{ pathname: '/admin' }} />;
    }
    else{
      return <Redirect to={{ pathname: '/login' }} />;
    }
  }
};

export default ProtectedRoute;
