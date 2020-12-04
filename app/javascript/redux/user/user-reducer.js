import {setCurrentUser, setLoggedIn, setLogginError} from "./user-actions";
import axios from "axios";
import userTypes from "./user-types";

const INITIAL_STATE = {
  currentUser: null,
  logged_in: false,
  loggin_error: false
}

const onSignUpRequest = (userValues) => {
  return (dispatch) => {
    axios.post("http://localhost:3000/users", {user: userValues})
    .then((res) => {
      dispatch(setCurrentUser(res.data));
      dispatch(setLoggedIn(true));
    }).catch((error) => {
      console.log(error);
    })
  }
}

const onLoginRequest = (userValues) => {
  return (dispatch) => {
    axios.post("http://localhost:3000/users/sign_in", {user: userValues})
    .then((res) => {
      dispatch(setCurrentUser(res.data));
      dispatch(setLoggedIn(true));
    }).catch((error) => {
      dispatch(setLogginError(true));
      console.log(error);
    })
  }
}

const onLogoutRequest = () => {
  return (dispatch) => {
    axios.get("http://localhost:3000/users/sign_out")
    .then((res) => {
      dispatch(setCurrentUser(null));
      dispatch(setLoggedIn(false));
    }).catch((error) => {
      console.log(error);
    })
  }
}

const onLoggedInRequest = () => {
  return (dispatch) => {
    axios.get("http://localhost:3000/logged_in")
    .then((res) => {
      if (res.data.logged_in === true) {
        dispatch(setCurrentUser(res.data.user));
        dispatch(setLoggedIn(true));
      }
    }).catch((error) => {
      console.log(error);
    })
  }
}

const userReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case userTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      }
    case userTypes.SET_LOGGED_IN:
      return {
        ...state,
        logged_in: action.payload
      }
    case userTypes.SET_LOGGIN_ERROR:
      return {
        ...state,
        loggin_error: action.payload
      }
    default:
      return state;
  }
}

export {userReducer, onSignUpRequest, onLoginRequest, onLogoutRequest, onLoggedInRequest};
