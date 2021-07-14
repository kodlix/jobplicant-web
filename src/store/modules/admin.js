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
  serviceGroups: [],
  services: [],
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
const LOAD_SERVICES = "LOAD_SERVICE";
const LOAD_SERVICE_GROUPS = "LOAD_SERVICE_GROUP";

const CREATE_CONTRACT_TYPE = "CREATE_CONTRACT_TYPE";
const UPDATE_CONTRACT_TYPE = "UPDATE_CONTRACT_TYPE";
const DELETE_CONTRACT_TYPE = "DELETE_CONTRACT_TYPE";

const CREATE_SKILLS = "CREATE_SKILLS";
const UPDATE_SKILLS = "UPDATE_SKILLS";
const DELETE_SKILLS = "DELETE_SKILLS";

const CREATE_QUALIFICATION = "CREATE_QUALIFICATION";
const UPDATE_QUALIFICATION = "UPDATE_QUALFICATION";
const DELETE_QUALIFICATION = "DELETE_QUALIFICATION";

const CREATE_SERVICE_GROUP = "CREATE_SERVICE_GROUP";
const UPDATE_SERVICE_GROUP = "UPDATE_SERVICE_GROUP";
const DELETE_SERVICE_GROUP = "DELETE_SERVICE_GROUP";

const CREATE_SERVICE = "CREATE_SERVICE";
const UPDATE_SERVICE = "UPDATE_SERVICE";
const DELETE_SERVICE = "DELETE_SERVICE";

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
      return { ...state, loading: false, contractTypes: action.payload, message: null }
    case LOAD_SKILLS: return { ...state, loading: false, skills: action.payload, message: null }
    case LOAD_QUALIFICATIONS: return { ...state, loading: false, qualifications: action.payload, message: null }
    case LOAD_SERVICE_GROUPS: return { ...state, loading: false, serviceGroups: action.payload, message: null }
    case LOAD_SERVICES: return { ...state, loading: false, services: action.payload, message: null }

    case CREATE_CONTRACT_TYPE:
    case CREATE_SKILLS:
    case CREATE_SERVICE_GROUP:
    case CREATE_SERVICE:
    case CREATE_QUALIFICATION:
      return {
        ...state,
        loading: false,
        message: "created"
      }
    case UPDATE_CONTRACT_TYPE:
    case UPDATE_SKILLS:
    case UPDATE_QUALIFICATION:
    case UPDATE_SERVICE_GROUP:
    case UPDATE_SERVICE:
      return {
        ...state,
        loading: false,
        message: "updated"
      }
    case DELETE_CONTRACT_TYPE:
    case DELETE_SKILLS:
    case DELETE_QUALIFICATION:
    case DELETE_SERVICE_GROUP:
    case DELETE_SERVICE:
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
export const actionLoadServiceGroups = (response) => ({
  type: LOAD_SERVICE_GROUPS,
  payload: response
})
export const actionCreateServiceGroup = (response) => ({
  type: CREATE_SERVICE_GROUP,
  payload: response
})
export const actionUpdateServiceGroup = (response) => ({
  type: UPDATE_SERVICE_GROUP
})
export const actionDeleteServiceGroup = (response) => ({
  type: DELETE_SERVICE_GROUP
})
export const actionLoadServices = (response) => ({
  type: LOAD_SERVICES,
  payload: response
})
export const actionCreateService = (response) => ({
  type: CREATE_SERVICE,
  payload: response
})
export const actionUpdateService = (response) => ({
  type: UPDATE_SERVICE
})
export const actionDeleteService = (response) => ({
  type: DELETE_SERVICE
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

//SERVICE GROUPS
export const loadServiceGroups = () => (dispatch) => {
  return agent.ServiceGroup.load().then((response) => {
    dispatch(actionLoadServiceGroups(response));
    dispatch(
      showMessage({
        type: MESSAGE_TYPE.SUCCESS,
        title: "Service Groups Information",
        message: "Service Groups loaded successfully",
      })
    );
  });
};

export const createServiceGroup = data => dispatch => {
  dispatch(loading());
  return agent.ServiceGroup.save(data).then(
    (response) => {
      dispatch(actionCreateServiceGroup(response));
      dispatch(
        showMessage({
          type: MESSAGE_TYPE.SUCCESS,
          title: "Create Service Group",
          message: "Service Group created successfully",
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

export const updateServiceGroup = (data, id) => dispatch => {
  dispatch(loading());
  return agent.ServiceGroup.edit(id, data).then(
    response => {
      //handle success
      dispatch(
        showMessage({
          type: MESSAGE_TYPE.SUCCESS,
          title: "Update Service Group Information",
          message: "Service Group updated successfully",
        })
      );
    },
    (error) => {
      // handle error
      dispatch(adminLoadedError());
      dispatch(showMessage({ type: "error", message: error }));
    })
}

export const deleteServiceGroup = (id) => dispatch => {
  return agent.ServiceGroup.delete(id).then(c => (response) => {
    dispatch(actionDeleteServiceGroup(response));
    dispatch(
      showMessage({
        type: MESSAGE_TYPE.SUCCESS,
        title: "Delete Service Group Information",
        message: "Service Group deleted successfully",
      })
    );
  },
    (error) => {
      // handle error
      dispatch(adminLoadedError());
      dispatch(showMessage({ type: "error", message: error }));
    })
}

//SERVICES
export const loadServices = () => (dispatch) => {
  return agent.Service.load().then((response) => {
    dispatch(actionLoadServices(response));
    dispatch(
      showMessage({
        type: MESSAGE_TYPE.SUCCESS,
        title: "Services Information",
        message: "Services loaded successfully",
      })
    );
  });
};

export const createService = data => dispatch => {
  dispatch(loading());
  return agent.Service.save(data).then(
    (response) => {
      dispatch(actionCreateService(response));
      dispatch(
        showMessage({
          type: MESSAGE_TYPE.SUCCESS,
          title: "Update Service Information",
          message: "Service created successfully",
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

export const updateService = (data, id) => dispatch => {
  dispatch(loading());
  return agent.Service.edit(id, data).then(c => (response) => {
    dispatch(actionUpdateService(response));
    dispatch(
      showMessage({
        type: MESSAGE_TYPE.SUCCESS,
        title: "Update skill Information",
        message: "Service updated successfully",
      })
    );
  },
    (error) => {
      // handle error
      dispatch(adminLoadedError());
      dispatch(showMessage({ type: "error", message: error }));
    })
}

export const deleteService = (id) => dispatch => {
  return agent.Service.delete(id).then(c => (response) => {
    dispatch(actionDeleteService(response));
    dispatch(
      showMessage({
        type: MESSAGE_TYPE.SUCCESS,
        title: "Delete Service Information",
        message: "Service deleted successfully",
      })
    );
  },
    (error) => {
      // handle error
      dispatch(adminLoadedError());
      dispatch(showMessage({ type: "error", message: error }));
    })
}