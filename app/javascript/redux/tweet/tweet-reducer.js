import tweetTypes from './tweet-types';
import {postNewTweet, getUserFeed} from './tweet-actions';
import axios from 'axios';
import API from '../../api';

const INITIAL_STATE = {
  newTweet: null,
  userFeed: null,
}

const onNewTweet = (newTweet) => {
  return (dispatch) => {
    API.post("tweets", newTweet)
    .then((res) => {
      console.log(res);
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
    case tweetTypes.GET_USER_FEED:
      return {
        ...state,
        userFeed: action.payload
      }
    default:
      return state;
  }
}

export {tweetReducer, onNewTweet};