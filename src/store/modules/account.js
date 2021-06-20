import { push } from "connected-react-router";
import { showMessage } from "./notification";
import agent from "../../services/agent.service";
import { MESSAGE_TYPE } from "../constant";
import { loadLga, loadStates } from "./location";
import { closeModal } from "./modal";
import { loadError } from "./experience";

// initial values
const account = {
  loading: false,
  profileInfo: {
    id: "",
    email: "",
    firstName: "",
    lastName: "",
    imageUrl: "",
    address: "",
    companyName: "",
    location: "",
    phoneNumber: "",
    profile: "",
    accountType: "",
    dateOfBirth: "",
    hobbies: [],
    interests: [],
    state: "",
    city: "",
    lga: "",
    postalCode: "",
    country: "",
    skills: [],
    experiences: [],
    educations: [],
  },
};

// Action types
const LOADING = "LOADING";
const UPDATE_PROFILE = "app/account/UPDATE_PROFILE ";
const LOAD_PROFILE_INFO = "app/account/LOAD_PROFILE_INFO";
const LOAD_PROFILE_INFO_ERROR = "LOAD_PROFILE_INFO_ERROR";
const DELETE_EXPERIENCE = "DELETE_EXPERIENCE";
const DELETE_EDUCATION = "DELETE_EDUCATION";

// Reducer
export default function reducer(state = account, action = {}) {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: true };
    case LOAD_PROFILE_INFO:
      return {
        ...state,
        loading: false,
        profileInfo: action.payload,
      };
    case LOAD_PROFILE_INFO_ERROR:
      return {
        ...state,
        loading: false,
      };
    case DELETE_EDUCATION:
      const newEducations = state.profileInfo.educations.filter(edu => edu.id !== action.payload);
      console.log('new education', newEducations);
      return {
        ...state,
        profileInfo: {
          ...state.profileInfo,
          educations: [...newEducations]
        }
      }
    case DELETE_EXPERIENCE:
      const newExperiences = state.profileInfo.experiences.filter(exp => exp.id !== action.payload)
      console.log('newExperiences', newExperiences);
      return {
        ...state,
        profileInfo: {
          ...state.profileInfo,
          experiences: [...newExperiences]
        }
      }
    default:
      return state;
  }
}

// Action Creators
export const profileInfoLoaded = (data) => ({
  type: LOAD_PROFILE_INFO,
  payload: data
})

export const profileInfoLoadedError = () => ({
  type: LOAD_PROFILE_INFO_ERROR,
});
export const loading = () => ({
  type: LOADING,
});

//delete education action creator
export const deleteProfileEducation = id => ({
  type: DELETE_EDUCATION,
  payload: id
})
//delete experience action creator
export const deleteProfileExperience = id => ({
  type: DELETE_EXPERIENCE,
  payload: id
})

// Actions
export function updatePersonalProfile(data) {
  return (dispatch) => {
    dispatch(loading());
    return agent.Account.updateProfile(data).then(
      (response) => {
        dispatch(profileInfoLoaded(response));
        dispatch(closeModal());
        dispatch(
          showMessage({
            type: MESSAGE_TYPE.SUCCESS,
            title: "Profile Information",
            message: "Personal profile info loaded successfully",
          })
        );
      },
      (error) => {
        // handle error
        dispatch(profileInfoLoadedError());
        dispatch(showMessage({ type: "error", message: error }));
      }
    );
  };
}
export const loadProfileInfo = () => (dispatch) => {
  return agent.Account.getProfileInfo().then((response) => {
    dispatch(profileInfoLoaded(response));
    dispatch(
      showMessage({
        type: MESSAGE_TYPE.SUCCESS,
        title: "Profile Information",
        message: "Profile info loaded successfully",
      })
    );
  });
}

export function updateBiography(biography) {
  return (dispatch) => {
    dispatch(loading());
    return agent.Account.updateBiography(biography).then(
      (response) => {
        dispatch(profileInfoLoaded(response));
        dispatch(closeModal());
        dispatch(
          showMessage({
            type: MESSAGE_TYPE.SUCCESS,
            title: "Update Profile Information",
            message: "Biography saved successfully",
          })
        );
      },
      (error) => {
        // handle error
        dispatch(profileInfoLoadedError());
        dispatch(showMessage({ type: "error", message: error }));
      }
    );
  };
}

export function updateLOI(loi) {
  return (dispatch) => {
    dispatch(loading());
    return agent.Account.updateLOI(loi).then(
      (response) => {
        dispatch(profileInfoLoaded(response));
        dispatch(closeModal());
        dispatch(
          showMessage({
            type: MESSAGE_TYPE.SUCCESS,
            title: "Update Profile Information",
            message: "Location of interest saved successfully",
          })
        );
      },
      (error) => {
        // handle error
        dispatch(profileInfoLoadedError());
        dispatch(showMessage({ type: "error", message: error }));
      }
    );
  };
}

export function updateExperience(experience) {
  return (dispatch) => {
    return agent.Account.updateExperience(experience).then(
      (response) => {
        dispatch(profileInfoLoaded(response));
        dispatch(closeModal());
        dispatch(
          showMessage({
            type: MESSAGE_TYPE.SUCCESS,
            title: "Update Profile Information",
            message: "Job experience saved successfully",
          })
        );
        dispatch(
          showMessage({
            type: MESSAGE_TYPE.SUCCESS,
            title: "Update Profile Information",
            message: "Biography updated successfully",
          })
        );
      },
      (error) => {
        // handle error
        dispatch(showMessage({ type: "error", message: error }));
      }
    );
  };
}

export function updateContactInfo(data) {
  return (dispatch) => {
    dispatch(loading());
    return agent.Account.updateContactInfo(data).then(
      (response) => {
        dispatch(profileInfoLoaded(response));
        dispatch(closeModal());
        dispatch(
          showMessage({
            type: MESSAGE_TYPE.SUCCESS,
            title: "Update Profile Information",
            message: "Contact information updated successfully",
          })
        );
      },
      (error) => {
        // handle error
        dispatch(profileInfoLoadedError());
        dispatch(showMessage({ type: "error", message: error }));
      }
    );
  };
}

export function updateProfessionOfInterest(data) {
  return (dispatch) => {
    dispatch(loading());
    return agent.Account.updateProfessionOfInterest(data).then(
      (response) => {
        dispatch(profileInfoLoaded(response));
        dispatch(closeModal());
        dispatch(
          showMessage({
            type: MESSAGE_TYPE.SUCCESS,
            title: "Update Profile Information",
            message: "profession of interest updated successfully",
          })
        );
      },
      (error) => {
        // handle error
        dispatch(profileInfoLoadedError());
        dispatch(showMessage({ type: "error", message: error }));
      }
    );
  };
}

export function updateUserHobies(hobbies) {
  return (dispatch) => {
    dispatch(loading());
    return agent.Account.updateHobies(hobbies).then(
      (response) => {
        dispatch(profileInfoLoaded(response));
        dispatch(closeModal());
        dispatch(
          showMessage({
            type: MESSAGE_TYPE.SUCCESS,
            title: "Update Profile Information",
            message: "Hobbies updated successfully",
          })
        );
      },
      (error) => {
        // handle error
        dispatch(profileInfoLoadedError());
        dispatch(showMessage({ type: "error", message: error }));
      }
    );
  };
}

export function updateProfilePicture(image) {
  return (dispatch) => {
    dispatch(loading());
    return agent.Account.updateProfilePicture(image).then(
      (response) => {
        // handle success
        dispatch(profileInfoLoaded(response));
        dispatch(
          showMessage({
            type: MESSAGE_TYPE.SUCCESS,
            message: "Profile image successfully updated",
          })
        );
      },
      (error) => {
        // handle error
        dispatch(profileInfoLoadedError());
        dispatch(showMessage({ type: "error", message: error }));
      }
    );
  };
}

export function updateProfilePortfolio(images) {
  return (dispatch) => {
    dispatch(loading());
    return agent.Account.updateProfilePortfolio(images).then(
      (response) => {
        // handle success
        dispatch(profileInfoLoaded(response));
        dispatch(closeModal())
        dispatch(
          showMessage({
            type: MESSAGE_TYPE.SUCCESS,
            message: "Portfolio image successfully updated",
          })
        );
      },
      (error) => {
        // handle error
        dispatch(profileInfoLoadedError());
        dispatch(showMessage({ type: "error", message: error }));
      }
    );
  };
}

export function loadAccountByUser(id) {
  return (dispatch) => {
    return agent.Account.getByID(id).then(
      (response) => {
        // handle success
        // dispatch(LoadProfileDataByUser(response))
      },
      (error) => {
        // handle error
        dispatch(showMessage({ type: "error", message: error }));
      }
    );
  };
}

//to delete education
export const deleteExperience = (id) => (dispatch) => {
  dispatch(loading());
  return agent.JobExperience.delete(id).then(
    (response) => {
      dispatch(deleteProfileExperience(id));
      dispatch(
        showMessage({
          type: MESSAGE_TYPE.SUCCESS,
          title: "Delete Information",
          message: "Job experience deleted successfully",
        })
      );
      dispatch(loadError());
    },
    (error) => {
      // handle error
      dispatch(loadError());
      dispatch(showMessage({ type: "error", message: error }));
    }
  );
};
//to delete education
export const deleteEducation = (id) => (dispatch) => {
  dispatch(deleteProfileEducation(id));

  // dispatch(loading());
  // return agent.Education.delete(id).then(
  //   (response) => {
  //     dispatch(deleteProfileEducation(id))
  //     dispatch(
  //       showMessage({
  //         type: MESSAGE_TYPE.SUCCESS,
  //         title: "Delete Information",
  //         message: "Education deleted successfully",
  //       })
  //     );
  //     dispatch(loadError());
  //   },
  //   (error) => {
  //     // handle error
  //     dispatch(loadError());
  //     dispatch(showMessage({ type: "error", message: error }));
  //   }
  // );
};
