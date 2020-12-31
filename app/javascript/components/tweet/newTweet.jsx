import React, {useState} from 'react';
import {onNewTweet} from '../../redux/tweet/tweet-reducer';
import { connect } from "react-redux";
import FormInput from '../form-input/form-input';
import { sendNewTweet } from '../../redux/tweet/tweet-actions';

const PostNewTweet  = (props) => {
  const {sendNewTweet, currentUser} = props;
  const [newTweet, setNewTweet] = useState({});

  const handleChange = (evt) => {
    const { target } = evt;
    const { name, value } = target;
    setNewTweet({ ...newTweet, [name]: value });
  }

  const handleNewTweet = (evt) => {
    evt.preventDefault();
    sendNewTweet(newTweet, currentUser);
  }

  return <form method="" action="" onSubmit={handleChange}>
    <h2 className="h4 mb-4">Signup</h2>
    <FormInput
      id="newTweet"
      name="newTweet"
      className="form-control mb-4"
      placeholder="What's Up Tweety Bird?"
    />
    <button type="submit">Send Tweet</button>
  </form>
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
  newTweet: state.newTweet,
  userFeed: state.user.feed
})

const mapDispatchToProps = (dispatch) => ({
  handleNewTweet: (newTweet) => {
    dispatch(onNewTweet(tweetText, currentUser));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(PostNewTweet);
