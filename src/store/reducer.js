const initialState = {
  text:
    "This is the keyboard blind-typing simulator.\nFor training, set the cursor in text and try to repeat the following text.\nYou may paste or type your own text for training here.",
  cursorPosition: 0,
  matchedKey: "",
  lastKeyCode: undefined,
  matchedKeyCode: undefined,
  matchedTarget: "",
  matchedResult: false
  // cycleTtrigger: true
};

const reducer = (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case "ON_CHANGE":
      const oldLength = state.text.length;
      const newLength = action.e.value.length;
      const newText = action.e.value;

      const typing = newLength > oldLength;
      const training = typing && !(action.e.selectionStart > oldLength);

      // newState.cycleTtrigger = !state.cycleTtrigger;
      newState.text = training ? state.text : newText;
      newState.cursorPosition = action.e.selectionStart;

      newState.matchedKey = training
        ? newText.substr(action.e.selectionStart - 1, 1)
        : "";

      newState.matchedTarget = training
        ? state.text.substr(newState.cursorPosition - 1, 1)
        : "";

      newState.matchedResult = training
        ? newState.matchedKey === newState.matchedTarget
        : false;

      newState.matchedKeyCode = state.lastKeyCode;

      break;

    case "ON_KEY_DOWN":
      newState.lastKeyCode = action.keyCode;

      break;
  }

  return newState;
};

export default reducer;
