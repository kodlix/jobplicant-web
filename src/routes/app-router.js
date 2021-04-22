import React, { useEffect, } from 'react'
import { Switch, Redirect, useLocation } from 'react-router';
import { useDispatch } from 'react-redux';
import { clearMessage } from "../store/modules/notification";
import AppLoading from '../components/AppLoading';
import AnonymousRoute from './anonymous-route';
import ProtectedRoute from './protected-route';
import AppContentContext from '../contexts/AppContentContext'
const Dashboard = React.lazy(() => import('../pages/dashboard/Dashboard'));
const UserProfile = React.lazy(() => import('../pages/profile/UserProfile'));
const CompanyProfile = React.lazy(() => import('../pages/profile/CompanyProfile'));
const LandingPage = React.lazy(() => import('../pages/landingPage/LandingPage'));
const Login = React.lazy(() => import('../pages/auth/Login'));
const Register = React.lazy(() => import('../pages/auth/Register'));
const ConfirmationPage = React.lazy(() => import('../pages/auth/ConfirmationPage'));
const EmailConfirmation = React.lazy(() => import('../pages/auth/EmailConfirmation'));


const AccountType = React.lazy(() => import('../pages/auth/AccountType'));
const EmployerAccountType = React.lazy(() => import('../pages/auth/EmployerAccountType'));
const EmployeeAccountType = React.lazy(() => import('../pages/auth/EmployeeAccountType'));
const RecoverByNumber = React.lazy(() => import('../pages/auth/forgotPassword/RecoverByNumber'));
const RecoverByEmail = React.lazy(() => import('../pages/auth/forgotPassword/RecoverByEmail'));
const ForgotPassword = React.lazy(() => import('../pages/auth/forgotPassword/ForgotPassword'));
const NewPassword = React.lazy(() => import('../pages/auth/forgotPassword/NewPassword'));
const PageNotFound = React.lazy(() => import('../pages/errorPage/PageNotFound'));
const InternalServerError = React.lazy(() => import('../pages/errorPage/InternalServerError'));
const BadRequest = React.lazy(() => import('../pages/errorPage/BadRequest'));


const AppRouter = () => {
  const dispatch = useDispatch();
  let location = useLocation()

  useEffect(() => {
    dispatch(clearMessage());
  }, [location, dispatch])
  return (
    <React.Suspense fallback={<AppLoading />}>
      <Switch>
        <AnonymousRoute exact path="/" component={LandingPage} />
        <AnonymousRoute path="/login" exact component={Login} />
        <AnonymousRoute path="/register" exact component={Register} />
        <AnonymousRoute path="/confirmationpage" exact component={ConfirmationPage} />
        <AnonymousRoute path="/emailconfirmation" exact component={EmailConfirmation} />
        <AnonymousRoute path="/accounttype" exact component={AccountType} />
        <AnonymousRoute path="/employeraccounttype" exact component={EmployerAccountType} />
        <AnonymousRoute path="/employeeaccounttype" exact component={EmployeeAccountType} />
        <AnonymousRoute path="/forgotpassword" exact component={ForgotPassword} />
        <AnonymousRoute path="/recoverbynumber" exact component={RecoverByNumber} />
        <AnonymousRoute path="/recoverbyemail" exact component={RecoverByEmail} />
        <AnonymousRoute path="/newpassword" exact component={NewPassword} />
        <ProtectedRoute path="/pagenotfound" exact component={PageNotFound} />
        <ProtectedRoute path="/internalservererror" component={InternalServerError} />
        <ProtectedRoute path="/badrequest" component={BadRequest} />
        <ProtectedRoute path="/userprofile" component={UserProfile} />
        <ProtectedRoute path="/companyprofile" component={CompanyProfile} />
        <ProtectedRoute path="/dashboard" component={Dashboard} />
        <Redirect to="/login" />
      </Switch>
    </React.Suspense>
  )
}

export default AppRouter;