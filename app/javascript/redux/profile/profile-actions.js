import profileTypes from "./profile-types";

export const getProfileFollowers = (followers) => ({
  type: profileTypes.GET_PROFILE_FOLLOWERS,
  payload: followers
})

export const getProfileFollowing = (following) => ({
  type: profileTypes.GET_PROFILE_FOLLOWING,
  payload: following
})