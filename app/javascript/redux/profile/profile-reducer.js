import API from "../../api";
import profileTypes from "./profile-types";
import {
  getProfileFollowers,
  getProfileFollowing
} from "./profile-actions";

const INITIAL_STATE = {
  profileFollowers: {},
  profileFollowing: {}
}

const onGetProfileFollowers = (profile) => {
  return (dispatch) => {
    API.get("relationships/followers", {params: {userId: profile.id}})
    .then((res) => {
      console.log(res);
      dispatch(getProfileFollowers(res.data.followers));
    }).catch((error) => {
      // we need to handle errors here!
      console.log(error);
    })
  }
}

const onGetProfileFollowing = (profile) => {
  return (dispatch) => {
    API.get("relationships/followed", {params: {userId: profile.id}})
    .then((res) => {
      console.log(res);
      dispatch(getProfileFollowing(res.data.following));
    }).catch((error) => {
      // we need to handle errors here!
      console.log(error);
    })
  }
}

const profileReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case profileTypes.GET_PROFILE_FOLLOWERS:
      return {
        ...state,
        profileFollowers: action.payload
      }
    case profileTypes.GET_PROFILE_FOLLOWING:
      return {
        ...state,
        profileFollowing: action.payload
      }
    default:
      return state;
  }
}

export {profileReducer, onGetProfileFollowers, onGetProfileFollowing};