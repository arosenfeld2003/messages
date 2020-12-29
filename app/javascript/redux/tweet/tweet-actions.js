import tweetTypes from './tweet-types'

export const sendNewTweet = (tweetText) => ({
  type: tweetTypes.POST_NEW_TWEET,
  payload: tweetText
});