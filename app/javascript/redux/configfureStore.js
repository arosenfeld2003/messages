import { createStore, compose, applyMiddleware } from 'redux';
import {combineReducers} from "redux";
import thunk from 'redux-thunk';
import logger from "redux-logger";
import {userReducer} from "./user/user-reducer";

const rootReducer = combineReducers({
  user: userReducer
});

const middlewares = [logger, thunk];

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...middlewares),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  )
);

export default store;

