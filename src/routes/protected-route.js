import AppNavBar from 'components/AppNavBar';
import ChatContainer from 'components/chat/ChatContainer';
import ChatContent from 'components/chat/ChatContent';
import React from 'react';
import { Route, Redirect } from 'react-router';
import AppSideBar from '../components/AppSideBar'

import agent from '../services/agent.service';

const ProtectedRoute = ({ children, ...rest }) => {
  const [contact, setContact] = React.useState(null)
 
  if (agent.Auth.isAuth() && !agent.Auth.isAdmin()) {
    return (
      <>
        <div>
          <AppNavBar />
          <Route {...rest}>{children}</Route>
          <ChatContainer setContact={setContact} selectedContact={contact} />
          {contact !== null && <ChatContent setContact={setContact} contact={contact} />}
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
