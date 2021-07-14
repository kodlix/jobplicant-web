import { showMessage } from './notification';
import { push } from "connected-react-router";
import agent from "../../services/agent.service";
import { MESSAGE_TYPE } from "store/constant";

// initial values
const Initial_State = {
    instantjob: {},
    instantjobs: [],
    applicants: [],
};


// Action types
const CREATE_INSTANT_JOB = 'app/instantJob/CREATE_INSTANT_JOB';
const LOAD_INSTANT_JOBS = 'app/instantJob/LOAD_INSTANT_JOBS';
const LOAD_INSTANT_JOB = 'app/instantJob/LOAD_INSTANT_JOB';
const LOAD_ALL_INSTANT_JOBS = 'app/instantJob/LOAD_ALL_INSTANT_JOBS';
const LOAD_INSTANT_APPLICANTS = 'app/instantJob/LOAD_INSTANT_APPLICANT';

// Reducer
export default function reducer(state = Initial_State, action = {}) {
    switch (action.type) {
        case CREATE_INSTANT_JOB:
            return {
                ...state,
                error: null,
                fetching: false,
                instantjobs: action.payload
            };
        case LOAD_INSTANT_JOBS:
            return {
                ...state,
                error: null,
                fetching: false,
                instantjobs: action.payload.data
            };
        case LOAD_INSTANT_JOB:
            return {
                ...state,
                error: null,
                fetching: false,
                instantjob: action.payload
            };
        case LOAD_ALL_INSTANT_JOBS:
            return {
                ...state,
                error: null,
                fetching: false,
                instantjobs: action.payload
            };
        case LOAD_INSTANT_APPLICANTS:
            return {
                ...state,
                error: null,
                fetching: false,
                applicants: action.payload
            };
        default:
            return state;

    }
}

// Action Creators
export function onCreateInstantJob(data) {
    return {
        type: CREATE_INSTANT_JOB,
        payload: data
    };
}
export function onLoadInstantJobs(data) {
    return {
        type: LOAD_INSTANT_JOBS,
        payload: data
    };
}
export function onLoadInstantJob(data) {
    return {
        type: LOAD_INSTANT_JOB,
        payload: data
    };
}
export function onLoadAllInstantJobs(data) {
    return {
        type: LOAD_ALL_INSTANT_JOBS,
        payload: data
    }
}

export function onLoadInstantJobApplicants(data) {
    return {
        type: LOAD_INSTANT_APPLICANTS,
        payload: data
    };
}


// Actions
export function createInstantJob(instantjob) {
    return dispatch => {
        return agent.InstantJob.save(instantjob).then(
            response => {
                // handle success
                dispatch(showMessage({ type: MESSAGE_TYPE.SUCCESS, message: "Instant Job successful created", title: 'Instant job create Successful' }));
                dispatch(push("/instant-hires"));

            }, error => { // handle error
                dispatch(showMessage({ type: "error", message: error, title: "Failed to create Instant job" }));
            });
    }
}

// This function loads all instant jobs created by a perticular user.
export function loadInstantJobs() {
    return dispatch => {
        return agent.InstantJob.load().then(
            response => {
                //handle success
                dispatch(onLoadInstantJobs(response));
            },
            error => {
                dispatch(showMessage({ type: "error", message: error, title: "Failed to load Instant jobs" }));
            }
        )
    }
}
// This function loads all instant jobs that have been created by different users.
export function fetchAllInstantJobs(page, take) {
    return dispatch => {
        return agent.InstantJob.loadAllInstantJobs(page, take).then(
            response => {
                //handle success
                dispatch(onLoadAllInstantJobs(response));
            },
            error => {
                dispatch(showMessage({ type: "error", message: error, title: "Failed to load Instant jobs" }));
            }
        )
    }
}

export function acceptApplicant(id) {
    return dispatch => {
        return agent.InstantJob.accept(id).then(
            response => {
                //handle success
                dispatch(showMessage({ type: MESSAGE_TYPE.SUCCESS, message: "The applicant will be notified", title: 'Request accepted Successful' }));
                // dispatch(onLoadInstantJobApplicants(response));
            },
            error => {
                dispatch(showMessage({ type: "error", message: error, title: "Failed to load Instant jobs" }));
            }
        )
    }
}

export function rejectApplicant(id) {
    return dispatch => {
        return agent.InstantJob.reject(id).then(
            response => {
                //handle success
                dispatch(showMessage({ type: MESSAGE_TYPE.SUCCESS, message: "Applicant's request rejected", title: 'Request rejected Successful' }));
                // dispatch(onLoadInstantJobApplicants(response));
            },
            error => {
                dispatch(showMessage({ type: "error", message: error, title: "Failed to load Instant jobs" }));
            }
        )
    }
}

export function loadInstantJob(id) {
    return dispatch => {
        return agent.InstantJob.view(id).then(
            response => {
                //handle success
                dispatch(onLoadInstantJob(response));
            },
            error => {
                dispatch(showMessage({ type: "error", message: error, title: "Failed to load Instant jobs" }));
            }
        )
    }
}

export function applyInstantJob(id) {
    return dispatch => {
        return agent.InstantJob.apply(id).then(
            response => {
                //handle success
                dispatch(showMessage({ type: MESSAGE_TYPE.SUCCESS, message: "You have successfully applied for this job", title: 'Applied successfully' }));
                dispatch(push("/instant-jobs"));
            },
            error => {
                dispatch(showMessage({ type: "error", message: error, title: "Failed to load Instant jobs" }));
            }
        )
    }
}

export function loadApplicants(id) {
    return dispatch => {
        return agent.InstantJob.loadApplicants(id).then(
            response => {
                //handle success
                dispatch(onLoadInstantJobApplicants(response));
            },
            error => {
                dispatch(showMessage({ type: "error", message: error, title: "Failed to load Instant jobs applicant" }));
            }
        )
    }
}

export function editInstantJob(id, data) {
    return dispatch => {
        return agent.InstantJob.edit(id, data).then(
            response => {
                //handle success
                dispatch(showMessage({ type: MESSAGE_TYPE.SUCCESS, message: "Instant Job successfully udated", title: 'Instant job successfully updated ' }));
                dispatch(push("/instant-hires"));
            },
            error => {
                dispatch(showMessage({ type: "error", message: error, title: "Failed to load Instant job" }));
            }
        )
    }
}

export function deleteInstantJob(id) {
    return dispatch => {
        return agent.InstantJob.delete(id).then(
            response => {
                //handle success
                dispatch(showMessage({ type: MESSAGE_TYPE.SUCCESS, message: "Instant Job successfully deleted", title: 'Instant job Successfully deleted ' }));
                dispatch(onLoadInstantJobs(response));
                dispatch(push("/instant-hires"));
                window.location.reload();

            },
            error => {
                dispatch(showMessage({ type: "error", message: error, title: "Failed to delete Instant job" }));
            }
        )
    }
}
