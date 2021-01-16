import tweetTypes from './tweet-types';
import { deleteTweet } from './tweet-actions';
import API from '../../api';
import { onGetUserFeed } from "../user/user-reducer";

const INITIAL_STATE = {
  newTweet: null,
  userFeed: null,
}

const onNewTweet = (newTweet) => {
  return (dispatch, getState) => {
    API.post("tweets", newTweet)
    .then((res) => {
      console.log(res);
      if (res) {
        dispatch(onGetUserFeed(getState().user.currentUser));
      }
    }).catch((error) => {
      console.log(error);
    })
  }
}

const onDeleteTweet = (tweetId) => {
  return (dispatch, getState) => {
    console.log(tweetId);
    API.delete("tweets", {data: tweetId})
    .then((res) => {
      console.log(res);
      dispatch(deleteTweet(res));
      if (res) {
        dispatch(onGetUserFeed(getState().user.currentUser));
      }
    }).catch((error) => {
      console.log(error);
    })
  }
}

const tweetReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case tweetTypes.POST_NEW_TWEET:
      return {
        ...state,
        newTweet: action.payload
      }
    case tweetTypes.DELETE_TWEET:
      return {
        ...state,
        deleteTweet: action.payload
      }
    default:
      return state;
  }
}

export {tweetReducer, onNewTweet, onDeleteTweet};