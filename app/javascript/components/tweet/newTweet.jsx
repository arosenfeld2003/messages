import React, {useState} from 'react';
import {onNewTweet} from '../../redux/tweet/tweet-reducer';
import {connect} from "react-redux";
import FormInput from '../form-input/form-input';
// import {postNewTweet} from '../../redux/tweet/tweet-actions';
import {UpdateFeed} from './feed';

const SubmitNewTweet  = (props) => {
  const {handleNewTweet, currentUser} = props;
  const [newTweet, setNewTweet] = useState({});

  const handleChange = (evt) => {
    const { target } = evt;
    const { name, value } = target;
    setNewTweet({ [name]: value, user: currentUser });
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleNewTweet(newTweet);
  }

  return <form method="" action="">
    <h2 className="h4 mb-4">Send Tweet</h2>
    <FormInput
      id="newTweet"
      name="newTweet"
      className="form-control mb-4"
      placeholder="What's Up Tweety Bird?"
      handleChange={handleChange}
    />
    <button type="submit" onClick={handleSubmit}>Send Tweet</button>
  </form>
}

const mapStateToProps = (state) => ({
  newTweet: state.newTweet,
  currentUser: state.user.currentUser,
})

const mapDispatchToProps = (dispatch) => ({
  handleNewTweet: (newTweet) => {
    dispatch(onNewTweet(newTweet));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(SubmitNewTweet);
