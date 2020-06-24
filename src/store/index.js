import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { composeWithDevTools } from 'redux-devtools-extension'
import * as reducers from "../reducers";

const store = createStore(
  combineReducers({
    ...reducers,
  }),
  composeWithDevTools(
    applyMiddleware(thunk, logger),
  )
  
);
export default store;
