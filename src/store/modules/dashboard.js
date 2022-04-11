import agent from "../../services/agent.service";
import { showMessage } from "./notification";

const dashboard = {
    count: [],
    allPost: {},
    allJob: {},
    userPost: {},
    userContact: {},
    instantService: {},
    userJob: {},
    userActivities: []
}

// Action types
const COUNT = "COUNT";
const POST = "POST";
const JOB = "JOB";
const USER_POST_COUNT = "USER_POST_COUNT";
const USER_CONTACT = "USER_CONTACT";
const INSTANT_SERVICE = "INSTANT_SERVICE";
const USER_JOB = "USER_JOB";
const USER_ACTIVITIES = "USER_ACTIVITIES";

// Reducer
export default function reducer(state = dashboard, action = {}) {
    switch (action.type) {
        case COUNT:
            return {
                ...state,
                count: action.payload,
            };
        case POST:
            return {
                ...state,
                allPost: action.payload,
            }
        case JOB:
            return {
                ...state,
                allJob: action.payload,
            }
        case USER_POST_COUNT:
            return {
                ...state,
                userPost: action.payload,
            }
        case USER_CONTACT:
            return {
                ...state,
                userContact: action.payload,
            }
        case INSTANT_SERVICE:
            return {
                ...state,
                instantService: action.payload,
            }
        case USER_JOB:
            return {
                ...state,
                userJob: action.payload,
            }
        case USER_ACTIVITIES:
            return {
                ...state,
                userActivities: action.payload,
            }
        default:
            return state;
    }
}

// Action Creators
export function userCountByGroup(data) {
    return { type: COUNT, payload: data };
}

export function getAllPosts(data) {
    return { type: POST, payload: data };
}
export function getAllJobs(data) {
    return { type: JOB, payload: data };
}

export function getUserPosts(data) {
    return { type: USER_POST_COUNT, payload: data };
}

export function getUserContacts(data) {
    return { type: USER_CONTACT, payload: data };
}

export function getInstantService(data) {
    return { type: INSTANT_SERVICE, payload: data };
}

export function getUserJob(data) {
    return { type: USER_JOB, payload: data };
}
export function getUserActivities(data) {
    return { type: USER_ACTIVITIES, payload: data };
}

//Action
//Admin
export const UserAdminCount = () => (dispatch) => {
    return agent.Dashboard.getCountByGroup().then(
        (response) => {
            dispatch(userCountByGroup(response));
            console.log("DASH", response);
        },
        (error) => {
            dispatch(showMessage({ type: "error", message: error }));
        }
    );
};

export const AdminPostCount = () => (dispatch) => {
    return agent.Dashboard.getAllPostCount().then(
        (response) => {
            dispatch(getAllPosts(response));
        },
        (error) => {
            dispatch(showMessage({ type: "error", message: error }));
        }
    );
};

export const AdminJobCount = () => (dispatch) => {
    return agent.Dashboard.getAllJobCount().then(
        (response) => {
            dispatch(getAllJobs(response));
        },
        (error) => {
            dispatch(showMessage({ type: "error", message: error }));
        }
    );
};


// user
export const UserPostCount = (userId) => async (dispatch) => {
    return agent.Dashboard.getUserPostCount(userId).then(
        (response) => {
            dispatch(getUserPosts(response));
        },
        (error) => {
            dispatch(showMessage({ type: "error", message: error }));
        }
    );
};

export const UserContact = () => async (dispatch) => {
    return agent.Dashboard.loadUserContact().then(
        (response) => {
            dispatch(getUserContacts(response));
        },
        (error) => {
            dispatch(showMessage({ type: "error", message: error }));
        }
    );
};

export const InstantService = () => async (dispatch) => {
    return agent.Dashboard.loadInstantService().then(
        (response) => {
            dispatch(getInstantService(response));
        },
        (error) => {
            dispatch(showMessage({ type: "error", message: error }));
        }
    );
};

export const UserJob = () => async (dispatch) => {
    return agent.Dashboard.loadJobs().then(
        (response) => {
            dispatch(getUserJob(response));
        },
        (error) => {
            dispatch(showMessage({ type: "error", message: error }));
        }
    );
};

export const UserActivities = () => async (dispatch) => {
    return agent.Dashboard.loadUserActivities().then(
        (response) => {
            console.log("acti", response);
            dispatch(getUserActivities(response));
        },
        (error) => {
            dispatch(showMessage({ type: "error", message: error }));
        }
    );
};

