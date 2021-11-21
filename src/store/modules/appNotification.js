import { push } from "connected-react-router";
import agent from "../../services/agent.service"
import { processed, processing, showErrorMessage, showSuccessMessage } from './notification';

// initial values
const defaultState = {
    notifications: [],
    notification: {},
    allNotifications: [],
    navBarNotifications: []
};


// Action types
const LOAD_SEEN_AND_UNSEEN_NOTIFICATIONS = 'app/appNotification/LOAD_SEEN_AND_UNSEEN_NOTIFICATIONS';
const LOAD_ALL_NOTIFICATIONS = 'app/appNotification/LOAD_ALL_NOTIFICATIONS';
const LOAD_NOTIFICATION = 'app/appNotification/LOAD_NOTIFICATION';
const LOAD_USER_NAVBAR_NOTIFICATIONS = 'app/appNotification/LOAD_USER_NAVBAR_NOTIFICATIONS';




// Reducer
export default function reducer(state = defaultState, action = {}) {
    switch (action.type) {
        case LOAD_SEEN_AND_UNSEEN_NOTIFICATIONS:
            return {
                ...state,
                notifications: action.payload
            };
        case LOAD_USER_NAVBAR_NOTIFICATIONS:
            return {
                ...state,
                navBarNotifications: action.payload
            };
        case LOAD_NOTIFICATION:
            return {
                ...state,
                notification: action.payload
            };
        case LOAD_ALL_NOTIFICATIONS:
            return {
                ...state,
                allNotifications: action.payload
            };
        default: return state
    }
};

//Action Creators
export function loadNotification(data) {
    return {
        type: LOAD_NOTIFICATION,
        payload: data
    };
}

export function loadNotifications(data) {
    return {
        type: LOAD_SEEN_AND_UNSEEN_NOTIFICATIONS,
        payload: data
    };
}

export function loadUserNavbarNotifications(data) {
    return {
        type: LOAD_USER_NAVBAR_NOTIFICATIONS,
        payload: data
    };
}

export function loadAllNotifications(data) {
    return {
        type: LOAD_ALL_NOTIFICATIONS,
        payload: data
    };
}

export function NotificationUpdated(data) {
    return {
        type: LOAD_USER_NAVBAR_NOTIFICATIONS,
        payload: data
    };
}



//Actions
export function allNotifications() {
    return dispatch => {
        return agent.Notification.loadAll().then(
            response => {
                dispatch(loadAllNotifications(response));
            },
            error => {
                dispatch(showErrorMessage(error));
            }
        );
    }
}

export function ViewNotification(id) {
    return dispatch => {
        return agent.Notification?.loadById(id).then(
            response => {
                dispatch(loadNotification(response));
            },
            error => {
                dispatch(showErrorMessage(error));
            }
        );
    }
}



export function UserNotifications(id) {
    return dispatch => {
        return agent.Notification.loadByAccount(id).then(
            response => {
                dispatch(loadUserNavbarNotifications(response));
            },
            error => {
                dispatch(showErrorMessage(error));
            }
        );
    }
}

export function updateNotification(id) {
    return dispatch => {
        return agent.Notification.updateNoti(id).then(
            response => {
                dispatch(NotificationUpdated(response));
            },
            error => {
                dispatch(showErrorMessage(error));
            }
        );
    }
}

export function allNotificationsByAccount(id, search, page) {
    return dispatch => {
        dispatch(processing());

        return agent.Notification.loadAllSeenAndUnseenByAccount(id, search, page).then(
            response => {
                dispatch(processed());
                dispatch(loadNotifications(response));
            },
            error => {
                dispatch(processed());
                dispatch(showErrorMessage(error));
            }
        );
    }
}

export function deleteNotification(id) {
    return dispatch => {
        return agent.Notification.delete(id).then(
            response => {
                //handle success
                dispatch(showSuccessMessage(("Notification deleted successfully")));
                // if (from === 'admin') {
                //     dispatch(push("/admin/notifications"));
                // } else {
                //     dispatch(push("/notifications"));
                // }
                dispatch(push("/notifications"));
            },
            error => {
                //handle error
                dispatch(showErrorMessage(error));
            }
        );
    }
}


export function clearAll(from) {
    return dispatch => {
        return agent.Notification.clearAll().then(
            response => {
                //handle success
                dispatch(showSuccessMessage(("Notification cleared successfully")));
                if (from === 'admin') {
                    dispatch(push("/admin/notifications"));
                } else {
                    dispatch(push("/notifications"));
                }
            },
            error => {
                //handle error
                dispatch(showErrorMessage(error));
            }
        );
    }
}
