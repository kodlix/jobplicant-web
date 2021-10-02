// initial values
const notification = {
    type: "", // takes success, error, info, warning
    title: "",
    message: "",
    processing: false,
    processed: true,

};


// Action types
const MESSAGE_DISPLAYED = 'app/notification/MESSAGE_DISPLAYED';
const MESSAGE_CLEARED = 'app/notification/MESSAGE_CLEARED ';
const PROCESSING = "app/notification/PROCESSING";
const PROCESSED = "app/notification/PROCESSED";
const ERROR_DISPLAYED = "app/notification/ERROR_DISPLAYED";
const SUCCESS_DISPLAYED = "app/notification/SUCCESS_DISPLAYED";

const TIME_OUT = 10000;



// Reducer
export default function reducer(state = notification, action = {}) {
    switch (action.type) {
        case MESSAGE_DISPLAYED: return {
            ...state,
            ...action.payload,
            fetching: false
        };

        case MESSAGE_CLEARED: return {
            ...state,
            type: "",
            title: "",
            message: "",
            fetching: false,
            offline: false
        };
        case PROCESSING:
            return {
                ...state,
                processing: true,
            };

        case PROCESSED:
            return {
                ...state,
                processing: false,
            };
        default:
            return state;
    }
}

// action creators
export function messageDisplayed(data) {
    if (!data) {
        return;
    }

    return { type: MESSAGE_DISPLAYED, payload: data, notificationType: data.type };
}


export function messageCleared() {
    return { type: MESSAGE_CLEARED };
}

export function offlineMessageDisplayed() {
    return { type: MESSAGE_DISPLAYED };
}

export function processing() {
    return {
        type: PROCESSING,
    };
}

export function processed() {
    return {
        type: PROCESSED,
    };
}

export function errorMessageDisplayed(data) {
    return {
        type: ERROR_DISPLAYED,
        payload: data,
        notificationType: "error",
    };
}
export function successMessageDisplayed(data) {
    return {
        type: SUCCESS_DISPLAYED,
        payload: data,
        notificationType: "success",
    };
}




// actions
export function showMessage(data) {
    if (data && data.type === 'error') {
        return dispatch => {
            dispatch(messageDisplayed({
                type: 'error',
                message: serializeError(data.message),
                title: data.title || "An error occured"
            }))
        }
    }

    return dispatch => {
        dispatch(messageDisplayed(data))
    }
}
export function showErrorMessage(message) {
    return (dispatch) => {
        dispatch(errorMessageDisplayed(serializeError(message)));
        setTimeout(() => {
            dispatch(messageCleared());
        }, TIME_OUT);
    };
}

export function showSuccessMessage(message) {
    return (dispatch) => {
        dispatch(successMessageDisplayed(message));
        setTimeout(() => {
            dispatch(messageCleared());
        }, TIME_OUT);
    };
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
