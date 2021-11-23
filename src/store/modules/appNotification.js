import { push } from "connected-react-router";
import agent from "../../services/agent.service"
import { processed, processing, showErrorMessage, showSuccessMessage } from './notification';

// initial values
const defaultState = {
    seenAndUnseenNoti: [],
    notification: {},
    allNotifications: [],
    navBarNotifications: [],
    loading: false,
    meta: {}
};


// Action types
const LOAD_SEEN_AND_UNSEEN_NOTI = 'app/appNotification/LOAD_SEEN_AND_UNSEEN_NOTI';
const LOAD_ALL_NOTIFICATIONS = 'app/appNotification/LOAD_ALL_NOTIFICATIONS';
const LOAD_NOTIFICATION = 'app/appNotification/LOAD_NOTIFICATION';
const LOAD_USER_NAVBAR_NOTIFICATIONS = 'app/appNotification/LOAD_USER_NAVBAR_NOTIFICATIONS';
const LOADING = 'app/appNotification/LOADING';




// Reducer
export default function reducer(state = defaultState, action = {}) {
    switch (action.type) {
        case LOAD_SEEN_AND_UNSEEN_NOTI:
            return {
                ...state,
                seenAndUnseenNoti: [...state.seenAndUnseenNoti, ...action.payload.data],
                meta: action.payload.meta
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
        case LOADING:
            return {
                ...state,
                loading: action.payload,
                error: null
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

export function seenAndUnseenNoti(data) {

    return {
        type: LOAD_SEEN_AND_UNSEEN_NOTI,
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

export function isRequestLoading(data) {
    return {
        type: LOADING,
        payload: data
    }
}



//Actions


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

export function allNotiByAccount(id, search, page, limit) {
    return dispatch => {
        dispatch(isRequestLoading(true));
        return agent.Notification.loadAllSeenAndUnseenByAccount(id, search, page, limit).then(
            response => {
                dispatch(seenAndUnseenNoti(response));
                dispatch(isRequestLoading(false));
            },
            error => {
                dispatch(isRequestLoading(false));
                dispatch(showErrorMessage(error));
            }
        );
    }
}

export function deleteNoti(id) {
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
                dispatch(seenAndUnseenNoti(response));
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
