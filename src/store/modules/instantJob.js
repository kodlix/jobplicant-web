import { showMessage } from './notification';
import { push } from "connected-react-router";
import agent from "../../services/agent.service";
import { MESSAGE_TYPE } from "store/constant";

// initial values
const Initial_State = {
    instantjob: {}
};


// Action types
const CREATE_INSTANT_JOB = 'app/instantJob/CREATE_INSTANT_JOB';
const LOAD_INSTANT_JOBS = 'app/instantJob/LOAD_INSTANT_JOBS';


// Reducer
export default function reducer(state = Initial_State, action = {}) {
    switch (action.type) {
        case CREATE_INSTANT_JOB:
            return {
                ...state,
                error: null,
                fetching: false,
                instantjob: action.payload
            };
        case LOAD_INSTANT_JOBS:
            return {
                ...state,
                error: null,
                fetching: false,
                instantjob: action.payload
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
export function onLoadinstantJobs(data) {
    return {
        type: LOAD_INSTANT_JOBS,
        payload: data
    }
}


// Actions
export function createInstantJob(instantjob) {
    return dispatch => {
        return agent.InstantJob.save(instantjob).then(
            response => {
                // handle success
                dispatch(showMessage({ type: MESSAGE_TYPE.SUCCESS, message: "Instant Job successful created", title: 'Instant job create Successful' }));
                dispatch(push("/instant-jobs"));

            }, error => { // handle error
                dispatch(showMessage({ type: "error", message: error, title: "Failed to create Instant job" }));
            });
    }
}

export function loadInstantJob() {
    return dispatch => {
        return agent.InstantJob.load().then(
            response => {
                //handle success
                dispatch(onLoadinstantJobs(response));
            },
            error => {
                dispatch(showMessage({ type: "error", message: error, title: "Failed to load Instant jobs" }));
            }
        )
    }
}

