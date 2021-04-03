import React, { useEffect, } from 'react'
import { Redirect, Switch, useLocation } from 'react-router';
import { useDispatch } from 'react-redux';
import AppAlert from '../components/shared/AppAlert';

import AppLoading from '../UI/Spinner/AppLoading'
import ProtectedRoute from './protected-route';

const AppRouterRestricted = ({ customRoute, customComponent }) => {
  const dispatch = useDispatch();
  let location = useLocation()

  useEffect(() => {
    // dispatch(clearErrorMessage());
  }, [location, dispatch])
  return (
    <React.Suspense fallback={<AppLoading />}>
      <AppAlert />
      <Switch>
        <ProtectedRoute path={customRoute} exact component={customComponent} />
      </Switch>
    </React.Suspense>
  )
}

export default AppRouterRestricted;