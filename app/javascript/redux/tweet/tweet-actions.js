import tweetTypes from './tweet-types'

export const postNewTweet = (tweetText) => ({
  type: tweetTypes.POST_NEW_TWEET,
  payload: tweetText
});

