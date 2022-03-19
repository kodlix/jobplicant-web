import agent from "../../services/agent.service";
import { showMessage } from "./notification";

const initialState = {
  showChatModal: false,
  selectedContact: null,
  conversations: [],
  conversationList: [],
};

const TOGGLE_CHAT_MODAL = "TOGGLE_CHAT_MODAL";
const SELECTED_CONTACT = "SELECTED_CONTACT";
const CREATE_CHAT = "CREATE_CHAT";
const CONVERSATION_WITH_PARTNER_ID = "CONVERSATION_WITH_PARTNER_ID";
const CONVERSATION_LIST = "CONVERSATION_LIST";

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_CHAT_MODAL:
      // console.log('show chat modal', state.showChatModal)
      return {
        ...state,
        showChatModal: !state.showChatModal,
      };
    case SELECTED_CONTACT:
      return {
        ...state,
        selectedContact: action.payload,
      };
    case CREATE_CHAT:
      return {
        ...state,
        conversations: [...state.conversations, action.payload],
      };
    case CONVERSATION_WITH_PARTNER_ID:
      return {
        ...state,
        conversations: action.payload.data,
      };
    case CONVERSATION_LIST:
      return {
        ...state,
        conversationList: action.payload,
      };
    default:
      return state;
  }
}

export const toggleChatModal = () => ({
  type: TOGGLE_CHAT_MODAL,
});

export const actionSetSelectedContact = (contact) => ({
  type: SELECTED_CONTACT,
  payload: contact,
});

export const actionCreateChat = (conversation) => ({
  type: CREATE_CHAT,
  payload: conversation,
});

export const actionGetConversationWithPartnerId = (data) => ({
  type: CONVERSATION_WITH_PARTNER_ID,
  payload: data,
});

export const actionGetConversationList = (data) => ({
  type: CONVERSATION_LIST,
  payload: data,
});

export const createChat = (conversation) => async (dispatch) => {
  dispatch(actionCreateChat(conversation));
  return agent.Chat.createChat(conversation).then(
    (response) => {
      console.log("create chat response", response);
    },
    (error) => {
      dispatch(showMessage({ type: "error", message: error }));
    }
  );
};

export const getConversationWithPartnerId = (partnerId) => async (dispatch) => {
  return agent.Chat.getConversationsWithPartnerId(partnerId).then(
    (response) => {
      console.log("get conversation chat response", response);
      dispatch(actionGetConversationWithPartnerId(response));
    },
    (error) => {
      dispatch(showMessage({ type: "error", message: error }));
    }
  );
};
export const getConversationList = (partnerId) => async (dispatch) => {
  return agent.Chat.getConversationList().then(
    (response) => {
      console.log("get conversation list", response);
      dispatch(actionGetConversationList(response));
    },
    (error) => {
      dispatch(showMessage({ type: "error", message: error }));
    }
  );
};
