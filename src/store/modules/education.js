import agent from "../../services/agent.service";
import { closeModal } from "./modal";
import { showMessage } from "./notification";
import { MESSAGE_TYPE } from "../constant";


//INITIAL STATE
const INITIAL_STATE = {
  loading: false,
  submitting: false,
  data: {
    institution: "",
    qualification: "",
    course: "",
    yearOfGraduation: "2021-05-13T23:23:26.438Z",
    address: "",
    city: "",
    country: "",
    id: "",
  },
  updatedOrDeleted: false,
};

//ACTION TYPES
const UPDATE_EDUCATION = "UPDATE_EDUCATION";
const LOAD_EDUCATION = "LOAD_EDUCATION";
const LOADING_EDUCATION = "LOADING_EDUCATION";
const LOAD_EDUCATION_ERROR = "LOAD_EDUCATION_ERROR";
const SUBMITTING = "SUBMITTING"

//REDUCER
export default function reducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case SUBMITTING:
      return {
        ...state,
        submitting: true
      }
    case LOADING_EDUCATION:
      return {
        ...state,
        loading: true,
        updatedOrDeleted: false,
      };
    case UPDATE_EDUCATION:
      return {
        ...state,
        loading: false,
        submitting: false,
        data: action.payload,
        updatedOrDeleted: true,
      };
    case LOAD_EDUCATION:
      return {
        ...state,
        loading: false,
        submitting: false,
        data: action.payload,
        updatedOrDeleted: false,
      };
    case LOAD_EDUCATION_ERROR:
      return { ...state, loading: false,submitting: false, updatedOrDeleted: false };
    default:
      return state;
  }
}

//ACTION CREATORS
export const isLoading = () => ({
  type: LOADING_EDUCATION,
});
export const isSubmitting = () => ({
  type: SUBMITTING
})
export const educationLoaded = (data) => ({
  type: LOAD_EDUCATION,
  payload: data,
});

export const createUserEducation = (data) => ({
  type: UPDATE_EDUCATION,
  payload: data,
});

export const educationLoadedError = () => ({
  type: LOAD_EDUCATION_ERROR,
});

//ACTIONS
export const loadEducation = () => (dispatch) => {
  return agent.Education.load().then((response) => {
    dispatch(educationLoaded(response));
    dispatch(
      showMessage({
        type: MESSAGE_TYPE.SUCCESS,
        title: "Profile Information",
        message: "Education loaded successfully",
      })
    );
  });
};

export const createEducation = (education) => (dispatch) => {
  dispatch(isSubmitting());
  return agent.Education.save(education).then(
    (response) => {
      dispatch(createUserEducation(response));
      dispatch(closeModal());
      dispatch(
        showMessage({
          type: MESSAGE_TYPE.SUCCESS,
          title: "Update Profile Information",
          message: "Education created successfully",
        })
      );
    },
    (error) => {
      // handle error
      dispatch(educationLoadedError());
      dispatch(showMessage({ type: "error", message: error }));
    }
  );
};

export const updateEducation = (id, education) => (dispatch) => {
  dispatch(isSubmitting());
  return agent.Education.edit(id, education).then(
    (response) => {
      dispatch(createUserEducation(response));
      dispatch(closeModal());
      dispatch(
        showMessage({
          type: MESSAGE_TYPE.SUCCESS,
          title: "Update Profile Information",
          message: "Education updated successfully",
        })
      );
    },
    (error) => {
      // handle error
      dispatch(educationLoadedError());
      dispatch(showMessage({ type: "error", message: error }));
    }
  );
};
