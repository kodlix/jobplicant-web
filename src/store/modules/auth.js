import { showMessage } from "./notification";
import { push } from "connected-react-router";
import agent from "../../services/agent.service";
import { MESSAGE_TYPE } from "store/constant";
import { ACCOUNT_TYPE } from "constants/accountType";

// initial values
const authData = {
  loading: false,
  currentUser: {},
  loading: false,
};

// Action types
const REGISTERED = "app/auth/REGISTERED";
const LOGGED_IN = "app/auth/LOGGED_IN";
const LOGGED_OUT = "app/auth/LOGGED_OUT";
const FORGOT_PASSWORD = "app/auth/FORGOT_PASSWORD";
const UPDATE_PASSWORD = "app/auth/UPDATE_PASSWORD";
const LOADING = "app/auth/LOADING";

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
        currentUser: action.payload,
      };
    case LOGGED_OUT:
      return {
        ...state,
        fetching: false,
        currentUser: null,
      };
    case FORGOT_PASSWORD:
      return {
        ...state,
        fetching: false,
        currentUser: null,
      };
    case UPDATE_PASSWORD:
      return {
        ...state,
        fetching: false,
        currentUser: null,
      };
    case LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
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
  return { type: LOGGED_OUT };
}
export function userForgotPassword() {
  return { type: FORGOT_PASSWORD };
}

export function userUpdatePassword() {
  return { type: UPDATE_PASSWORD };
}

export function isRequestLoading(payload) {
  return {
    type: LOADING,
    payload,
  };
}

// Actions
export function registerUser(user) {
  return (dispatch) => {
    return agent.Auth.register(user).then(
      (response) => {
        // handle success
        dispatch(
          showMessage({
            type: MESSAGE_TYPE.SUCCESS,
            message: "Signup successful, login to continue",
            title: "Signup Successful",
          })
        );
        dispatch(push(`/security-verification?email=${response.email}`));
      },
      (error) => {
        // handle error
        dispatch(
          showMessage({
            type: "error",
            message: error,
            title: "User Registration Failed",
          })
        );
      }
    );
  };
}

export function verifyAccount(code) {
  return (dispatch) => {
    return agent.Auth.verifyAccount(code).then(
      (response) => {
        // handle success
        dispatch(
          showMessage({
            type: MESSAGE_TYPE.SUCCESS,
            message: "account verification successful, login to continue",
          })
        );
        dispatch(push(`/login`));
      },
      (error) => {
        // handle error
        dispatch(showMessage({ type: "error", message: error }));
      }
    );
  };
}

export function loginUser({ email, password, type, app }) {
  return (dispatch) => {
    dispatch(isRequestLoading(true));
    return agent.Auth.login(email, password, type, app).then(
      (response) => {
        // handle success
        dispatch(
          showMessage({
            type: MESSAGE_TYPE.SUCCESS,
            message: "welcome, login successful",
            title: "Login Success",
          })
        );

        if (response.role === ("Super-admin" || "developer")) {
          onLogin(dispatch, response);
          console.log({ response });
          dispatch(push("/admin"));
          return;
        }

        if (response.accountType === ACCOUNT_TYPE.CORPORATE) {
          onLogin(dispatch, response);
          console.log({ response });
          dispatch(push("/company"));
        } else if (response.accountType === ACCOUNT_TYPE.INSTANT_HIRE) {
          onLogin(dispatch, response);
          dispatch(push("/create-instant-hire"));
        } else {
          onLogin(dispatch, response);
          dispatch(push("/profile"));
        }
        dispatch(isRequestLoading(false));
      },
      (error) => {
        // handle error
        dispatch(showMessage({ type: "error", message: error }));
        dispatch(isRequestLoading(false));
      }
    );
  };
}

export function forgotPassword(email) {
  return (dispatch) => {
    dispatch(isRequestLoading(true));
    return agent.Auth.forgotPassword(email).then(
      (response) => {
        // handle success
        console.log("res", response);
        dispatch(isRequestLoading(false));
        dispatch(push("/recoverbyemail"));
      },
      (error) => {
        // handle error
        dispatch(isRequestLoading(false));
        dispatch(showMessage({ type: "error", message: error }));
      }
    );
  };
}

export function updateUserPassword(shortCode, email, data) {
  return (dispatch) => {
    dispatch(isRequestLoading(true));
    return agent.Auth.updatePassword(shortCode, email, data).then(
      (response) => {
        dispatch(isRequestLoading(false));
        // handle success
        dispatch(
          showMessage({
            type: MESSAGE_TYPE.SUCCESS,
            message: "Password successfully updated",
          })
        );
        dispatch(push("/login"));
      },
      (error) => {
        // handle error
        dispatch(isRequestLoading(false));
        dispatch(showMessage({ type: "error", message: error }));
      }
    );
  };
}

function onLogin(dispatch, user) {
  agent.Auth.saveAuthData(user);
  dispatch(userLoggedIn(user));
}

export function OnLogout() {
  return (dispatch) => {
    agent.Auth.logout();
    dispatch(userLoggedOut());
    dispatch(push("/login"));
  };
}
