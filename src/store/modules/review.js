import { showMessage } from './notification';
import { push } from "connected-react-router";
import agent from "../../services/agent.service";
import { MESSAGE_TYPE } from "store/constant";

// initial values
const Initial_State = {
    review: {},
    reviews: [],
    loading: false
};


// Action types
const CREATE_REVIEW = 'app/instantJob/CREATE_REVIEW';
const LOAD_REVIEWS = 'app/instantJob/LOAD_REVIEWS';
const LOAD_REVIEW = 'app/instantJob/LOAD_REVIEW';
const LOADING = "LOADING";


// Reducer
export default function reducer(state = Initial_State, action = {}) {
    switch (action.type) {
        case CREATE_REVIEW:
            return {
                ...state,
                error: null,
                fetching: false,
                review: action.payload
            };
        case LOAD_REVIEWS:
            return {
                ...state,
                error: null,
                fetching: false,
                reviews: action.payload
            };
        case LOAD_REVIEW:
            return {
                ...state,
                error: null,
                fetching: false,
                review: action.payload
            };

        case LOADING:
            return {
                ...state,
                loading: action.payload,
                error: null
            };
        default:
            return state;

    }
}

// Action Creator
export const isRequestLoading = (data) => ({
    type: LOADING,
    payload: data,
});

// export const createReview = (data) => ({
//     type: CREATE_REVIEW,
//     payload: data,
// })

export const loadReviews = (data) => ({
    type: LOAD_REVIEWS,
    payload: data,
})

export const loadReview = (data) => ({
    type: LOAD_REVIEW,
    payload: data,
})

// Actions
export function createReview(data) {
    return dispatch => {
        dispatch(isRequestLoading(true));
        return agent.Review.save(data).then(
            response => {
                //handle success
                dispatch(showMessage({ type: MESSAGE_TYPE.SUCCESS, message: "Review successfully created", title: 'Review Successfully created ' }));
                dispatch(push("/instant-hire-applicants/"));
                dispatch(isRequestLoading(false));

            },
            error => {
                dispatch(showMessage({ type: "error", message: error, title: "Failed to delete Instant job" }));
                dispatch(isRequestLoading(false));

            }
        )
    }
}
// export function createInstantJob(instantjob) {
//     return dispatch => {
//         dispatch(isRequestLoading(true));
//         return agent.InstantJob.save(instantjob).then(
//             response => {
//                 dispatch(isRequestLoading(false));
//                 // handle success
//                 dispatch(showMessage({ type: MESSAGE_TYPE.SUCCESS, message: "Instant Job successful created", title: 'Instant job create Successful' }));
//                 dispatch(push("/instant-hires"));

//             }, error => { // handle error
//                 dispatch(showMessage({ type: "error", message: error, title: "Failed to create Instant job" }));
//                 dispatch(isRequestLoading(false));
//             });
//     }
// }