import { MESSAGE_TYPE } from "store/constant";
import agent from "../../services/agent.service";
import { showMessage } from "./notification";

const INITIAL_STATE = {
  loading: false,
  companyInfo: {
    name: "",
    profile: "",
    logo: "",
    yearOfEstablishment: 0,
    email: "",
    phoneNumber: "",
    contactPerson: "",
    noOfEmployees: 0,
    industry: "",
    registrationNo: "",
    website: "",
    address: "",
    city: "",
    stateName: "",
    stateId: "",
    countryId: "",
    countryName: "",
    contractPerson: "",
  },
};

// Action types
const LOADING = "LOADING";
const LOAD_COMPANY_INFO = "LOAD_COMPANY_INFO";
const LOAD_COMPANY_INFO_ERROR = "LOAD_COMPANY_INFO_ERROR";

// Reducer
export default function reducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: true };
    case LOAD_COMPANY_INFO:
      return {
        ...state,
        loading: false,
        companyInfo: action.payload,
      };
    case LOAD_COMPANY_INFO_ERROR:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}

// Action Creators
export function companyInfoLoaded(data) {
  return { type: LOAD_COMPANY_INFO, payload: data };
}
export const companyInfoLoadedError = () => ({
  type: LOAD_COMPANY_INFO_ERROR,
});
export const loading = () => ({
  type: LOADING,
});

// Actions
export function updateCompanyInfo(id, data) {
  return (dispatch) => {
    dispatch(loading());
    return agent.Company.updateCompanyInfo(id, data).then(
      (response) => {
        dispatch(companyInfoLoaded(response));
        //   dispatch(closeModal());
        dispatch(
          showMessage({
            type: MESSAGE_TYPE.SUCCESS,
            title: "Company Information",
            message: "Company info updated successfully",
          })
        );
      },
      (error) => {
        // handle error
        dispatch(companyInfoLoadedError());
        dispatch(showMessage({ type: "error", message: error }));
      }
    );
  };
}
export function loadCompanyInfo() {
    return (dispatch) => {
      return agent.Company.load().then((response) => {
        dispatch(companyInfoLoaded(response));
        dispatch(
          showMessage({
            type: MESSAGE_TYPE.SUCCESS,
            title: "Company Information",
            message: "Company info loaded successfully",
          })
        );
      });
    };
  }