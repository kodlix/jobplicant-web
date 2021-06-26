// initial values
const admin = {
    loading: false,
    profileInfo: {
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
    },
  };
  
  // Action types
  const LOADING = "LOADING";
  const LOAD_PROFILE_INFO = "app/account/LOAD_PROFILE_INFO";
  const LOAD_PROFILE_INFO_ERROR = "LOAD_PROFILE_INFO_ERROR";

  const CREATE_SERVICE = "CREATE_SERVICE";
  const UPDATE_SERVICE = "UPDATE_SERVICE";
  const DELETE_SERVICE = "DELETE_SERVICE";

  // Reducer
  export default function reducer(state = admin, action = {}) {
    switch (action.type) {
      case LOADING:
        return { ...state, loading: true };
      case LOAD_PROFILE_INFO:
        return {
          ...state,
          loading: false,
          profileInfo: action.payload,
        };
      case LOAD_PROFILE_INFO_ERROR:
        return {
          ...state,
          loading: false,
        };
      
      default:
        return state;
    }
  }
  
export const loading = () => ({
    type: LOADING,
  });

export const createService = data => dispatch => {
    dispatch(loading());
    return agent.Education.save(education).then(
      (response) => {
        dispatch(createUserEducation(response));
        dispatch(closeModal());
        dispatch(
          showMessage({
            type: MESSAGE_TYPE.SUCCESS,
            title: "Update Profile Information",
            message: "Education created successfully",
          })
        );
      },
      (error) => {
        // handle error
        dispatch(educationLoadedError());
        dispatch(showMessage({ type: "error", message: error }));
      }
    );
  };
