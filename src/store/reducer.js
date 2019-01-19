const initialState = {
  text:
    "This is the keyboard blind-typing simulator.\nFor training, set the cursor in front of the text and try to repeat it from real keyboard.\nYou may paste or type your own text for training here.\nPres 'RS' button to download text from web.\nWhile training, you can see next color indicators:\ngreen - the correct key;\nyellow - the correct key but the wrong register;\nred - the wrong key.\nOthers languiges and special charscters havn't keyboard suggestion of right key.",
  articles: undefined,
  currentArticle: undefined,
  cursorPosition: 0,
  lastKeyCode: undefined,
  matchedKey: "",
  matchedKeyCode: undefined,
  matchedTarget: "",
  matchedResult: false
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

      newState.matchedResult = training
        ? newState.matchedKey === newState.matchedTarget
        : false;

      newState.matchedKeyCode = lastKeyCode;

      break;

    case "ON_KEY_DOWN":
      newState.lastKeyCode = action.keyCode;
      break;

    case "GET_RANDOM_TEXT":
      if (action.data) {
        newState.articles = action.data.articles;
        newState.currentArticle = -1;
        console.log(newState.articles);
      }
      newState.currentArticle++;
      console.log(newState.currentArticle);
      const obj = newState.articles[newState.currentArticle];
      obj.content !== null
        ? (newState.text = `${obj.title}\n ${obj.content}`)
        : (newState.text = `${obj.title}\n ${obj.description}`);
      // newState.currentArticle.author = obj.author;
      // newState.currentArticle.url = obj.url;
      newState.matchedKey = "";
      break;

    default:
      return state;
  }

  return newState;
};

export default reducer;
