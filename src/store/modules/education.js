import agent from "../../services/agent.service";
import { closeModal } from "./modal";
import { showMessage } from "./notification";
import { MESSAGE_TYPE } from '../constant'

//INITIAL STATE
const INITIAL_STATE = {
  loading: false,
  data: {
    "institution": "",
    "qualification": "",
    "course": "",
    "yearOfGraduation": "2021-05-13T23:23:26.438Z",
    "address": "",
    "city": "",
    "country": ""
  },
};

//ACTION TYPES
const UPDATE_EDUCATION = "UPDATE_EDUCATION";
const LOAD_EDUCATION = "LOAD_EDUCATION";
const LOADING_EDUCATION = "LOADING_EDUCATION";

//REDUCER
export default function reducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case LOADING_EDUCATION:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_EDUCATION:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case LOAD_EDUCATION:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    default:
      return state;
  }
};

//ACTION CREATORS
export const isLoading = () => ({
  type: LOADING_EDUCATION,
});
export const educationLoaded = (data) => ({
  type: LOAD_EDUCATION,
  payload: data,
});

export const createUserEducation = (data) => ({
  type: UPDATE_EDUCATION,
  payload: data,
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

export const updateEducation = (education) => (dispatch) => {
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
      dispatch(showMessage({ type: "error", message: error }));
    }
  );
};
