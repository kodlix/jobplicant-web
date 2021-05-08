import { push } from "connected-react-router";
import { showMessage } from './notification';
import agent from "../../services/agent.service";
import { MESSAGE_TYPE } from '../constant'
import { loadLga, loadStates } from "./location";
import { closeModal } from "./modal";

// initial values
const account = {
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
    }
};


// Action types
const UPDATE_PROFILE = 'app/account/UPDATE_PROFILE ';
const LOAD_PROFILE_INFO = 'app/account/LOAD_PROFILE_INFO';


// Reducer
export default function reducer(state = account, action = {}) {
    switch (action.type) {
        case LOAD_PROFILE_INFO: return {
            ...state,
            profileInfo: action.payload
        };
        default:
            return state
    }
};

// Action Creators
export function profileInfoLoaded(data) {
    return { type: LOAD_PROFILE_INFO, payload: data };
}

// Actions
export function loadProfileInfo() {
    return dispatch => {
        return agent.Account.getProfileInfo().then(response => {
            dispatch(profileInfoLoaded(response));
            dispatch(showMessage({ type: MESSAGE_TYPE.SUCCESS, title: "Profile Information", message: ("Profile info loaded successfully") }));
        });
    }
}

export function updateBiography(biography) {
    return dispatch => {
        return agent.Account.updateBiography(biography).then(response => {
            dispatch(profileInfoLoaded(response));
            dispatch(closeModal());
            dispatch(showMessage({type: MESSAGE_TYPE.SUCCESS, title: "Update Profile Information",  message: ("Biography saved successfully")}));
        },
        error => { // handle error
            dispatch(showMessage({type: "error", message: error}));
        }
        );
    }
}

export function updateExperience(experience) {
    return dispatch => {
        return agent.Account.updateExperience(experience).then(response => {
            dispatch(profileInfoLoaded(response));
            dispatch(closeModal());
            dispatch(showMessage({type: MESSAGE_TYPE.SUCCESS, title: "Update Profile Information",  message: ("Job experience saved successfully")}));
            dispatch(showMessage({ type: MESSAGE_TYPE.SUCCESS, title: "Update Profile Information", message: ("Biography updated successfully") }));
        },
            error => { // handle error
                dispatch(showMessage({ type: "error", message: error }));
            }
        );
    }
}

export function updateContactInfo(data) {
    return dispatch => {
        return agent.Account.updateContactInfo(data).then(response => {
            dispatch(profileInfoLoaded(response));
            dispatch(closeModal());
            dispatch(showMessage({ type: MESSAGE_TYPE.SUCCESS, title: "Update Profile Information", message: ("Contact information updated successfully") }));
        },
            error => { // handle error
                dispatch(showMessage({ type: "error", message: error }));
            }
        );
    }
}

export function updateUserHobies(hobbies) {
    return dispatch => {
        return agent.Account.updateHobies(hobbies).then(response => {
            dispatch(profileInfoLoaded(response));
            dispatch(closeModal());
            dispatch(showMessage({ type: MESSAGE_TYPE.SUCCESS, title: "Update Profile Information", message: ("Hobbies updated successfully") }));
        },
            error => { // handle error
                dispatch(showMessage({ type: "error", message: error }));
            }
        );
    }
}

export function updateProfilePicture(image) {
    return dispatch => {
        return agent.Account.updateProfilePicture(image).then(response => { // handle success
            dispatch(showMessage({ type: MESSAGE_TYPE.SUCCESS, message: ("Profile image successfully updated") }));
        }, error => { // handle error
            dispatch(showMessage({ type: "error", message: error }));
        });
    }
}

export function loadAccountByUser(id) {
    return dispatch => {
        return agent.Account.getByID(id).then(response => { // handle success
            // dispatch(LoadProfileDataByUser(response))

        }, error => { // handle error
            dispatch(showMessage({ type: "error", message: error }));
        });
    }
}
