import React, { useEffect, } from 'react'
import { Switch, Redirect, useLocation } from 'react-router';
import { useDispatch } from 'react-redux';
import { clearMessage } from "../store/modules/notification";
import AppLoading from '../components/AppLoading';
import AnonymousRoute from './anonymous-route';
import ProtectedRoute from './protected-route';
import CompanyProfile from 'pages/company/CompanyProfile';
import CreateJob from 'pages/job/CreateJob';

const Dashboard = React.lazy(() => import('../pages/dashboard/Dashboard'));
const UserProfile = React.lazy(() => import('pages/profile/UserProfile'));
// const CompanyProfile = React.lazy(() => import('../pages/profile/companyProfile/CompanyProfile'));
const LandingPage = React.lazy(() => import('../pages/landingPage/LandingPage'));
const Login = React.lazy(() => import('../pages/auth/Login'));
const Register = React.lazy(() => import('../pages/auth/Register'));
const ConfirmationPage = React.lazy(() => import('../pages/auth/ConfirmationPage'));
const EmailConfirmation = React.lazy(() => import('../pages/auth/EmailConfirmation'));


const AccountType = React.lazy(() => import('../pages/auth/AccountTypeStep'));
const SecurityVerification = React.lazy(() => import('../pages/auth/SecurityVerification'));
const EmployerAccountType = React.lazy(() => import('../pages/auth/EmployerAccountType'));
const EmployeeAccountType = React.lazy(() => import('../pages/auth/EmployeeAccountType'));
const RecoverByNumber = React.lazy(() => import('../pages/auth/forgotPassword/RecoverByNumber'));
const RecoverByEmail = React.lazy(() => import('../pages/auth/forgotPassword/RecoverByEmail'));
const ForgotPassword = React.lazy(() => import('../pages/auth/forgotPassword/ForgotPassword'));
const NewPassword = React.lazy(() => import('../pages/auth/forgotPassword/NewPassword'));
const PageNotFound = React.lazy(() => import('../pages/error-page/PageNotFound'));
const InternalServerError = React.lazy(() => import('../pages/error-page/InternalServerError'));
const BadRequest = React.lazy(() => import('../pages/error-page/BadRequest'));
const CreateInstantJobHire = React.lazy(() => import('../pages/instant-job-hire/Create'));
const ListInstantJobHire = React.lazy(() => import('../pages/instant-job-hire/List'));
const ViewInstantJobHire = React.lazy(() => import('../pages/instant-job-hire/View'));
const EditInstantJobHire = React.lazy(() => import('../pages/instant-job-hire/Edit'));
const Applicant = React.lazy(() => import('../pages/instant-job-hire/Applicant'));



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
        <AnonymousRoute path="/security-verification" exact component={SecurityVerification} />
        <AnonymousRoute path="/confirmationpage" exact component={ConfirmationPage} />
        <AnonymousRoute path="/emailconfirmation" exact component={EmailConfirmation} />
        <AnonymousRoute path="/accounttype" exact component={AccountType} />
        <AnonymousRoute path="/employeraccounttype" exact component={EmployerAccountType} />
        <AnonymousRoute path="/employeeaccounttype" exact component={EmployeeAccountType} />
        <AnonymousRoute path="/forgotpassword" exact component={ForgotPassword} />
        <AnonymousRoute path="/recoverbynumber" exact component={RecoverByNumber} />
        <AnonymousRoute path="/recoverbyemail" exact component={RecoverByEmail} />
        <AnonymousRoute path="/reset" exact component={NewPassword} />

        <ProtectedRoute path="/pagenotfound" exact component={PageNotFound} />
        <ProtectedRoute path="/internalservererror" component={InternalServerError} />
        <ProtectedRoute path="/badrequest" component={BadRequest} />
        <ProtectedRoute path="/profile" component={UserProfile} />
        <ProtectedRoute path="/company" component={CompanyProfile} />
        <ProtectedRoute path="/jobs/create" component={CreateJob} />
        
        {/* <ProtectedRoute path="/companyprofile" component={CompanyProfile} /> */}
        <ProtectedRoute path="/dashboard" component={Dashboard} />
        <ProtectedRoute path="/new-instant-hire" component={CreateInstantJobHire} />
        <ProtectedRoute path="/instant-hires" component={ListInstantJobHire} />
        <ProtectedRoute path="/instant-hire/view/:id" component={ViewInstantJobHire} />
        <ProtectedRoute path="/instant-hire/edit/:id" component={EditInstantJobHire} />
        <ProtectedRoute path="/applicant" component={Applicant} />

        <Redirect to="/login" />
      </Switch>
    </React.Suspense>
  )
}

export default AppRouter;