import { push } from "connected-react-router";
import { showErrorMessage, showSuccessMessage, showInfoMessage } from './notification';
import agent from "../../services/agent.service";

// initial values
const authData = {
  currentUser: {
    email: "",
    password: "",
    token: "",
    accountType: "",
    accountPackage: "",
    isRegComplete: false
  }
};



// Action types
const REGISTERED = 'pharmaconnect/auth/REGISTERED';
const LOGGED_IN = 'pharmaconnect/auth/LOGGED_IN';
const LOGGED_OUT = 'pharmaconnect/auth/LOGGED_OUT';

// Reducer
export default function reducer(state = authData, action = {}) {
  switch (action.type) {
    case REGISTERED:
      return {
        ...state,
        error: null,
        fetching: false,
      };
    case LOGGED_IN:
      return {
        ...state,
        error: null,
        fetching: false,
        currentUser: action.payload
      };
    case LOGGED_OUT:
      return {
        ...state,
        fetching: false,
        currentUser: null
      };
    default: return state;
  }
}

// Action Creators
export function userRegistered() {
  return { type: REGISTERED };
}

export function userLoggedIn(user) {
  return { type: LOGGED_IN, payload: user };
}


export function userLoggedOut() {
  return {
    type: LOGGED_OUT
  }
}


//Actions
export function registerUser(user) {
  return dispatch => {
    return agent.Auth.register(user).then(
      response => {
        //handle success
        dispatch(showSuccessMessage(("registration successful. login to continue")));
        dispatch(push("/login"));
      },
      error => {
        //handle error
        dispatch(showErrorMessage(error));
      }
    );
  }
}

export function loginUser({ email, password }) {
  return dispatch => {
    return agent.Auth.login(email, password).then(
      response => {
        //handle success
        dispatch(showSuccessMessage("login successful"));
        if (response.isRegComplete === false && response.accountType === 'individual') {
          onLogin(dispatch, response);
          dispatch(showInfoMessage("Kindly complete your registration to start connecting with great minds"));
          dispatch(push('/individualregistration'));
        }
        else if (response.isRegComplete === false && response.accountType === 'corporate') {
          onLogin(dispatch, response);
          dispatch(showInfoMessage("Kindly complete your registration to start connecting with great minds"));
          dispatch(push('/corporateregistration'));
        }
        else if (response.isRegComplete) {
          onLogin(dispatch, response);
          dispatch(push("/dashboard"));
        }

      },
      error => {
        //handle error
        dispatch(showErrorMessage(error));
      }
    );
  }
}


function onLogin(dispatch, user) {
  agent.Auth.saveAuthData(user)
  dispatch(userLoggedIn(user))
}

export function OnLogout() {
  return dispatch => {
    agent.Auth.logout()
    dispatch(userLoggedOut())
    dispatch(push('/login'))
  }
}