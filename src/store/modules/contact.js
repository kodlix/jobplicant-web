import { showMessage } from "./notification";
import agent from "../../services/agent.service";
import { MESSAGE_TYPE } from "../constant";

// initial values
const contact = {
  loadingContact: "",
  pendingRequests: [],
  freeUsers: [],
  contacts: [],
  error: null
};

//Action types
const LOAD_FREE_USERS = "LOAD_FREE_USERS";
const LOAD_CONTACTS = "LOAD_CONTACTS";
const LOAD_PENDING_REQUESTS = "LOAD_PENDING_REQUESTS";
const LOADING_CONTACT = "LOADING";
const ERROR = "ERROR";

//Reducer
export default function reducer(state = contact, action = {}) {
  switch (action.type) {
    case LOADING_CONTACT:
      return {
        ...state,
        loadingContact: action.payload,
      };
    case LOAD_FREE_USERS:
      return {
        ...state,
        freeUsers: action.payload
      };
    case LOAD_CONTACTS:
      return {
        ...state,
        contacts: action.payload
      };
    case LOAD_PENDING_REQUESTS:
      return {
        ...state,
        pendingRequests: action.payload
      };
    case ERROR:
      return {
        ...state,
        error: action.payload
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
export const loadingContact = (data) => ({
  type: LOADING_CONTACT,
  payload: data
});
export const isError = (data) => ({
  type: ERROR,
  payload: data
});
export const contactsLoaded = (data) => ({
  type: LOAD_CONTACTS,
  payload: data,
});
export const pendingRequestsLoaded = (data) => ({
  type: LOAD_PENDING_REQUESTS,
  payload: data,
});


//Actions
export function loadFreeUsers(page, take, loadingType, search) {
  return dispatch => {
    dispatch(loadingContact(loadingType));
    return agent.Contact.load(page, take, search).then(
      response => {
        //handle success
        dispatch(loadingContact(""));
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

export function loadContacts(page, take, loadingType) {
  return dispatch => {
    dispatch(loadingContact(loadingType));
    return agent.Contact.loadContacts(page, take).then(
      response => {
        //handle success
        dispatch(loadingContact(""));
        dispatch(
          showMessage({
            type: MESSAGE_TYPE.SUCCESS,
            title: "Load Contacts",
            message: "Contacts Loaded",
          })
        );
        dispatch(contactsLoaded(response));
      },
      (error) => {
        // handle error
        dispatch(showMessage({ type: "error", message: error }));
        dispatch(loadingContact(""));
      }
    );
  }
}

export function loadPendingRequests(page, take, loadingType) {
  return dispatch => {
    dispatch(loadingContact(loadingType));
    return agent.Contact.loadRequests(page, take).then(
      response => {
        //handle success
        dispatch(loadingContact(""));
        dispatch(
          showMessage({
            type: MESSAGE_TYPE.SUCCESS,
            title: "Load Pending Requests",
            message: "Pending Contact Requests Loaded",
          })
        );
        dispatch(pendingRequestsLoaded(response));
      },
      (error) => {
        // handle error
        dispatch(showMessage({ type: "error", message: error }));
        dispatch(loadingContact(""));
      }
    );
  }
}

export function sendContactRequest(id) {
  return dispatch => {
    dispatch(loadingContact("sendContactRequest"));
    dispatch(isError(null));
    return agent.Contact.add(id).then(
      response => {
        //handle success
        dispatch(loadingContact(""));
        dispatch(
          showMessage({
            type: MESSAGE_TYPE.SUCCESS,
            title: "Send Connection Request",
            message: "Request sent",
          })
        );
        dispatch(loadFreeUsers(1, 10));
      },
      (error) => {
        // handle error
        dispatch(showMessage({ type: "error", message: error }));
        dispatch(loadingContact(""));
        dispatch(isError("requestFail"));
      }
    );
  }
}

export function removeContact(id) {
  return dispatch => {
    return agent.Contact.delete(id).then(
      response => {
        //handle success
        dispatch(
          showMessage({
            type: MESSAGE_TYPE.SUCCESS,
            title: "Remove Contact",
            message: "Contact removed successfully",
          })
        );
      },
      (error) => {
        // handle error
        dispatch(showMessage({ type: "error", message: error }));
        dispatch(isError("requestFail"));
      }
    );
  }
}

export function acceptRequest(id, loadingType) {
  return dispatch => {
    dispatch(isError(null));
    dispatch(loadingContact(loadingType));
    return agent.Contact.accept(id).then(
      response => {
        //handle success
        dispatch(
          showMessage({
            type: MESSAGE_TYPE.SUCCESS,
            title: "Connection Request",
            message: "Added to contact successfully",
          })
        );
      },
      (error) => {
        // handle error
        dispatch(loadingContact(null))
        dispatch(showMessage({ type: "error", message: error }));
        dispatch(isError("acceptFail"));
      }
    );
  }
}

export function rejectRequest(id, loadingType) {
  return dispatch => {
    dispatch(isError(null));
    dispatch(loadingContact(loadingType));
    return agent.Contact.reject(id).then(
      response => {
        //handle success
        dispatch(
          showMessage({
            type: MESSAGE_TYPE.SUCCESS,
            title: "Connection Request",
            message: "Connection request rejected successfully",
          })
        );
      },
      (error) => {
        // handle error
        dispatch(loadingContact(""))
        dispatch(isError("rejectFail"));
        dispatch(showMessage({ type: "error", message: error }));
      }
    );
  }
}