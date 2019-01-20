const initialState = {
  displayed: {
    text:
      "This is the keyboard blind-typing simulator.\nFor training, set the cursor in front of the text and try to repeat it from real keyboard.",
    url: "",
    source: ""
  },
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

  const clearLink = () => {
    newState.displayed.url = "";
    newState.displayed.source = "";
  };

  switch (action.type) {
    case "ON_CHANGE":
      const { selectionStart, value } = action.target;
      const { text } = state.displayed;

      const oldLength = text.length;
      const newLength = value.length;

      const typing = newLength > oldLength;
      const training = typing && !(selectionStart > oldLength);

      newState.displayed.text = training ? text : value;
      newState.cursorPosition = selectionStart;

      newState.matchedKey = training ? value.substr(selectionStart - 1, 1) : "";

      newState.matchedTarget = training
        ? text.substr(newState.cursorPosition - 1, 1)
        : "";

      newState.matchedKeyCode = state.lastKeyCode;

      if (newLength === 0) {
        clearLink();
      }

      break;

    case "ON_KEY_DOWN":
      newState.lastKeyCode = action.keyCode;
      break;

    case "WEB_TEXT_SAVE":
      newState.articles = action.data.articles;
      newState.currentArticle = -1;
      break;

    case "WEB_TEXT_ERROR":
      newState.displayed.text = "Failed to load new text from web!";
      clearLink();
      break;

    case "NEXT_SAVED_TEXT":
      newState.currentArticle === 19
        ? (newState.currentArticle = 0)
        : newState.currentArticle++;
      const obj = newState.articles[newState.currentArticle];
      newState.displayed.text = `${obj.title}\n ${obj.content ||
        obj.description ||
        ""}`;
      newState.displayed.url = obj.url;
      newState.displayed.source = obj.source.name;
      newState.matchedKey = "";
      break;

    default:
      return state;
  }

  return newState;
};

export default reducer;
