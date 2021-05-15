import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import auth from './auth';
import notification from "./notification";
import account from './account';
import experience from './experience'
import location from './location';
import common from './common';
import error from './error';
import modal from './modal';
import userSkill from './userSkill';
import education from './education';

const appReducer = (history) => combineReducers({
  router: connectRouter(history),
  common,
  error,
  auth,
  account,
  notification,
  location,
  education,
  experience,
  modal,
  userSkill,
});

export default appReducer;