import React, {useState} from 'react';
import {onNewTweet} from '../../redux/tweet/tweet-reducer';
import {connect} from "react-redux";
import TweetInput from '../tweet-input/tweet-input';

const SubmitNewTweet  = (props) => {
  const {handleNewTweet, currentUser} = props;
  const [newTweet, setNewTweet] = useState({});
  const [charCount, setCharCount] = useState(0);

  const handleChange = (evt) => {
    const { target } = evt;
    const { name, value } = target;
    setNewTweet({ [name]: value, user: currentUser });
    setCharCount(target.value.length);
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    // only submit a tweet with text
    if (newTweet.newTweet.length > 0) {
      handleNewTweet(newTweet);
    }
  }

  return <form method="" action="">
    <div className="card profile-card-4" style={{width: 18 + 'rem'}}>
      <div className="card-header">
        Post New Tweet
      </div>
      <TweetInput
        required
        id="newTweet"
        name="newTweet"
        className="form-control mb-4 profile-content"
        placeholder="What's on your mind?"
        handleChange={handleChange}
      />
      <div className="card-footer">
        <div className="text-left mt-1" id="counter">{charCount} / 140 </div>
        <button type="submit" onClick={handleSubmit}>Send Tweet</button>
      </div>
    </div>
  </form>
}

const mapStateToProps = (state) => ({
  newTweet: state.newTweet,
  currentUser: state.user.currentUser,
})

const mapDispatchToProps = (dispatch) => ({
  handleNewTweet: (newTweet) => dispatch(onNewTweet(newTweet)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SubmitNewTweet);
