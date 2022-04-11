import { showMessage } from "./notification";
import agent from "../../services/agent.service";
import { MESSAGE_TYPE } from "../constant";
import { closeModal } from "./modal";

// initial values
const userSkill = {
  name: "",
  description: "",
  updatedOrDeleted: false,
  loading: false,
};

// Action types
const UPDATE_USER_SKILL = "app/userSkill/UPDATE_USER_SKILL ";
const LOAD_USER_SKILL = "app/userSkill/LOAD_USER_SKILL";
const DELETE_USER_SKILL = "DELETE_USER_SKILL";
const LOADING = "LOADING";
const USER_SKILL_ERROR = "USER_SKILL_ERROR";

// Reducer
export default function reducer(state = userSkill, action = {}) {
  switch (action.type) {
    case UPDATE_USER_SKILL:
      return {
        ...state,
        userSkill: action.payload,
        updatedOrDeleted: true,
      };
    case LOAD_USER_SKILL:
      return {
        ...state,
        userSkill: action.payload.data,
      };
    case DELETE_USER_SKILL:
      return {
        ...state,
        updatedOrDeleted: true,
        loading: false,
      };
    case LOADING:
      return {
        ...state,
        updatedOrDeleted: false,
        loading: true,
      };
    case USER_SKILL_ERROR:
      return {
        ...state,
        updatedOrDeleted: false,
        loading: false,
      };
    default:
      return state;
  }
}

// Action Creators
export function loading() {
  return { type: LOADING };
}
export function userSkillLoaded(data) {
  return { type: LOAD_USER_SKILL, payload: data };
}

export function createUserSkill(data) {
  return { type: UPDATE_USER_SKILL, payload: data };
}
export function deleteUserSkill() {
  return { type: DELETE_USER_SKILL };
}
export function userSkillError() {
  return { type: USER_SKILL_ERROR };
}
// Actions
export function loadUserSkills() {
  return (dispatch) => {
    return agent.UserSkill.load().then((response) => {
      dispatch(userSkillLoaded(response));
      // dispatch(
      //   showMessage({
      //     type: MESSAGE_TYPE.SUCCESS,
      //     title: "Profile Information",
      //     message: "User skill loaded successfully",
      //   })
      // );
    });
  };
}

export function createSkill(userskill) {
  return (dispatch) => {
    dispatch(loading())
    return agent.UserSkill.save(userskill).then(
      (response) => {
        dispatch(createUserSkill(response));
        dispatch(closeModal());
        dispatch(
          showMessage({
            type: MESSAGE_TYPE.SUCCESS,
            title: "Update Profile Information",
            message: "User skill created successfully",
          })
        );
      },
      (error) => {
        // handle error
        dispatch(showMessage({ type: "error", message: error }));
        dispatch(userSkillError());
      }
    );
  };
}

export function deleteSkill(id) {
  return (dispatch) => {
    dispatch(loading());
    return agent.UserSkill.delete(id).then(
      (response) => {
        dispatch(deleteUserSkill(response));
        dispatch(
          showMessage({
            type: MESSAGE_TYPE.SUCCESS,
            title: "Deleted Profile Information",
            message: "User skill deleted successfully",
          })
        );
      },
      (error) => {
        // handle error
        dispatch(showMessage({ type: "error", message: error }));
        dispatch(userSkillError());
      }
    );
  };
}

// export function updateContactInfo(data) {
//     return dispatch => {
//         return agent.Account.updateContactInfo(data).then(response => {
//             dispatch(profileInfoLoaded(response));
//             dispatch(closeModal());
//             dispatch(showMessage({ type: MESSAGE_TYPE.SUCCESS, title: "Update Profile Information", message: ("Contact information updated successfully") }));
//         },
//             error => { // handle error
//                 dispatch(showMessage({ type: "error", message: error }));
//             }
//         );
//     }
// }

// export function updateUserHobies(hobbies) {
//     return dispatch => {
//         return agent.Account.updateHobies(hobbies).then(response => {
//             dispatch(profileInfoLoaded(response));
//             dispatch(closeModal());
//             dispatch(showMessage({ type: MESSAGE_TYPE.SUCCESS, title: "Update Profile Information", message: ("Hobbies updated successfully") }));
//         },
//             error => { // handle error
//                 dispatch(showMessage({ type: "error", message: error }));
//             }
//         );
//     }
// }

// export function updateProfilePicture(image) {
//     return dispatch => {
//         return agent.Account.updateProfilePicture(image).then(response => { // handle success
//             dispatch(showMessage({ type: MESSAGE_TYPE.SUCCESS, message: ("Profile image successfully updated") }));
//         }, error => { // handle error
//             dispatch(showMessage({ type: "error", message: error }));
//         });
//     }
// }

// export function loadAccountByUser(id) {
//     return dispatch => {
//         return agent.Account.getByID(id).then(response => { // handle success
//             // dispatch(LoadProfileDataByUser(response))

//         }, error => { // handle error
//             dispatch(showMessage({ type: "error", message: error }));
//         });
//     }
// }
