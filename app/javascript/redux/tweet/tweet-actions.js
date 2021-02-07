import tweetTypes from './tweet-types'

export const postNewTweet = (tweetText) => ({
  type: tweetTypes.POST_NEW_TWEET,
  payload: tweetText
});

export const deleteTweet = (tweetId) => ({
  type: tweetTypes.DELETE_TWEET,
  payload: deleteTweet
});

export const setNewTweetPopup = (status) => ({
  type: tweetTypes.SET_NEW_TWEET_POPUP_STATUS,
  payload: status
});
