import { combineReducers } from 'redux';
import auth from './auth';
import notification from "./notification";
import account from './account';
import experience from './experience'
import location from './location';
import common from './common';
import error from './error';
import modal from './modal'


import { connectRouter } from 'connected-react-router';

const appReducer = (history) => combineReducers({
  router: connectRouter(history),
  common,
  error,
  auth,
  account,
  notification,
  location,
  experience,
  modal  
});

export default appReducer;