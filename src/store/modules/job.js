import { MESSAGE_TYPE } from "store/constant";
import { showMessage } from "./notification";
import agent from "../../services/agent.service";

const initialState = {
    loading: false,
    jobs: [],
}

const LOADING = "LOADING";
const LOAD_JOBS = "LOAD_JOBS";
const LOAD_JOBS_ERROR = "LOAD_JOBS_ERROR";

// Reducer
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case LOADING:
            return { ...state, loading: true };
        case LOAD_JOBS:
            return {
                ...state,
                loading: false,
                jobs: action.payload,
            };
        case LOAD_JOBS_ERROR:
            return {
                ...state,
                loading: false,
            };
        default:
            return state;
    }
}

// Action Creators
export function jobsLoaded(data) {
    return { type: LOAD_JOBS, payload: data };
}
export const jobsLoadedError = () => ({
    type: LOAD_JOBS_ERROR,
});
export const loading = () => ({
    type: LOADING,
});

// Actions
export const loadJobs = () => (dispatch) => {
    return agent.Job.load().then((response) => {
        dispatch(jobsLoaded(response));
        dispatch(
            showMessage({
                type: MESSAGE_TYPE.SUCCESS,
                title: "Jobs",
                message: "Jobs loaded successfully",
            })
        );
    });
};

export function createJob(data) {
    return (dispatch) => {
        dispatch(loading());
        return agent.Job.save(data).then(
            (response) => {
                dispatch(
                    showMessage({
                        type: MESSAGE_TYPE.SUCCESS,
                        title: "Job Information",
                        message: "Job created successfully",
                    })
                );
            },
            (error) => {
                // handle error
                dispatch(jobsLoadedError());
                dispatch(showMessage({ type: "error", message: error }));
            }
        );
    };
}