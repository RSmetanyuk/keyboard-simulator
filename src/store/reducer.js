const initialState = {
  text: "12345",
  cursorPosition: 0,
  lastSymbol: ""
};

const reducer = (state = initialState, action) => {
  if (action.type === "ON_CHANGE") {
    // state.text.length
    // action.e.selectionStart

    // action.e.setSelectionRange(
    //   action.cursorPosition - 1,
    //   action.cursorPosition - 1
    // );
    console.log(JSON.stringify(state));
    return {
      ...state,
      text: action.e.newText,
      cursorPosition: action.e.selectionStart,
      lastSymbol: action.e.value.substr(action.e.selectionStart - 1, 1)
    };
  }

  return state;
};

export default reducer;
