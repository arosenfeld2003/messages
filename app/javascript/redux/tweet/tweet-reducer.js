import tweetTypes from './tweet-types';
import {sendNewTweet} from './tweet-actions';
import axios from "axios";
import API from "../../api";

const INITIAL_STATE = {

}

const onNewTweet = (tweetText) => {
  return (dispatch) => {
    API.post("tweets", {body: tweetText})
    .then((res) => {
      dispatch(sendNewTweet(res.data.tweet));
      console.log(res.data.tweet);
    }).catch((error) => {
      console.log(error);
    })
  }
}


const onDeleteTweet = (tweet) => {

}

const tweetReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case tweetTypes.NEW_TWEET:
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