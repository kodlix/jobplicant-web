import {push} from "connected-react-router";
import {showMessage} from './notification';
import agent from "../../services/agent.service";
import {MESSAGE_TYPE} from '../constant'
import {loadLga, loadStates} from "./location";
import { closeModal } from "./modal";
import { loadProfileInfo } from "./account";

// initial values
const experience = {
    experience: {
        id: "",
        id: "",
        jobTitle: "",
        startDate: null,
        endDate: null,
        location: "",
        company: "",
        description: "",
        jobCategoryName: "",
        jobCategoryId: ""
    },
    experiences: []
};


// Action types
const UPDATE_PROFILE = 'app/experience/UPDATE_PROFILE ';
const LOAD_EXPERIENCE = 'app/experience/LOAD_EXPERIENCE';


// Reducer
export default function reducer(state = experience, action = {}) {
    switch (action.type) {
        case LOAD_EXPERIENCE: return {
                ...state,
                experience: action.payload
            };
        default:
            return state
    }
};

// Action Creators
export function experienceLoaded(data) {
    return {type: LOAD_EXPERIENCE, payload: data};
}

// Actions
export function loadExperience(id) {
    return dispatch => {
        return agent.JobExperience.view(id).then(response => {
            dispatch(experienceLoaded(response));
        });
    }
}

export function createExperience(data) {
    return dispatch => {
        return agent.JobExperience.save(data).then(response => {
            dispatch(experienceLoaded(response));
            dispatch(loadProfileInfo());
            dispatch(closeModal());
            dispatch(showMessage({type: MESSAGE_TYPE.SUCCESS, title: "Save Job Experience",  message: ("Job experience saved successfully")}));
        },
        error => { // handle error
            dispatch(showMessage({type: "error", message: error}));
        }
        );
    }
}

export function updateExperience(id, data) {
    return dispatch => {
        return agent.JobExperience.edit(id,  data).then(response => {
            dispatch(experienceLoaded(response));
            dispatch(closeModal());
            dispatch(showMessage({type: MESSAGE_TYPE.SUCCESS, title: "Save Job Experience",  message: ("Job experience saved successfully")}));
        },
        error => { // handle error
            dispatch(showMessage({type: "error", message: error}));
        }
        );
    }
}

