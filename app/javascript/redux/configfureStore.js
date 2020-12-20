import { createStore, compose, applyMiddleware } from 'redux';
import {combineReducers} from "redux";
import thunk from 'redux-thunk';
import logger from "redux-logger";
import {userReducer} from "./user/user-reducer";
import {dashboardReducer} from "./dashboard/dashboard-reducer";

const rootReducer = combineReducers({
  user: userReducer,
  dashboard: dashboardReducer
});

const middlewares = [logger, thunk];

let store;

if (window.__REDUX_DEVTOOLS_EXTENSION__) {
  store = createStore(
    rootReducer,
    compose(
      applyMiddleware(...middlewares),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    )
  );
} else {
  store = createStore(
    rootReducer,
    compose(
      applyMiddleware(...middlewares)
    )
  );
}

export default store;
