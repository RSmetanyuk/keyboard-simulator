const initialState = {
  text:
    "This is the keyboard blind-typing simulator.\nFor training, you must set the cursor in text and try to repeat the following text.\nYou may paste or type your own text for training here.",
  cursorPosition: 0,
  lastMatchedSymbol: "",
  lastMatched: false,
  rotation: true
};

const reducer = (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case "ON_CHANGE":
      //const deleating = state.text.length > action.e.value.length;

      const typing = action.e.value.length > state.text.length; // what if paste more than one ?
      const training = typing && !(action.e.selectionStart > state.text.length);

      // console.log("typing", typing);
      // console.log("deleating", deleating);
      // console.log("training", training);

      newState.rotation = !state.rotation;
      newState.text = training ? state.text : action.e.value;
      newState.cursorPosition = action.e.selectionStart;

      newState.lastMatchedSymbol = training
        ? action.e.value.substr(action.e.selectionStart - 1, 1)
        : "";

      //console.log(state.text.substr(newState.cursorPosition - 1, 1));

      newState.lastMatched = training
        ? newState.lastMatchedSymbol ===
          state.text.substr(newState.cursorPosition - 1, 1)
        : false;

      //console.log(JSON.stringify(newState));
      break;
  }

  return newState;
};

export default reducer;
