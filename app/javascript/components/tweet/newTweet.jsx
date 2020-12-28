import React from 'react';
import {onNewTweet} from '../../redux/tweet/tweet-reducer';
import { connect } from "react-redux";
import FormInput from '../form-input/form-input';

const NewTweet  = () => {


  const handleChange = (evt) => {
    sendNewTweet(evt);
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
  userFeed: state.user.feed,
})

const mapDispatchToProps = (dispatch) => ({
  sendNewTweet: () => {
    dispatch(onNewTweet());
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(NewTweet);
