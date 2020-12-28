import tweetTypes from './tweet-types'

export const sendNewTweet = (tweet) => ({
  type: tweetTypes.SET_CURRENT_USER,
  payload: tweet
});