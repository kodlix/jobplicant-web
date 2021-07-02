import { showMessage } from "./notification";
import agent from "../../services/agent.service";
import { MESSAGE_TYPE } from "../constant";

// initial values
const contact = {
  loading: "",
  freeUsers: []
};

//Action types
const LOAD_FREE_USERS = "LOAD_FREE_USERS";
const LOADING = "LOADING";

//Reducer
export default function reducer(state = contact, action = {}) {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case LOAD_FREE_USERS:
      return {
        ...state,
        freeUsers: action.payload
      };
    default:
      return state;
  }
}



//Action Creators
export const freeUsersLoaded = (data) => ({
  type: LOAD_FREE_USERS,
  payload: data,
});
export const loading = (data) => ({
  type: LOADING,
  payload: data
});

//Actions
export function loadFreeUsers(page, take, loadingType, search) {
  return dispatch => {
    dispatch(loading(loadingType));
    return agent.Contact.load(page, take, search).then(
      response => {
        //handle success
        dispatch(loading(""));
        dispatch(
          showMessage({
            type: MESSAGE_TYPE.SUCCESS,
            title: "Load Users",
            message: "Users Loaded",
          })
        );
        dispatch(freeUsersLoaded(response));
      },
      (error) => {
        // handle error
        dispatch(showMessage({ type: "error", message: error }));
      }
    );
  }
}

export function sendContactRequest(page, take) {
  return dispatch => {
    dispatch(loading("sendContactRequest"));
    return agent.Contact.load(page, take).then(
      response => {
        //handle success
        dispatch(loading(""));
        dispatch(
          showMessage({
            type: MESSAGE_TYPE.SUCCESS,
            title: "Load Users",
            message: "Users Loaded",
          })
        );
        dispatch(freeUsersLoaded(response));
      },
      (error) => {
        // handle error
        dispatch(showMessage({ type: "error", message: error }));
      }
    );
  }
}