import { push } from "connected-react-router";
import { showErrorMessage, showSuccessMessage, showInfoMessage } from './notification';
import agent from "../../services/agent.service";

// initial values
const authData = {
  currentUser: {
    // email: "",
    // password: "",
    // token: "",
    // accountType: "",
    // accountPackage: "",
    // isRegComplete: false
  }
};



// Action types
const REGISTERED = 'jobplicant/auth/REGISTERED';
const LOGGED_IN = 'jobplicant/auth/LOGGED_IN';
const LOGGED_OUT = 'jobplicant/auth/LOGGED_OUT';
const FORGOT_PASSWORD = 'jobplicant/auth/FORGOT_PASSWORD';
const UPDATE_PASSWORD = 'jobplicant/auth/UPDATE_PASSWORD';

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
    case FORGOT_PASSWORD:
      return {
        ...state,
        fetching: false,
        currentUser: null
      };
    case UPDATE_PASSWORD:
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
export function userForgotPassword() {
  return { type: FORGOT_PASSWORD }
}

export function userUpdatePassword() {
  return { type: UPDATE_PASSWORD }
}


//Actions
export function registerUser(user) {
  return dispatch => {
    return agent.Auth.register(user).then(
      response => {
        //handle success
        dispatch(showSuccessMessage(("Signup successful, login to continue")));
        dispatch(push('/emailconfirmation'));
      },
      error => {
        //handle error
        dispatch(showErrorMessage(error));
      }
    );
  }
}

export function loginUser({ email, password, type }) {
  return dispatch => {
    return agent.Auth.login(email, password, type).then(
      response => {
        //handle success
        dispatch(showSuccessMessage("login successful"));
        onLogin(dispatch, response);
        dispatch(push("/userprofile"));
      },
      error => {
        //handle error
        dispatch(showErrorMessage(error));
      }
    );
  }
}

export function forgotPasswordUser({ email }) {
  return dispatch => {
    return agent.Auth.forgotPassword(email).then(
      response => {
        //handle success
        dispatch(showSuccessMessage("A link to reset your password has been sent to your email"));
        dispatch(push(""));
      },
      error => {
        //handle error
        dispatch(showErrorMessage(error));
      }
    );
  }
}

export function updateUserPassword(data) {
  return dispatch => {
    return agent.Auth.updatePassword(data).then(
      response => {
        console.log({ response });
        //handle success
        dispatch(showSuccessMessage("Password successfully updated"));
        dispatch(push("/login"));
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