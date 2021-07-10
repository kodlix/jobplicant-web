import { MESSAGE_TYPE } from "store/constant";
import { showMessage } from "./notification";
import agent from "../../services/agent.service";

const initialState = {
    loading: false,
    loadingApplicants: false,
    allJobs: [],
    jobs: [],
    jobDetail: null,
    applicants: [],
    jobApplicationResponse: null,
    jobApplicationRequest: false,
}

const LOADING = "LOADING";
const LOAD_ALL_JOBS = "LOAD_ALL_JOBS";
const LOAD_JOBS = "LOAD_JOBS";
const LOAD_SINGLE_JOB = "LOAD_SINGLE_JOB";
const GET_JOB_DETAIL = "GET_JOB_DETAIL";
const APPLY_JOB_REQUEST = 'APPLY_JOB_REQUEST';
const APPLY_JOB = 'APPLY_JOB';
const LOADING_APPLICANTS = 'LOADING_APPLICANTS';
const GET_JOB_APPLICANTS = 'GET_JOB_APPLICANTS';
const LOAD_JOBS_ERROR = "LOAD_JOBS_ERROR";

// Reducer
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case LOADING:
            return { ...state, 
                loading: true, 
                jobs: [],
                allJobs: [],
                jobDetail: null 
            };
        case LOADING_APPLICANTS:
            return {
                ...state,
                loadingApplicants: true
            }
        case LOAD_ALL_JOBS:
            return {
                ...state,
                loading: false,
                allJobs: action.payload.data
            }
        case LOAD_JOBS:
            return {
                ...state,
                loading: false,
                jobs: action.payload.data,

            };
        case LOAD_SINGLE_JOB: 
            return {
                ...state,
                loading: false,
                jobs: [...state.jobs, action.payload],
            }
        case GET_JOB_DETAIL:
            return { 
                ...state,
                loading: false,
                jobDetail: action.payload
            }
        case APPLY_JOB_REQUEST:
            return {
                ...state,
                jobApplicationRequest: true
            }
        case APPLY_JOB:
            return {
                ...state,
                jobApplicationRequest: false,
                jobApplicationResponse: action.payload
            }
        case GET_JOB_APPLICANTS:
            return {
                ...state,
                loadingApplicants: false,
                applicants: action.payload
            }
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
export const allJobsLoaded = data => ({
    type: LOAD_ALL_JOBS,
    payload: data
})
export function jobsLoaded(data) {
    return { type: LOAD_JOBS, payload: data };
}
export const jobsLoadedError = () => ({
    type: LOAD_JOBS_ERROR,
});
export const jobSingleLoaded = data => {
    return { type: LOAD_SINGLE_JOB, payload: data}
}
export const getJobDetail = data => ({
    type: GET_JOB_DETAIL,
    payload: data
})
export const applyJobRequest = () => ({
    type: APPLY_JOB_REQUEST
})
export const applyJob = response => ({
    type: APPLY_JOB,
    payload: response
})
export const actionLoadingApplicants = () => ({
    type: LOADING_APPLICANTS
})
export const actionGetApplicant = response => ({
    type: GET_JOB_APPLICANTS,
    payload: response
})
export const loading = () => ({
    type: LOADING,
});

// Actions
export const loadAllJobs = () => dispatch => {
    dispatch(loading());
    return agent.Job.loadAll().then((response) => {
        dispatch(allJobsLoaded(response));
    });
}
export const loadJobs = () => (dispatch) => {
    dispatch(loading())
    return agent.Job.load().then((response) => {
        dispatch(jobsLoaded(response));
    });
};

export function viewJob(jobId) {
    return (dispatch) => {
        dispatch(loading());
        return agent.Job.view(jobId).then(
            (response) => {
                dispatch(getJobDetail(response));
            },
            (error) => {
                // handle error
                dispatch(jobsLoadedError());
                dispatch(showMessage({ type: "error", message: error }));
            }
        );
    };
}

export function createJob(data) {
    return (dispatch) => {
        dispatch(loading());
        return agent.Job.save(data).then(
            (response) => {
                dispatch(jobSingleLoaded(response));
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

export function apply(jobId, data) {
    return (dispatch) => {
        dispatch(applyJobRequest());
        return agent.Job.apply(jobId, data).then(
            (response) => {
                dispatch(applyJob(response));
                dispatch(
                    showMessage({
                        type: MESSAGE_TYPE.SUCCESS,
                        title: "Job Application",
                        message: "Job applied successfully",
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

export function viewApplicant(jobId){
    return (dispatch) => {
        dispatch(actionLoadingApplicants());
        return agent.Job.applicants(jobId).then(
            (response) => {
                dispatch(actionGetApplicant(response));
            },
            (error) => {
                // handle error
                dispatch(jobsLoadedError());
                dispatch(showMessage({ type: "error", message: error }));
            }
        );
    };
}
