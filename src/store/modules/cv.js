import { showMessage } from "./notification";
import agent from "../../services/agent.service";
import { MESSAGE_TYPE } from "store/constant";

const initialState = {
    data: {},
    loading: false,
    response: null,
    isDeletingCv: false,
    submitting: false
}

const SUBMITTING = 'SUBMITTING'
const LOADING = 'LOADING'
const IS_DELETING_CV = 'IS_DELETING_CV'
const CREATE_OR_ADD_CV = 'CREATE_OR_ADD_CV'
const FETCH_CV = 'FETCH_CV'
const DELETE_CV = 'DELETE_CV'
const ERROR_HANDLER = 'ERROR_HANDLER'

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SUBMITTING: 
            return {
                ...state,
                submitting: true
            }
        case LOADING:
            return { ...state, 
                loading: true,
                isDeletingCv: false
            }
        case IS_DELETING_CV:
            return {
                ...state,
                isDeletingCv: true,
                loading: false,
            }
        case CREATE_OR_ADD_CV:
            return {
                ...state,
                loading: false,
                submitting: false,
                response: action.payload
            }
        case FETCH_CV:
            return {
                ...state,
                loading: false,
                data: action.payload
            }
        case DELETE_CV:
            const newCVs = state.data.filter(cv => cv.id !== action.payload)
            return {
                ...state,
                data: newCVs,
                isDeletingCv: false
            }
        case ERROR_HANDLER: {
            return {
                ...state,
                loading: false,
                isDeletingCv: false,
                errorMessage: action.payload
            }
        }
        default:
            return state
    }
}

//Action creators
const submitting = () => ({
    type: SUBMITTING
})
const loading = () => ({
    type: LOADING
})
const isDeletingCv = () => ({
    type: IS_DELETING_CV
})
export const createOrAddCv = (response) => ({
    type: CREATE_OR_ADD_CV,
    payload: response
})
export const actionFetchCv = (response) => ({
    type: FETCH_CV,
    payload: response
})
export const actionDeleteCV = id => ({
    type: DELETE_CV,
    payload: id
})
export const cvLoadedError = (error) => ({
    type: ERROR_HANDLER,
    payload: error
})


// Actions
export function createCV(data) {
    return (dispatch) => {
        dispatch(submitting());
        return agent.Cv.create(data).then(
            (response) => {
                dispatch(createOrAddCv(response))
                dispatch(
                    showMessage({
                        type: MESSAGE_TYPE.SUCCESS,
                        title: "CV Alert",
                        message: "Cv has been saved successfully",
                    })
                );
            },
            (error) => {
                // handle error
                dispatch(cvLoadedError(error));
                dispatch(showMessage({ type: "error", message: error }));
            }
        );
    };
}

export function fetchCV(userId) {
    return (dispatch) => {
        dispatch(loading())
        return agent.Cv.fetch(userId).then(
            (response) => {
                dispatch(actionFetchCv(response));
                dispatch(
                  showMessage({
                    type: MESSAGE_TYPE.SUCCESS,
                    title: "Fetched Cv",
                    message: "Cvs loaded successfully",
                  })
                );
            },
            (error) => {
                // handle error
                dispatch(cvLoadedError(error));
                dispatch(showMessage({ type: "error", message: error }));
            });
    };
}

export function updateCV(data) {
    return (dispatch) => {
        dispatch(loading());
        return agent.Cv.update(data).then(
            (response) => {
                dispatch(createOrAddCv(response));
                dispatch(
                    showMessage({
                        type: MESSAGE_TYPE.SUCCESS,
                        title: "Update CV",
                        message: "Cv updated successfully",
                    })
                );
            },
            (error) => {
                // handle error
                dispatch(cvLoadedError(error));
                dispatch(showMessage({ type: "error", message: error }));
            }
        );
    };
}

export const deleteCv = (id) => (dispatch) => {
    dispatch(isDeletingCv());
    return agent.Cv.delete(id).then(
        (response) => {
            dispatch(actionDeleteCV(id));
            dispatch(
                showMessage({
                    type: MESSAGE_TYPE.SUCCESS,
                    title: "Delete CV",
                    message: "Cv deleted successfully",
                })
            );
        },
        (error) => {
            // handle error
            dispatch(cvLoadedError(error));
            dispatch(showMessage({ type: "error", message: error }));
        }
    );
};