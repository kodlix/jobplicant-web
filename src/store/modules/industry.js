import { push } from "connected-react-router";
import { showMessage } from "./notification";
import agent from "../../services/agent.service";
import { MESSAGE_TYPE } from "../constant";
import { loadLga, loadStates } from "./location";
import { closeModal } from "./modal";
import { deleteProfileExperience, loadProfileInfo, submitting } from "./account";

// initial values
const industry = {
    industries: [],
    loading: false,
    submitting: false,
    requesting: false,
    updatedOrDeleted: false,
};

// Action types
const LOAD_INDUSTRIES = "LOAD_INDUSTRIES";
const LOADING = "LOADING";
const SUBMITTING = "SUBMITTING";
const REQUESTING = "REQUESTING"
const LOADING_ERROR = "LOADING_ERROR";

// Reducer
export default function reducer(state = industry, action = {}) {
    switch (action.type) {
        case LOADING:
            return { ...state, loading: true, updatedOrDeleted: false };
        case REQUESTING:
            return { ...state, requesting: true }
        case LOAD_INDUSTRIES:
            return {
                ...state,
                industries: action.payload,
                loading: false,
                submitting: false,
            };
        case LOADING_ERROR:
            return {
                ...state,
                loading: false,
                submitting: false,
                requesting: false,
                updatedOrDeleted: false,
            };
        default:
            return state;
    }
}

// Action Creators
export function LoadIndustries(response) {
    return {
        type: LOAD_INDUSTRIES,
        payload: response
    };
}




// Actions
export function loadIndustries() {
    return (dispatch) => {
        return agent.Industries.getIndustries().then((response) => {
            dispatch(LoadIndustries(response));
        });
    };
}


