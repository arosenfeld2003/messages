import userTypes from "./user-types";

export const setCurrentUser = (user) => ({
  type: userTypes.SET_CURRENT_USER,
  payload: user
});

//status true or false
export const setLoggedIn = (status) => ({
  type: userTypes.SET_LOGGED_IN,
  payload: status
})

export const setLogginError = (status) => ({
  type: userTypes.SET_LOGGIN_ERROR,
  payload: status
})

export const setUserProfile = (profile) => ({
  type: userTypes.SET_USER_PROFILE,
  payload: profile
})
