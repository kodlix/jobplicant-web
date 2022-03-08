import { MESSAGE_TYPE } from "store/constant";
import { showMessage } from "./notification";
import agent from "../../services/agent.service";

const initialState = {
  editingJob: false,
  loading: false,
  loadingApplicants: false,
  allJobs: [],
  jobs: [],
  jobDetail: null,
  applicants: [],
  appliedJobs: [], //current logged in user applied jobs
  jobApplicationResponse: null,
  jobApplicationRequest: false,
  uploadCvRequest: false,
  uploadCvResponse: null,
};

const LOADING = "LOADING_JOB";
const EDITING_JOB = "EDITING_JOB";
const EDIT_JOB_SUCCESS = "EDIT_JOB_SUCCESS";
const LOAD_ALL_JOBS = "LOAD_ALL_JOBS";
const LOAD_JOBS = "LOAD_JOBS";
const LOAD_SINGLE_JOB = "LOAD_SINGLE_JOB";
const GET_JOB_DETAIL = "GET_JOB_DETAIL";
const APPLY_JOB_REQUEST = "APPLY_JOB_REQUEST";
const UPLOAD_CV_REQUEST = "UPLOAD_CV_REQUEST";
const APPLY_JOB = "APPLY_JOB";
const APPLY_JOB_WITH_CV = "APPLY_JOB_WITH_CV";
const LOADING_APPLICANTS = "LOADING_APPLICANTS";
const GET_JOB_APPLICANTS = "GET_JOB_APPLICANTS";
const LOAD_JOBS_ERROR = "LOAD_JOBS_ERROR";
const ALL_APPLIED_JOBS = "ALL_APPLIED_JOBS";

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: false,
        jobs: [],
        allJobs: [],
        jobDetail: null,
      };
    case EDITING_JOB:
      return {
        ...state,
        editingJob: true,
      };
    case EDIT_JOB_SUCCESS:
      return {
        ...state,
        editingJob: false,
      };
    case LOADING_APPLICANTS:
      return {
        ...state,
        loadingApplicants: true,
      };
    case LOAD_ALL_JOBS:
      return {
        ...state,
        loading: false,
        allJobs: action.payload.data,
      };
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
      };
    case GET_JOB_DETAIL:
      return {
        ...state,
        loading: false,
        jobDetail: action.payload,
      };
    case APPLY_JOB_REQUEST:
      return {
        ...state,
        jobApplicationRequest: true,
      };
    case APPLY_JOB:
      return {
        ...state,
        jobApplicationRequest: false,
        jobApplicationResponse: action.payload,
      };
    case UPLOAD_CV_REQUEST:
      return {
        ...state,
        uploadCvRequest: true,
      };
    case APPLY_JOB_WITH_CV:
      return {
        ...state,
        uploadCvRequest: false,
        uploadCvResponse: action.payload,
      };
    case GET_JOB_APPLICANTS:
      return {
        ...state,
        loadingApplicants: false,
        applicants: action.payload,
      };
    case ALL_APPLIED_JOBS:
      return {
        ...state,
        appliedJobs: action.payload,
      };
    case LOAD_JOBS_ERROR:
      return {
        ...state,
        loading: false,
        jobApplicationRequest: false,
      };
    default:
      return state;
  }
}

// Action Creators
export const allJobsLoaded = (data) => ({
  type: LOAD_ALL_JOBS,
  payload: data,
});
export const allAppliedJobResponse = (data) => ({
  type: ALL_APPLIED_JOBS,
  payload: data,
});
export function jobsLoaded(data) {
  return { type: LOAD_JOBS, payload: data };
}
export const jobsLoadedError = () => ({
  type: LOAD_JOBS_ERROR,
});
export const jobSingleLoaded = (data) => {
  return { type: LOAD_SINGLE_JOB, payload: data };
};
export const getJobDetail = (data) => ({
  type: GET_JOB_DETAIL,
  payload: data,
});
export const applyJobRequest = () => ({
  type: APPLY_JOB_REQUEST,
});
export const applyJob = (response) => ({
  type: APPLY_JOB,
  payload: response,
});
export const uploadCvRequest = () => ({
  type: UPLOAD_CV_REQUEST,
});
export const actionApplyJobWithCv = (response) => ({
  type: APPLY_JOB_WITH_CV,
  payload: response,
});
export const actionLoadingApplicants = () => ({
  type: LOADING_APPLICANTS,
});
export const actionGetApplicant = (response) => ({
  type: GET_JOB_APPLICANTS,
  payload: response,
});
export const editJobSuccess = () => ({
  type: EDIT_JOB_SUCCESS,
});
export const editingJob = () => ({
  type: EDITING_JOB,
});
export const loading = () => ({
  type: LOADING,
});

// Actions
export const loadAllJobs = () => (dispatch) => {
  dispatch(loading(true));
  return agent.Job.loadAll().then((response) => {
    dispatch(loading(false));
    dispatch(allJobsLoaded(response));
  });
};
export const loadJobs = () => (dispatch) => {
  dispatch(loading(true));
  return agent.Job.load().then((response) => {
    dispatch(loading(false));
    dispatch(jobsLoaded(response));
  });
};
export const loadAppliedJobs = () => (dispatch) => {
  return agent.Job.loadAppliedJobs().then(
    (response) => {
      console.log("response test jobs", response.data);
      dispatch(allAppliedJobResponse(response.data));
    },
    (error) => {
      dispatch(showMessage({ type: "error", message: error }));
    }
  );
};
// export const loadJobs = () => (dispatch) => {
//   dispatch(loading(true));
//   return agent.Job.load().then((response) => {
//     dispatch(loading(false));
//     dispatch(jobsLoaded(response));
//   });
// };

export function viewJob(jobId) {
  return (dispatch) => {
    dispatch(loading(true));
    return agent.Job.view(jobId).then(
      (response) => {
        dispatch(loading(false));
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
    dispatch(loading(true));
    return agent.Job.save(data).then(
      (response) => {
        dispatch(loading(false));
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
export function editJob(id, data) {
  return (dispatch) => {
    dispatch(editingJob());
    return agent.Job.edit(id, data).then(
      (response) => {
        dispatch(editJobSuccess());
        dispatch(
          showMessage({
            type: MESSAGE_TYPE.SUCCESS,
            title: "Job Information",
            message: "Job updated successfully",
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
export function applyWithCV(jobId, data) {
  return (dispatch) => {
    dispatch(uploadCvRequest());
    return agent.Job.applyWithCV(jobId, data).then(
      (response) => {
        dispatch(actionApplyJobWithCv(response));
        dispatch(
          showMessage({
            type: MESSAGE_TYPE.SUCCESS,
            title: "Cv Upload",
            message: "CV UPLOAD successfully",
          })
        );
        //apply for the job with cv url
        // dispatch(apply(jobId, response.url));
      },
      (error) => {
        // handle error
        dispatch(jobsLoadedError());
        dispatch(showMessage({ type: "error", message: error }));
      }
    );
  };
}

export function viewApplicant(jobId) {
  return (dispatch) => {
    dispatch(actionLoadingApplicants());
    return agent.Job.applicants(jobId).then(
      (response) => {
        dispatch(actionGetApplicant(response.data));
      },
      (error) => {
        // handle error
        dispatch(jobsLoadedError());
        dispatch(showMessage({ type: "error", message: error }));
      }
    );
  };
}

export function acceptCorporateApplicant(applicationId, data) {
  return (dispatch) => {
    return agent.Job.acceptApplication(applicationId, data).then(
      (response) => {
        dispatch(
          showMessage({
            type: MESSAGE_TYPE.SUCCESS,
            title: "Applicant status",
            message: "Applicant accepted!",
          })
        );
      },
      (error) => {
        dispatch(showMessage({ type: "error", message: error }));
      }
    );
  };
}
export function rejectCorporateApplicant(applicationId, data) {
  return (dispatch) => {
    return agent.Job.rejectApplication(applicationId, data).then(
      (response) => {
        dispatch(
          showMessage({
            type: MESSAGE_TYPE.SUCCESS,
            title: "Applicant status",
            message: "Applicant rejected!",
          })
        );
      },
      (error) => {
        dispatch(showMessage({ type: "error", message: error }));
      }
    );
  };
}
export function suspendApplicant(applicationId, data) {
  return (dispatch) => {
    return agent.Job.suspendApplication(applicationId, data).then(
      (response) => {
        dispatch(
          showMessage({
            type: MESSAGE_TYPE.SUCCESS,
            title: "Applicant status",
            message: "Applicant suspended!",
          })
        );
      },
      (error) => {
        dispatch(showMessage({ type: "error", message: error }));
      }
    );
  };
}
