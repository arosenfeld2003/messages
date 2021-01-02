import tweetTypes from './tweet-types';
import {postNewTweet} from './tweet-actions';
import axios from 'axios';
import API from '../../api';

const INITIAL_STATE = {
  newTweet: null,
}

const onNewTweet = (newTweet) => {
  return (dispatch) => {
    API.post("tweets", newTweet)
    .then((res) => {
      console.log(res);
      dispatch(postNewTweet(newTweet));
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
    default:
      return state;
  }
}

export {tweetReducer, onNewTweet};