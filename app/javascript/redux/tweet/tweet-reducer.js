import tweetTypes from './tweet-types';
import { deleteTweet, favoriteTweet, getIsLiked } from './tweet-actions';
import API from '../../api';
import { onGetUserFeed } from "../user/user-reducer";

const INITIAL_STATE = {
  newTweet: null,
  userFeed: null,
  newTweetPopup: false,
  favoriteTweet: null
}

const onNewTweet = (newTweet) => {
  return (dispatch, getState) => {
    API.post("tweets", newTweet)
    .then((res) => {
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
    API.delete("tweets", {data: {id: tweetId}})
    .then((res) => {
      dispatch(deleteTweet(res));
      if (res) {
        dispatch(onGetUserFeed(getState().user.currentUser));
      }
    }).catch((error) => {
      console.log(error);
    })
  }
}

const onIsLiked = (tweet, user) => {
  return (dispatch, getState) => {
    API.get("favorites/get_is_liked", {
      params: {
        tweetId: tweet.id,
        userId: user.id
      }
    }).then((res) => {
      console.log(res);
      let isLiked = res.data.favorite[0] ? true : false;
      dispatch(getIsLiked(isLiked));
    }).catch((error) => {
      console.log(error);
    })
  }
}

const onFavoriteTweet = (tweet, user) => {
  return (dispatch, getState) => {
    API.get("favorites/get_is_liked", {
      params: {
        tweetId: tweet.id,
        userId: user.id
      }
    }).then((res) => {
      if (res.data.favorite[0]) {
        // 'unlike' tweet: delete favorite for tweet/user
        API.delete("favorites/unlike", {data: {id: res.data.favorite[0].id}})
        .then((res) => {
          dispatch(favoriteTweet(res));
          if (res) {
            dispatch(onGetUserFeed(getState().user.currentUser));
          }
        }).catch((error) => {
          console.log(error);
        })
      } else {
        // 'like' tweet: create new favorite for tweet/user
        API.post("favorites/like", {tweet, user})
        .then((res) => {
          dispatch(favoriteTweet(res));
          if (res) {
            dispatch(onGetUserFeed(getState().user.currentUser));
          }
        }).catch((error) => {
          console.log(error);
        })
      }
    }).catch((error) => {
      console.log(error)
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
    case tweetTypes.SET_NEW_TWEET_POPUP_STATUS:
      return {
        ...state,
        newTweetPopup: action.payload
      }
    case tweetTypes.FAVORITE_TWEET:
      return {
        ...state,
        favoriteTweet: action.payload
      }
    case tweetTypes.IS_LIKED:
      return {
        ...state,
        isLiked: action.payload
      }
    default:
      return state;
  }
}

export {
  tweetReducer,
  onNewTweet,
  onDeleteTweet,
  onFavoriteTweet,
  onIsLiked
};