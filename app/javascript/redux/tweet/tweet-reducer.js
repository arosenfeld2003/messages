import tweetTypes from './tweet-types';
import {sendNewTweet} from './tweet-actions';
import axios from "axios";
import API from "../../api";

const INITIAL_STATE = {

}

const onNewTweet = (newTweet) => {
  return (dispatch) => {
    API.post("tweets", {tweet: newTweet})
    .then((res) => {
      console.log(res.data.tweet);
      dispatch(sendNewTweet(tweet.data));
      console.log(res);
    }).catch((error) => {
      console.log(error);
    })
  }
}


const onDeleteTweet = (tweet) => {

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
        deletedTweet: action.payload
      }
    default:
      return state;
  }
}

export {tweetReducer, onNewTweet, onDeleteTweet};