import { push } from "connected-react-router";
import { showErrorMessage, showSuccessMessage } from './notification';
import agent from "../../services/agent.service";

// initial values
const defaultState = {
  outlets: [],
  outlet: {
    accountID: "",
    outletName: "",
    pcn: "",
    openingTime: "",
    closingTime: "",
    address: "",
    country: "",
    state: "",
    lga: "",
    city: "",
    longitude: 0,
    latitude: 0,
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
  }
};



// Action types
const OUTLET_LOADED = 'pharmakonnect/outlet/OUTLET_LOADED';
const OUTLETS_LOADED = 'pharmakonnect/outlet/OUTLETS_LOADED';

// Reducer
export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case OUTLET_LOADED:
      return {
        ...state,
        outlet: action.payload
      }
    case OUTLETS_LOADED:
      return {
        ...state,
        outlets: action.payload
      }
    default: return state;
  }
}

// Action Creators
export function outletByCompanyLoaded(data) {
  return { type: OUTLET_LOADED, payload: data };
}


export function outletsByCompanyLoaded(data) {
  return { type: OUTLETS_LOADED, payload: data };
}



//Actions
export function createOutlet(outlet) {
  outlet.latitude = parseInt(outlet.latitude);
  outlet.longitude = parseInt(outlet.longitude);
  return dispatch => {
    return agent.Outlet.save(outlet).then(
      response => {
        //handle success
        dispatch(showSuccessMessage(("Outlet created")));
        dispatch(push("/outlets"));
      },
      error => {
        //handle error
        dispatch(showErrorMessage(error));
      }
    );
  }
}

export function editOutlet(id, outlet) {
  outlet.latitude = parseInt(outlet.latitude);
  outlet.longitude = parseInt(outlet.longitude);
  return dispatch => {
    return agent.Outlet.edit(id, outlet).then(
      response => {
        //handle success
        dispatch(showSuccessMessage(("Outlet has been updated")));
        dispatch(push(`/outlet/view/${id}`));
      },
      error => {
        //handle error
        dispatch(showErrorMessage(error));
      }
    );
  }
}

export function deleteOutlet(id) {
  return dispatch => {
    return agent.Outlet.delete(id).then(
      response => {
        //handle success
        dispatch(showSuccessMessage(("Outlet has been deleted")));
        dispatch(push("/outlets"));
      },
      error => {
        //handle error
        dispatch(showErrorMessage(error));
      }
    );
  }
}

export function loadOutletsByCompany(pageNumber) {
  return dispatch => {
    return agent.Outlet.load(pageNumber).then(
      response => {
        //handle success
        dispatch(outletsByCompanyLoaded(response));

      },
    );
  }
}

export function loadOutletByCompany(id) {
  return dispatch => {
    return agent.Outlet.view(id).then(
      response => {
        //handle success
        dispatch(outletByCompanyLoaded(response));

      }
    );
  }
}
