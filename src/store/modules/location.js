import agent from "../../services/agent.service";

// initial values
const profile = {
    countries: [],
    states: [],
    lgas: [],
    organizationNames: []
};

// Action types
const COUNTRY = 'COUNTRY';
const STATE = 'STATE';
const LGA = 'LGA';
const ORGANIZATIONNAME = 'ORGANIZATIONNAME';


//Action Creator
export function onLoadCountry(country) {
    return { type: COUNTRY, payload: country };
}
export function onLoadState(state) {
    return { type: STATE, payload: state };
}

export function onLoadLga(lga) {
    return { type: LGA, payload: lga };
}
export function onLoadOrganizationNames(organizationName) {
    return { type: ORGANIZATIONNAME, payload: organizationName };
}

// Reducer
export default function reducer(state = profile, action) {
    switch (action.type) {
        case COUNTRY:
            return {
                ...state,
                error: null,
                countries: action.payload,
                fetching: false,
            };
        case STATE:
            return {
                ...state,
                error: null,
                states: action.payload,
                fetching: false,
            };
        case LGA:
            return {
                ...state,
                error: null,
                lgas: action.payload,
                fetching: false,
            };
        case ORGANIZATIONNAME:
            return {
                ...state,
                error: null,
                organizationNames: action.payload,
                fetching: false,
            };
        default: return state
    }
};

//Actions
export function loadCountry() {
    return dispatch => {
        return agent.Country.load().then(
            response => {
                dispatch(onLoadCountry(response));
            },
            () => {
                // dispatch(showErrorMessage(error));
            }
        );
    }
}

export function loadStates(countryid) {
    return dispatch => {
        if (countryid) {
            return agent.State.loadByCountry(countryid).then(
                response => {
                    dispatch(onLoadState(response));
                },
                () => {
                    // dispatch(showErrorMessage(error));
                }
            );
        }

    }
}

export function loadLga(stateid) {
    return dispatch => {
        if (stateid) {
            return agent.Lga.loadByState(stateid).then(
                response => {
                    dispatch(onLoadLga(response));
                }
            );
        }
    }
}
export function LoadOrganizationNames() {
    return dispatch => {
        return agent.Account.organizationName().then(
            response => {
                dispatch(onLoadOrganizationNames(response));
            },
            () => {
                // dispatch(showErrorMessage(error));
            }
        );
    }
}


