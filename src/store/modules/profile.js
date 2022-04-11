import { showMessage } from "./notification";
import agent from "../../services/agent.service";
import { MESSAGE_TYPE } from "../constant";
import { closeModal } from "./modal";


// initial values
const profile = {
    loading: false,
    data: {
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
        portfolios: []
    },
};

// Action types
const LOADING = "LOADING/profile";
const LOAD_USER_PROFILE_BY_ID = "app/account/LOAD_USER_PROFILE_BY_ID";
const LOAD_USER_PROFILE_BY_ID_ERROR = "LOAD_USER_PROFILE_BY_ID_ERROR";

// Reducer
export default function reducer(state = profile, action) {
    switch (action.type) {
        case LOADING:
            return { ...state, loading: true };
        case LOAD_USER_PROFILE_BY_ID:

            return {
                ...state,
                loading: false,
                data: action.payload,
            };
        case LOAD_USER_PROFILE_BY_ID_ERROR:
            return {
                ...state,
                loading: false,
            };
        default:
            return state;
    }
}

// Action Creators

export function LoadProfileDataByUser(data) {
    return { type: LOAD_USER_PROFILE_BY_ID, payload: data };
}

export const profileInfoLoadedError = () => ({
    type: LOAD_USER_PROFILE_BY_ID_ERROR,
});
export const loading = () => ({
    type: LOADING,
});

// Actions


export function loadUserProfileById(id) {
    return (dispatch) => {
        dispatch(loading())
        return agent.Account.getByID(id).then((response) => {
            dispatch(LoadProfileDataByUser(response));
            // dispatch(
            //   showMessage({
            //     type: MESSAGE_TYPE.SUCCESS,
            //     title: "Profile Information",
            //     message: "Profile info loaded successfully",
            //   })
            // );
        });
    };
}