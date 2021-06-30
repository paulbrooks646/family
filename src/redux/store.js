import { createStore, applyMiddleware, combineReducers } from "redux";
import storyReducer from "./storyReducer";
import userReducer from "./userReducer";
import promiseMiddleware from "redux-promise-middleware";

const rootReducer = combineReducers({
  story: storyReducer,
  user: userReducer,
});

export default createStore(rootReducer, applyMiddleware(promiseMiddleware));
