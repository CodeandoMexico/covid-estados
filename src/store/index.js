import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import * as reducers from "../reducers";
let middleware = [];
if (process.env.NODE_ENV === "production") {
  middleware = [...middleware, thunk];
} else {
  middleware = [...middleware, thunk, logger];
}
const store = createStore(
  combineReducers({
    ...reducers,
  }),
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
