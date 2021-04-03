import agent from "../../services/agent.service";
import { push } from "connected-react-router";


// initial values
const common = {
    routeRestrictedMode: false
};

// Action types
const ROUTE_RESTRICTED_MODE = 'pharmaconnect/common/ROUTE_RESTRICTED_MODE';


//Action Creator
export function onRouteRestricted() {
    return { type: ROUTE_RESTRICTED_MODE, payload: true };
}

export function onRouteRestrictedCancelled() {
    return { type: ROUTE_RESTRICTED_MODE, payload: false };
}



//actions

export function allowOwnerOnly(resourceAccountId, redirectUrl){
    return (dispatch) => {
        if (resourceAccountId !== agent.Auth.current()?.accountId) {
            dispatch(push(redirectUrl));
        }
    }
}


// Reducer
export default function reducer(state = common, action) {
    switch (action.type) {
        case ROUTE_RESTRICTED_MODE:
            return {
                ...state,
                routeRestrictedMode: action.payload
            };
        default: return state
    }
};


