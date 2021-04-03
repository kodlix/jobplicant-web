// initial values
const notification = {
    error: "",
    success: "",
    warning: "",
    info: "",
    offline: false
};



// Action types
const SUCCESS_DISPLAYED = 'pharmaconnect/notification/SUCCESS_DISPLAYED';
const WARNING_DISPLAYED = 'pharmaconnect/notification/WARNING_DISPLAYED';
const ERROR_DISPLAYED = 'pharmaconnect/notification/ERROR_DISPLAYED';
const INFO_DISPLAYED = 'pharmaconnect/notification/INFO_DISPLAYED';
const OFFLINE_ERROR_DISPLAYED = 'pharmaconnect/notification/OFFLINE_ERROR_DISPLAYED';
const MESSAGE_CLEARED = 'pharmaconnect/notification/MESSAGE_CLEARED ';

// Reducer
export default function reducer(state = notification, action = {}) {
    switch (action.type) {
        case SUCCESS_DISPLAYED:
        case WARNING_DISPLAYED:
        case ERROR_DISPLAYED:
        case INFO_DISPLAYED:
            return {
                ...state,
                [action.notificationType]: action.payload,
                fetching: false,
            };
        case OFFLINE_ERROR_DISPLAYED:
            return {
                ...state,
                offline: true,
                fetching: false,
            };

        case MESSAGE_CLEARED:
            return {
                ...state,
                error: null,
                success: null,
                warning: null,
                info: null,
                fetching: false,
                offline:false
            };
        default: return state;
    }
}

//action creators
export function errorMessageDisplayed(data) {
    return {
        type: ERROR_DISPLAYED,
        payload: data,
        notificationType: 'error'

    };
}


export function warningMessageDisplayed(data) {
    return {
        type: WARNING_DISPLAYED,
        payload: data,
        notificationType: 'warning'

    };
}


export function successMessageDisplayed(data) {
    return {
        type: SUCCESS_DISPLAYED,
        payload: data,
        notificationType: 'success'

    };
}

export function infoMessageDisplayed(data) {
    return {
        type: INFO_DISPLAYED,
        payload: data,
        notificationType: 'info'
    };
}

export function messageCleared() {
    return {
        type: MESSAGE_CLEARED
    };
}

export function offlineMessageDisplayed() {
    return {
        type: OFFLINE_ERROR_DISPLAYED
    };
}


//actions
export function showSuccessMessage(message) {
    return dispatch => {
        dispatch(successMessageDisplayed(message))
    }
}


export function showErrorMessage(message) {
    return dispatch => {
        dispatch(errorMessageDisplayed(serializeError(message)))
    }
}



export function showWarningMessage(message) {
    return dispatch => {
        dispatch(warningMessageDisplayed(message))
    }
}


export function showInfoMessage(message) {
    return dispatch => {
        dispatch(infoMessageDisplayed(message))
    }
}

export function showOfflineError() {
    return dispatch => {
        dispatch(offlineMessageDisplayed())
    }
}

export function clearMessage() {
    return dispatch => {
        dispatch(messageCleared())
    }
}


function serializeError(error) {
    if (typeof error === 'string') {
        return error
    }


    if (Array.isArray(error) && error.length > 0) {
        return error.join(", ");
    }


    if (error.response && typeof error.response === 'object' && error.response !== null) {
        const { body } = error.response;
        if (typeof body === 'object' && body !== null) {
            const { message, error: bodyError } = body;
            if (typeof message === 'string' && message !== null) {
                return message
            }

            if (Array.isArray(message) && message.length > 0) {
                return message.join(", ");
            }

            if (typeof bodyError === 'string' && bodyError !== null) {
                return bodyError
            }

            if (Array.isArray(bodyError) && bodyError.length > 0) {
                return bodyError.join(", ");
            }
        }

    }

    if (error.message && typeof error.message === 'string' && error.message !== null) {
        return error.message;
    }

    return "An error occurred, please try again later"
}



