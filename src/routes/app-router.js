import React, { useEffect, } from 'react'
import { Switch, Redirect, useLocation } from 'react-router';
import { useDispatch } from 'react-redux';
import { clearMessage } from "../store/modules/notification";
import AppLoading from '../components/AppLoading';
import AnonymousRoute from './anonymous-route';
import ProtectedRoute from './protected-route';
import AppContentContext from '../contexts/AppContentContext'

const Dashboard = React.lazy(() => import('../pages/dashboard/Dashboard'));
const LandingPage = React.lazy(() => import('../pages/landingPage/LandingPage'));
const Login = React.lazy(() => import('../pages/auth/Login'));
const Register = React.lazy(() => import('../pages/auth/Register'));
const AccountType = React.lazy(() => import('../pages/auth/AccountType'));
const EmployerAccountType = React.lazy(() => import('../pages/auth/EmployerAccountType'));
const EmployeeAccountType = React.lazy(() => import('../pages/auth/EmployeeAccountType'));
const RecoverByNumber = React.lazy(() => import('../pages/auth/forgotPassword/RecoverByNumber'));
const RecoverByEmail = React.lazy(() => import('../pages/auth/forgotPassword/RecoverByEmail'));
const ForgotPassword = React.lazy(() => import('../pages/auth/forgotPassword/ForgotPassword'));
const NewPassword = React.lazy(() => import('../pages/auth/forgotPassword/NewPassword'));

const AppRouter = () => {
  const dispatch = useDispatch();
  let location = useLocation()

  useEffect(() => {
    dispatch(clearMessage());
  }, [location, dispatch])
  return (
    <React.Suspense fallback={<AppLoading />}>
      {/* <AppContentContext.Consumer> */}
        <Switch>
          <AnonymousRoute exact path="/" component={LandingPage} />
          <AnonymousRoute path="/login" exact component={Login} />
          <AnonymousRoute path="/register" exact component={Register} /> 
          <AnonymousRoute path="/accounttype" exact component={AccountType} /> 
          <AnonymousRoute path="/employeraccounttype" exact component={EmployerAccountType} /> 
          <AnonymousRoute path="/employeeaccounttype" exact component={EmployeeAccountType} /> 
          <AnonymousRoute path="/forgotpassword" exact component={ForgotPassword} />   
          <AnonymousRoute path="/recoverbynumber" exact component={RecoverByNumber} />  
          <AnonymousRoute path="/recoverbyemail" exact component={RecoverByEmail} />  
          <AnonymousRoute path="/newpassword" exact component={NewPassword} />    
          <ProtectedRoute path="/dashboard" component={Dashboard} />        
          <Redirect to="/login" />
        </Switch>
      {/* </AppContentContext.Consumer> */}
    </React.Suspense>
  )
}

export default AppRouter;