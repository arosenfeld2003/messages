import React, {useState} from 'react';
import {onNewTweet} from '../../redux/tweet/tweet-reducer';
import { connect } from "react-redux";
import FormInput from '../form-input/form-input';
import { sendNewTweet } from '../../redux/tweet/tweet-actions';

const NewTweet  = () => {

  const [newTweet] = useState({});

  const handleChange = (tweetText) => {
    // evt.preventDefault();
    sendNewTweet(tweetText);
  };

  return <form method="" action="" onSubmit={handleChange}>
    <h2 className="h4 mb-4">Signup</h2>
    <FormInput
      id="tweet"
      name="tweet"
      className="form-control mb-4"
      placeholder="What's Up Tweety Bird?"
    />
    <button type="submit">Send Tweet</button>
  </form>
}

const mapStateToProps = (state) => ({
  newTweet: state.newTweet,
  userFeed: state.user.feed
})

const mapDispatchToProps = (dispatch) => ({
  sendNewTweet: (tweetText) => {
    dispatch(onNewTweet(tweetText));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(NewTweet);
