import React from 'react';
import { Route, Redirect } from 'react-router';
import AppSideBar from '../components/AppSideBar'

import agent from '../services/agent.service';

const ProtectedRoute = ({ children, ...rest }) => {
  if (agent.Auth.isAuth()) {
    return (
      <>
        <AppSideBar />
        <Route {...rest}>{children}</Route>
      </>
    )
  } else {
    return <Redirect to={{ pathname: '/login' }} />;
  }
};

export default ProtectedRoute;
