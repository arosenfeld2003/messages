import {setCurrentUser, setLoggedIn, setLogginError, setUserProfile, setNewUserFromAdmin} from "./user-actions";
import API from "../../api";
import userTypes from "./user-types";

const INITIAL_STATE = {
  currentUser: null,
  logged_in: false,
  loggin_error: false,
  profile: null,
  createNewUserFromAdmin: null
}

const onSignUpRequest = (userValues) => {
  return (dispatch) => {
    API.post("users", {user: userValues})
    .then((res) => {
      dispatch(setCurrentUser(res.data.user));
      dispatch(setLoggedIn(true));
      localStorage.setItem("token", res.data.token);
    }).catch((error) => {
      console.log(error);
    })
  }
}

const onLoginRequest = (userValues) => {
  return (dispatch) => {
    API.post("users/sign_in", {user: userValues})
    .then((res) => {
      dispatch(setCurrentUser(res.data.user));
      dispatch(setLoggedIn(true));

      //save token in localStorage
      localStorage.setItem("token", res.data.token);
    }).catch((error) => {
      dispatch(setLogginError(true));
      console.log(error);
    })
  }
}

const onLogoutRequest = () => {
  return (dispatch) => {
    API.get("users/sign_out")
    .then((res) => {
      dispatch(setCurrentUser(null));
      dispatch(setLoggedIn(false));

      //remove token in localStorage
      localStorage.removeItem("token");
    }).catch((error) => {
      console.log(error);
    })
  }
}

const onLoggedInRequest = () => {
  return (dispatch) => {
    const token = localStorage.getItem("token");
    if(token) {
      API.get("logged_in", {
        headers: {
          Authorization: token
        }})
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
}

const onSearchUserProfile = (userEmail) => {
  return (dispatch) => {
    API.post("profile", {user: {
      email: userEmail
    }})
    .then((res) => {
        console.log(res.data);
        dispatch(setUserProfile(res.data))
    }).catch((error) => {
        console.log(error);
    })
  }
}

const onCreateNewUser = (userValues) => {
  return (dispatch) => {
    API.post("users", {user: userValues})
    .then((res) => {
      dispatch(setNewUserFromAdmin(null))
      
      if (res.data.user) {
        dispatch(setNewUserFromAdmin(res.data.user))
      }
    }).catch((error) => {
      console.log(error);
    })
  }
}

const onDeleteUser = (userId) => {
  return (dispatch) => {
    API.delete("profile", {data: {id: userId}})
    .then((res) => {
      console.log(res);
      if(res.status === 201) {
        dispatch(setUserProfile(null))
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
    case userTypes.SET_USER_PROFILE:
      return {
        ...state,
        profile: action.payload
      }
    case userTypes.CREATE_NEW_USER_FROM_ADMIN_STATUS:
      return {
        ...state,
        createNewUserFromAdmin: action.payload
      }
    default:
      return state;
  }
}

export {
  userReducer,
  onSignUpRequest,
  onLoginRequest,
  onLogoutRequest,
  onLoggedInRequest,
  onSearchUserProfile,
  onCreateNewUser,
  onDeleteUser
};
