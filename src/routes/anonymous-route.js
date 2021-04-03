import React from 'react';
import { Route, Redirect } from 'react-router';
import agent from '../services/agent.service';

const AnonymousRoute = ({ children, ...rest }) => {
  console.log("in anonymous " + agent.Auth.isAuth());
  const isAuthenticated = agent.Auth.isAuth();
  if (!isAuthenticated) {
    console.log("not authenticated")
    return <Route {...rest} >{children}</Route>
  }
  else {
    return <Redirect to={{ pathname: "/dashboard" }} />
  }
}

export default AnonymousRoute;