import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import auth from './auth';
import notification from "./notification";
import account from './account';
import company from './company';
import experience from './experience'
import location from './location';
import common from './common';
import error from './error';
import modal from './modal';
import userSkill from './userSkill';
import education from './education';
import util from './util';
import instantJob from './instantJob';
import job from './job';

const appReducer = (history) => combineReducers({
  router: connectRouter(history),
  common,
  error,
  auth,
  account,
  company,
  job,
  notification,
  location,
  education,
  experience,
  modal,
  userSkill,
  util,
  instantJob,
});

export default appReducer;