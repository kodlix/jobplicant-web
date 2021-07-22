import { push } from "connected-react-router";
import { showMessage } from "./notification";
import { MESSAGE_TYPE } from "../constant";
import { loadLga, loadStates } from "./location";
import { closeModal } from "./modal";
import { loadError } from "./experience";
import agent from "../../services/agent.service";

// initial values
const admin = {
  loading: false,
  contractTypes: [],
  skills: [],
  qualifications: [],
  message: null
};

// Action types
const LOADING = "LOADING";
const UPDATE_PROFILE = "UPDATE_PROFILE";
const LOAD_PROFILE_INFO = "app/account/LOAD_PROFILE_INFO";
const LOAD_ADMIN_ERROR = "LOAD_ADMIN_ERROR";

const LOAD_CONTRACT_TYPES = "LOAD_CONTRACT_TYPES";
const LOAD_SKILLS = "LOAD_SKILLS";
const LOAD_QUALIFICATIONS = "LOAD_QUALIFICATIONS";

const CREATE_CONTRACT_TYPE = "CREATE_CONTRACT_TYPE";
const UPDATE_CONTRACT_TYPE = "UPDATE_CONTRACT_TYPE";
const DELETE_CONTRACT_TYPE = "DELETE_CONTRACT_TYPE";

const CREATE_SKILLS = "CREATE_SKILLS";
const UPDATE_SKILLS = "UPDATE_SKILLS";
const DELETE_SKILLS = "DELETE_SKILLS";

const CREATE_QUALIFICATION = "CREATE_QUALIFICATION";
const UPDATE_QUALIFICATION = "UPDATE_QUALFICATION";
const DELETE_QUALIFICATION = "DELETE_QUALIFICATION";

// Reducer
export default function reducer(state = admin, action = {}) {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: true, message: null };

    case LOAD_PROFILE_INFO:
      return {
        ...state,
        loading: false,
        profileInfo: action.payload,
      };
    case LOAD_ADMIN_ERROR:
      return {
        ...state,
        loading: false,
        messsage: null
      };

    case UPDATE_PROFILE:
      return {
        ...state,
        loading: false,
      }
    case LOAD_CONTRACT_TYPES:
      return { ...state, loading: false, contractTypes: action.payload.data, message: null }
    case LOAD_SKILLS: return { ...state, loading: false, skills: action.payload.data, message: null }
    case LOAD_QUALIFICATIONS: return { ...state, loading: false, qualifications: action.payload.data, message: null }

    case CREATE_CONTRACT_TYPE:
    case CREATE_SKILLS:
    case CREATE_QUALIFICATION:
      return {
        ...state,
        loading: false,
        message: "created"
      }
    case UPDATE_CONTRACT_TYPE:
    case UPDATE_SKILLS:
    case UPDATE_QUALIFICATION:
      return {
        ...state,
        loading: false,
        message: "updated"
      }
    case DELETE_CONTRACT_TYPE:
    case DELETE_SKILLS:
    case DELETE_QUALIFICATION:
      return {
        ...state,
        message: 'deleted',
      }

    default:
      return state;
  }
}

export const loading = () => ({
  type: LOADING,
});

export const adminLoadedError = () => ({
  type: LOAD_ADMIN_ERROR,
});
export const loadContractTypes = (data) => ({
  type: LOAD_CONTRACT_TYPES,
  payload: data,
});
export const actionCreateContractType = (response) => ({
  type: CREATE_CONTRACT_TYPE,
  payload: response
})

export const actionUpdateContractType = (response) => ({
  type: UPDATE_CONTRACT_TYPE
})
export const actionDeleteContractType = (response) => ({
  type: DELETE_CONTRACT_TYPE
})
export const actionLoadSkills = (response) => ({
  type: LOAD_SKILLS,
  payload: response
})

export const actionCreateSkills = (response) => ({
  type: CREATE_SKILLS,
  payload: response
})
export const actionUpdateSkills = (response) => ({
  type: UPDATE_SKILLS
})
export const actionDeleteSkills = (response) => ({
  type: DELETE_SKILLS
})
export const actionLoadQualification = (response) => ({
  type: LOAD_QUALIFICATIONS,
  payload: response
})
export const actionCreateQualification = (response) => ({
  type: CREATE_SKILLS,
  payload: response
})
export const actionUpdateQualification = (response) => ({
  type: UPDATE_SKILLS
})
export const actionDeleteQualification = (response) => ({
  type: DELETE_SKILLS
})

export const getContractTypes = () => (dispatch) => {
  return agent.ContractType.load().then((response) => {
    dispatch(loadContractTypes(response));
    dispatch(
      showMessage({
        type: MESSAGE_TYPE.SUCCESS,
        title: "Contract types Information",
        message: "Contract types loaded successfully",
      })
    );
  });
};

export const createContractType = data => dispatch => {
  dispatch(loading());
  return agent.ContractType.save(data).then(
    (response) => {
      dispatch(actionCreateContractType(response));
      dispatch(
        showMessage({
          type: MESSAGE_TYPE.SUCCESS,
          title: "Update Contract type Information",
          message: "Contract type created successfully",
        })
      );
    },
    (error) => {
      // handle error
      dispatch(adminLoadedError());
      dispatch(showMessage({ type: "error", message: error }));
    }
  );
};

export const updateContractType = (data, id) => dispatch => {
  dispatch(loading());
  return agent.ContractType.edit(id, data).then(c => (response) => {
    dispatch(actionUpdateContractType(response));
    dispatch(
      showMessage({
        type: MESSAGE_TYPE.SUCCESS,
        title: "Update Contract type Information",
        message: "Contract type updated successfully",
      })
    );
  },
    (error) => {
      // handle error
      dispatch(adminLoadedError());
      dispatch(showMessage({ type: "error", message: error }));
    })
}

export const deleteContractType = (id) => dispatch => {
  return agent.ContractType.delete(id).then(c => (response) => {
    dispatch(actionDeleteContractType(response));
    dispatch(
      showMessage({
        type: MESSAGE_TYPE.SUCCESS,
        title: "Delete Contract type Information",
        message: "Contract type deleted successfully",
      })
    );
  },
    (error) => {
      // handle error
      dispatch(adminLoadedError());
      dispatch(showMessage({ type: "error", message: error }));
    })
}

//SKILLS
export const getSkills = () => (dispatch) => {
  return agent.Skill.load().then((response) => {
    dispatch(actionLoadSkills(response));
    dispatch(
      showMessage({
        type: MESSAGE_TYPE.SUCCESS,
        title: "Skills Information",
        message: "Skills loaded successfully",
      })
    );
  });
};

export const createSkills = data => dispatch => {
  dispatch(loading());
  return agent.Skill.save(data).then(
    (response) => {
      dispatch(actionCreateSkills(response));
      dispatch(
        showMessage({
          type: MESSAGE_TYPE.SUCCESS,
          title: "Update Skill Information",
          message: "Skill created successfully",
        })
      );
    },
    (error) => {
      // handle error
      dispatch(adminLoadedError());
      dispatch(showMessage({ type: "error", message: error }));
    }
  );
};

export const updateSkills = (data, id) => dispatch => {
  dispatch(loading());
  return agent.Skill.edit(id, data).then(c => (response) => {
    dispatch(actionUpdateSkills(response));
    dispatch(
      showMessage({
        type: MESSAGE_TYPE.SUCCESS,
        title: "Update skill Information",
        message: "Skill updated successfully",
      })
    );
  },
    (error) => {
      // handle error
      dispatch(adminLoadedError());
      dispatch(showMessage({ type: "error", message: error }));
    })
}

export const deleteSkills = (id) => dispatch => {
  return agent.Skill.delete(id).then(c => (response) => {
    dispatch(actionDeleteSkills(response));
    dispatch(
      showMessage({
        type: MESSAGE_TYPE.SUCCESS,
        title: "Delete Skill Information",
        message: "Skill deleted successfully",
      })
    );
  },
    (error) => {
      // handle error
      dispatch(adminLoadedError());
      dispatch(showMessage({ type: "error", message: error }));
    })
}

//QUALIFICATIONS
export const getQualifications = () => (dispatch) => {
  return agent.Qualification.load().then((response) => {
    dispatch(actionLoadQualification(response));
    dispatch(
      showMessage({
        type: MESSAGE_TYPE.SUCCESS,
        title: "Qualification Information",
        message: "Qualification loaded successfully",
      })
    );
  });
};

export const createQualification = data => dispatch => {
  dispatch(loading());
  return agent.Qualification.save(data).then(
    (response) => {
      dispatch(actionCreateQualification(response));
      dispatch(
        showMessage({
          type: MESSAGE_TYPE.SUCCESS,
          title: "Update Qualification Information",
          message: "Qualification created successfully",
        })
      );
    },
    (error) => {
      // handle error
      dispatch(adminLoadedError());
      dispatch(showMessage({ type: "error", message: error }));
    }
  );
};

export const updateQualification = (data, id) => dispatch => {
  dispatch(loading());
  return agent.Qualification.edit(id, data).then(c => (response) => {
    dispatch(actionUpdateQualification(response));
    dispatch(
      showMessage({
        type: MESSAGE_TYPE.SUCCESS,
        title: "Update qualification Information",
        message: "Qualification updated successfully",
      })
    );
  },
    (error) => {
      // handle error
      dispatch(adminLoadedError());
      dispatch(showMessage({ type: "error", message: error }));
    })
}

export const deleteQualification = (id) => dispatch => {
  return agent.Skill.delete(id).then(c => (response) => {
    dispatch(actionDeleteQualification(response));
    dispatch(
      showMessage({
        type: MESSAGE_TYPE.SUCCESS,
        title: "Delete Qualification Information",
        message: "Qualification deleted successfully",
      })
    );
  },
    (error) => {
      // handle error
      dispatch(adminLoadedError());
      dispatch(showMessage({ type: "error", message: error }));
    })
}