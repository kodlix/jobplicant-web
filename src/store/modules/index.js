import { combineReducers } from 'redux';
import auth from './auth';
import notification from "./notification";
import account from './account';
import location from './location';
import common from './common';
import error from './error';
import modal from './modal';
import userSkill from './userSkill';


import { connectRouter } from 'connected-react-router';
import Skills from 'pages/profile/Skills';

const appReducer = (history) => combineReducers({
  router: connectRouter(history),
  common,
  error,
  auth,
  account,
  notification,
  location,
  modal,
  userSkill,
});

export default appReducer;