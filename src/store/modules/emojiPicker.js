
// initial values
const emoji = {
  name: null,
  visible: false,
};


// Action types
const EMOJI_PICKER_OPEN = 'EMOJI_PICKER_OPEN';
const EMOJI_PICKER_CLOSED = 'EMOJI_PICKER_CLOSED';


//Action Creator
export function onEmojiPickerOpen(name) {
  return { type: EMOJI_PICKER_OPEN, payload: name };
}

export function onEmojiPickerClosed(name) {
  return { type: EMOJI_PICKER_CLOSED, payload: name };
}


// Reducer
export default function reducer(state = emoji, action) {
  switch (action.type) {
    case EMOJI_PICKER_OPEN:
      return {
        ...state,
        name: action.payload,
        visible: true,
      };
    case EMOJI_PICKER_CLOSED:
      return {
        ...state,
        name: "",
        visible: false,
      };
    default: return state
  }
};

//Actions
export function openEmojiPicker(name) {
  return dispatch => {
    return dispatch(onEmojiPickerOpen(name))
  }
}

//Actions
export function closeEmojiPicker() {
  return dispatch => {
    dispatch(onEmojiPickerClosed())
  }
}

