import { createStore, applyMiddleware } from 'redux';
import {combineReducers} from "redux";
import thunk from 'redux-thunk';
import logger from "redux-logger";
import {userReducer} from "./user/user-reducer";

const rootReducer = combineReducers({
  user: userReducer
});

const middlewares = [logger, thunk];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
