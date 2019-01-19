import ruducer from "./reducer";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { loadState, saveState } from "./localStorage";
import { throttle } from "lodash";

const configureStore = () => {
  const persistedState = loadState();

  const store = createStore(ruducer, persistedState, applyMiddleware(thunk));

  store.subscribe(
    throttle(() => {
      saveState(store.getState());
    }, 1000)
  );

  return store;
};

export default configureStore;
