import { showMessage } from "./notification";
import agent from "../../services/agent.service";
// INITIAL STATE
const INITIAL_STATE = {
  loading: false,
  countries: [],
  states: [],
  lga: [],
};

// ACTION TYPES
const LOAD_REQUEST = "LOAD_REQUEST";
const LOAD_COUNTRIES = "LOAD_COUNTRIES";
const LOAD_STATES = "LOAD_STATES";
const LOAD_LGA = "LOAD_LGA";
const LOAD_ERROR = 'LOAD_ERROR';

// Reducers
export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOAD_REQUEST:
      return { ...state, loading: true };
    case LOAD_COUNTRIES:
      return { ...state, countries: action.payload, loading: false };
    case LOAD_STATES:
      return { ...state, states: action.payload, loading: false };
    case LOAD_LGA:
      return { ...state, lga: action.payload, loading: false };
    case LOAD_ERROR:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}
// Action Creators
export const loading = () => ({ type: LOAD_REQUEST });
export const loadingFailure = () => ({
  type: LOAD_ERROR,
});
export const loadCountries = (countries) => ({
  type: LOAD_COUNTRIES,
  payload: countries,
});

export const loadStates = (states) => ({
  type: LOAD_STATES,
  payload: states,
});

export const loadLGA = (lga) => ({
  type: LOAD_LGA,
  payload: lga,
});

// Actions
export function fetchCountries() {
  return (dispatch) => {
    return agent.Country.load().then(
      (response) => {
        dispatch(loadCountries(response));
      },
      (error) => {
        // handle error
        dispatch(loadingFailure());
        dispatch(showMessage({ type: "error", message: error }));
      }
    );
  };
}
export function fetchStates(countryId) {
  return (dispatch) => {
    return agent.State.loadByCountry(countryId).then(
      (response) => {
        dispatch(loadStates(response));
      },
      (error) => {
        // handle error
        dispatch(loadingFailure());
        dispatch(showMessage({ type: "error", message: error }));
      }
    );
  };
}
export function fetchLGA(stateId) {
  return (dispatch) => {
    return agent.Lga.loadByState(stateId).then(
      (response) => {
        dispatch(loadLGA(response));
      },
      (error) => {
        // handle error
        dispatch(loadingFailure());
        dispatch(showMessage({ type: "error", message: error }));
      }
    );
  };
}
