// initial values
const error = {
    offline: false
};

// Action 
const APP_OFFLINE = 'pharmaconnect/error/APP_OFFLINE';

// Reducer
export default function reducer(state = error, action = {}) {
    switch (action.type) {
        case APP_OFFLINE:
            return {
                ...state,
                offline: true
            };
        default: return state;
    }
}

//action creators
export function offlineErrorOccured(data) {
    return {
        type: APP_OFFLINE
    };
}


export function appGoesOffline() {
    return dispatch => {
        dispatch(offlineErrorOccured())
    }
}



