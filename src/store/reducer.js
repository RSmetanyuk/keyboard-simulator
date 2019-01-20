const initialState = {
  text:
    "This is the keyboard blind-typing simulator.\nFor training, set the cursor in front of the text and try to repeat it from real keyboard.",
  articles: undefined,
  currentArticle: undefined,
  cursorPosition: 0,
  lastKeyCode: undefined,
  matchedKey: "",
  matchedKeyCode: undefined,
  matchedTarget: ""
};

const reducer = (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case "ON_CHANGE":
      const { selectionStart, value } = action.target;
      const { text, lastKeyCode } = state;

      const oldLength = text.length;
      const newLength = value.length;
      const newText = value;

      const typing = newLength > oldLength;
      const training = typing && !(selectionStart > oldLength);

      newState.text = training ? text : newText;
      newState.cursorPosition = selectionStart;

      newState.matchedKey = training
        ? newText.substr(selectionStart - 1, 1)
        : "";

      newState.matchedTarget = training
        ? text.substr(newState.cursorPosition - 1, 1)
        : "";

      newState.matchedKeyCode = lastKeyCode;

      break;

    case "ON_KEY_DOWN":
      newState.lastKeyCode = action.keyCode;
      break;

    case "GET_WEB_TEXT":
      if (action.data) {
        newState.articles = action.data.articles;
        newState.currentArticle = -1;
      }
      newState.currentArticle++;
      const obj = newState.articles[newState.currentArticle];
      obj.content !== null
        ? (newState.text = `${obj.title}\n ${obj.content}`)
        : (newState.text = `${obj.title}\n ${obj.description}`);
      newState.matchedKey = "";
      break;

    case "NEXT_SAVED_TEXT":
      return state;

    default:
      return state;
  }

  return newState;
};

export default reducer;
