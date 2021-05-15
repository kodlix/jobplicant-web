import agent from "services/agent.service";

// initial values
const modal = {
    name: "",
    visible: false,
};


// Action types
const MODAL_OPEN = 'MODAL_OPEN';
const MODAL_CLOSED = 'MODAL_CLOSED';


//Action Creator
export function onModalOpen(name) {
    return { type: MODAL_OPEN, payload: name };
}

export function onModalClosed(name) {
    return { type: MODAL_CLOSED, payload: name };
}


// Reducer
export default function reducer(state = modal, action) {
    switch (action.type) {
        case MODAL_OPEN:
            return {
                ...state,
                name: action.payload,
                visible: true,
            };
        case MODAL_CLOSED:
            return {
                ...state,
                name: "",
                visible: false,
            };
        default: return state
    }
};

//Actions
export function openModal(name) {
    return dispatch => {
        dispatch(onModalOpen(name))
    }
}

//Actions
export function closeModal() {
    return dispatch => {
        dispatch(onModalClosed())
    }
}

