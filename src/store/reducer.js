const initialState = {
  text:
    "This is the keyboard blind-typing simulator.\nFor training, set the cursor in front of the text and try to repeat it from real keyboard.\nYou may paste or type your own text for training here.\nPres 'RS' button to download text from web.\nWhile training, you can see next color indicators:\ngreen - the correct key;\nyellow - the correct key but the wrong register;\nred - the wrong key.\nOthers languiges and special charscters havn't keyboard suggestion of right key.",
  articles: undefined,
  currentArticle: 0,
  cursorPosition: 0,
  matchedKey: "",
  lastKeyCode: undefined,
  matchedKeyCode: undefined,
  matchedTarget: "",
  matchedResult: false
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

    case "GET_RANDOM_TEXT":
      if (action.data) {
        newState.articles = action.data.articles;
        newState.currentArticle = 0;
      }
      const obj = newState.articles[newState.currentArticle];
      newState.text = `${obj.title}\n ${obj.content}`;
      newState.currentArticle++;
      newState.matchedKey = "";
      break;

    default:
      return state;
  }

  return newState;
};

export default reducer;
