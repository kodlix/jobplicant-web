import { showMessage } from "./notification";
import agent from "../../services/agent.service";
import { MESSAGE_TYPE } from "../constant";
import { CONTACT_STATUS } from './../../constants/contactStatus';

// initial values
const contact = {
  loadingContact: "",
  pendingRequests: { data: {}, meta: {}, ids: [] },
  freeUsers: { data: {}, meta: {}, ids: [] },
  contacts: { data: {}, meta: {}, ids: [] },
  error: null,
  selectedId: null
};

//Action types
const LOAD_FREE_USERS = "LOAD_FREE_USERS";
const LOAD_CONTACTS = "LOAD_CONTACTS";
const LOAD_PENDING_REQUESTS = "LOAD_PENDING_REQUESTS";
const LOADING_CONTACT = "LOADING";
const ERROR = "ERROR";
const CONTACT_ADDED = "CONTACT_ADDED";
const CONTACT_DELETED = "CONTACT_DELETED";
const CONTACT_BLOCKED = "CONTACT_BLOCKED";
const CONTACT_UNBLOCKED = "CONTACT_UNBLOCKED";
const REMOVE_PENDING = "REMOVE_PENDING";
const REQUEST_SENT = "REQUEST_SENT";
const REQUEST_CANCELLED = "REQUEST_CANCELLED";
const SELECT_ID = "SELECT_ID";

//Reducer
export default function reducer(state = contact, action = {}) {
  switch (action.type) {
    case LOADING_CONTACT:
      return {
        ...state,
        loadingContact: action.payload,
      };
    case SELECT_ID:
      return {
        ...state,
        selectedId: action.id,
      };
    case LOAD_FREE_USERS:
      const data = action.payload.data || [];
      const meta = action.payload.meta || {};
      const uniqueFreeIds = [];
      if (state?.loadingContact === "loadMore") {
        const idArray = Array.from(new Set([
          ...state.freeUsers.ids,
          ...data.map(({ id }) => id),
        ]));
        uniqueFreeIds.push(...idArray)
      }
      else {
        const idArray = Array.from(new Set([
          ...data.map(({ id }) => id),
        ]));
        uniqueFreeIds.push(...idArray)
      }
      const normalizedFreeUsers = data.reduce((acc, freeUser) => {
        acc[freeUser.id] = freeUser;
        return acc;
      }, {});
      return {
        ...state,
        freeUsers: {
          ids: uniqueFreeIds,
          data: {
            ...state.freeUsers.data,
            ...normalizedFreeUsers
          },
          meta
        },
        loadingContact: null
      };
    case LOAD_CONTACTS:
      const contactArray = action.payload.data || [];
      const uniqueContactIds = [];
      if (state?.loadingContact === "loadMoreContacts") {
        const idArray = Array.from(new Set([
          ...state.contacts.ids,
          ...contactArray.map(({ id }) => id),
        ]));
        uniqueContactIds.push(...idArray)
      }
      else {
        const idArray = Array.from(new Set([
          ...contactArray.map(({ id }) => id),
        ]));
        uniqueContactIds.push(...idArray)
      }
      const normalizedContacts = contactArray.reduce((acc, contact) => {
        acc[contact.id] = contact;
        return acc;
      }, {});
      return {
        ...state,
        contacts: {
          ids: uniqueContactIds,
          data: {
            ...state.contacts.data,
            ...normalizedContacts
          },
          meta: {...action.payload.meta}
        },
        loadingContact: null
      };
    case CONTACT_ADDED:
      return {
        ...state,
        contacts: {
          ...state.contacts,
          ids: [action.payload.id, ...state.contacts.ids],
          data: {
            [action.payload.id]: {
              contactRequestStatus: 'accepted',
              blockedBy: null,
              isBlocked: false,
              ...action.payload
            },
            ...state.contacts.data
          }
        }
      };
    case REQUEST_SENT:
      const sentRequestId = action.id;
      return {
        ...state,
        loadingContact: null,
        selectedId: null,
        freeUsers: {
          ...state.freeUsers,
          data: {
            ...state.freeUsers.data,
            [sentRequestId]: {
              ...state.freeUsers.data[sentRequestId],
              contactRequestStatus: CONTACT_STATUS.PENDING
            }
          }
        }
      };
    case REQUEST_CANCELLED:
      const cancelledRequestId = action.id;
      return {
        ...state,
        selectedId: null,
        freeUsers: {
          ...state.freeUsers,
          data: {
            ...state.freeUsers.data,
            [cancelledRequestId]: {
              ...state.freeUsers.data[cancelledRequestId],
              contactRequestStatus: null
            }
          }
        }
      };
    case CONTACT_DELETED:
      const deletedId = action.id;
      const updatedIdArray = [...state.contacts.ids]
      updatedIdArray.splice(state.contacts.ids.indexOf(deletedId), 1)
      return {
        ...state,
        contacts: {
          ...state.contacts,
          ids: updatedIdArray
        }
      };
    case CONTACT_BLOCKED:
      const blockedContactId = action.id;
      return {
        ...state,
        contacts: {
          ...state.contacts,
          data: {
            ...state.contacts.data,
            [blockedContactId]: {
              ...state.contacts.data[blockedContactId],
              isBlocked: true,
              blockedBy: agent.Auth.current().id
            }
          }
        }
      };
    case CONTACT_UNBLOCKED:
      const unblockedContactId = action.id;
      return {
        ...state,
        contacts: {
          ...state.contacts,
          data: {
            ...state.contacts.data,
            [unblockedContactId]: {
              ...state.contacts.data[unblockedContactId],
              isBlocked: false,
              blockedBy: null
            }
          }
        }
      };
    case LOAD_PENDING_REQUESTS:
      const pendingArray = action.payload
      const uniquePendingIds = [];
      if (state?.loadingContact === "loadMorePending") {
        const idArray = Array.from(new Set([
          ...state.pendingRequests.ids,
          ...pendingArray.map(({ id }) => id),
        ]));
        uniquePendingIds.push(...idArray)
      }
      else {
        const idArray = Array.from(new Set([
          ...pendingArray.map(({ id }) => id),
        ]));
        uniquePendingIds.push(...idArray)
      }
      const normalizedPending = pendingArray.reduce((acc, pendingRequest) => {
        acc[pendingRequest.id] = pendingRequest;
        return acc;
      }, {});
      return {
        ...state,
        pendingRequests: {
          ids: uniquePendingIds,
          data: {
            ...state.contacts.data,
            ...normalizedPending
          },
          meta: {}
        }
      };
    case REMOVE_PENDING:
      const pendingId = action.id;
      const updatedPendingArray = [...state.pendingRequests.ids]
      updatedPendingArray.splice(state.pendingRequests.ids.indexOf(pendingId), 1)
      return {
        ...state,
        pendingRequests: {
          ...state.pendingRequests,
          ids: updatedPendingArray
        }
      };
    case ERROR:
      return {
        ...state,
        error: action.payload,
        loadingContact: null
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
export const selectId = (data) => ({
  type: SELECT_ID,
  id: data
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
export const contactDeleted = (id) => ({
  type: CONTACT_DELETED,
  id: id,
});
export const contactBlocked = (id) => ({
  type: CONTACT_BLOCKED,
  id: id,
});
export const contactUnblocked = (id) => ({
  type: CONTACT_UNBLOCKED,
  id: id,
});
export const addContact = (data) => ({
  type: CONTACT_ADDED,
  payload: data
});
export const removeFromPending = (id) => ({
  type: REMOVE_PENDING,
  id: id
});
export const requestSent = (data) => ({
  type: REQUEST_SENT,
  id: data.contactId
});
export const requestCanceled = (id) => ({
  type: REQUEST_CANCELLED,
  id: id
});

//Actions
export function loadFreeUsers(page, limit, loadingType, search) {
  return dispatch => {
    dispatch(loadingContact(loadingType));
    return agent.Contact.load(page, limit, search).then(
      response => {
        //handle success
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
        dispatch(loadingContact(null));
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
        dispatch(
          showMessage({
            type: MESSAGE_TYPE.SUCCESS,
            title: "Load Contacts",
            message: "Contacts Loaded"
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
    dispatch(selectId(id.contactId));
    dispatch(loadingContact(CONTACT_STATUS.SEND_REQUEST));
    dispatch(isError(null));
    return agent.Contact.add(id).then(
      response => {
        //handle success
        dispatch(
          showMessage({
            type: MESSAGE_TYPE.SUCCESS,
            title: "Send Connection Request",
            message: "Request sent",
          }),
        );
        dispatch(requestSent(id));
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

export function cancelContactRequest(id) {
  return dispatch => {
    dispatch(selectId(id));
    dispatch(loadingContact(CONTACT_STATUS.CANCEL_REQUEST));
    dispatch(isError(null));
    return agent.Contact.cancel(id).then(
      response => {
        //handle success
        dispatch(
          showMessage({
            type: MESSAGE_TYPE.SUCCESS,
            title: "Connection request",
            message: "Connection request has been cancelled",
          }),
        );
        dispatch(requestCanceled(id));
        dispatch(loadingContact(""));
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
        dispatch(contactDeleted(id));
      },
      (error) => {
        // handle error
        dispatch(showMessage({ type: "error", message: error }));
        dispatch(isError("requestFail"));
      }
    );
  }
}

export function blockContact(id) {
  return dispatch => {
    return agent.Contact.block(id).then(
      response => {
        //handle success
        dispatch(
          showMessage({
            type: MESSAGE_TYPE.SUCCESS,
            title: "Block this contact",
            message: "Contact blocked successfully",
          })
        );
        dispatch(contactBlocked(id));
      },
      (error) => {
        // handle error
        dispatch(showMessage({ type: "error", message: error }));
        dispatch(isError("blockFail"));
      }
    );
  }
}

export function unblockContact(id) {
  return dispatch => {
    return agent.Contact.unblock(id).then(
      response => {
        //handle success
        dispatch(
          showMessage({
            type: MESSAGE_TYPE.SUCCESS,
            title: "Unblock this contact",
            message: "Contact unblocked successfully",
          })
        );
        dispatch(contactUnblocked(id));
      },
      (error) => {
        // handle error
        dispatch(showMessage({ type: "error", message: error }));
        dispatch(isError("unblockFail"));
      }
    );
  }
}

export function acceptRequest(id, loadingType, accountDetails) {
  return dispatch => {
    dispatch(isError(null));
    dispatch(loadingContact(loadingType));
    dispatch(selectId(id.contactId));
    return agent.Contact.accept(id).then(
      response => {
        //handle success
        dispatch(
          showMessage({
            type: MESSAGE_TYPE.SUCCESS,
            title: "Connection Request",
            message: "Added to contact successfully",
          }),
        );
        dispatch(addContact(accountDetails))
        dispatch(removeFromPending(id))
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
    dispatch(selectId(id));
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
          }),
        );
        dispatch(removeFromPending(id))
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