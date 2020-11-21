import {setCurrentUser, setLoggedIn} from "./user-actions";
import axios from "axios";
import userTypes from "./user-types";

const INITIAL_STATE = {
  // currentUser will be object {email: test@gmail.com}
  currentUser: null,
  logged_in: false
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
      console.log(error);
    })
  }
}

const onLoggedInRequest = () => {
  return (dispatch) => {
    axios.get("http://localhost:3000/users/logged_in")
    .then((res) => {
      dispatch(setCurrentUser(res.data));
      dispatch(setLoggedIn(true));
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
    default:
      return state;
  }
}

export {userReducer, onSignUpRequest, onLoginRequest, onLoggedInRequest};
