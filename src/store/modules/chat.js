const initialState = {
    showChatModal: false
}

const TOGGLE_CHAT_MODAL = 'TOGGLE_CHAT_MODAL'

export default function reducer(state = initialState, action){
    switch(action.type){
        case TOGGLE_CHAT_MODAL:
            return { ...state, showChatModal: !state.showChatModal}
        default:
            return state
    }
}

export const toggleChatModal = () => ({
    type: TOGGLE_CHAT_MODAL
})