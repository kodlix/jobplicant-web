import AppNavBar from 'components/AppNavBar';
import AnonymousNavBar from 'components/AnonymousNavBar';
import React from 'react';
import { Route, Redirect } from 'react-router';
import AppSideBar from '../components/AppSideBar'

import agent from '../services/agent.service';

const AnonymousRouteOrProtectedRoute = ({ children, ...rest }) => {
  if (!agent.Auth.isAuth()) {
    return (
      <>
        <AnonymousNavBar />
        <Route {...rest}>{children}</Route>
      </>
    )
  } else {
    if (agent.Auth.isAdmin()) {
      return <Redirect to={{ pathname: '/admin' }} />;
    }
    else {
      return (
        <>
          <div className='d-flex flex-column'>
            <AppNavBar />
            <AppSideBar />
            <Route {...rest}>{children}</Route>
          </div>
        </>
      )
    }
  }
};

export default AnonymousRouteOrProtectedRoute;
