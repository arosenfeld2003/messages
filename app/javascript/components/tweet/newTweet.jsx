import React, {useState} from 'react';
import {onNewTweet} from '../../redux/tweet/tweet-reducer';
import {connect} from "react-redux";
import TweetInput from '../tweet-input/tweet-input';
// import {postNewTweet} from '../../redux/tweet/tweet-actions';
// import {UpdateFeed} from './feed';

const SubmitNewTweet  = (props) => {
  const {handleNewTweet, currentUser} = props;
  const [newTweet, setNewTweet] = useState({});
  const [charCount, setCharCount] = useState(0);

  const handleChange = (evt) => {
    const { target } = evt;
    const { name, value } = target;
    setNewTweet({ [name]: value, user: currentUser });
    setCharCount(target.value.length);
    // console.log(newTweet.newTweet);
    // const len = target.value.length;
    // console.log(charsRemaining);
    /*
      after each keypress newTweet is set to the value before the keypress
      e.g.
        't' ==> ''
        'te' ==> 't'
        'tes' ==> te
        'test' ==> 'tes'

        when 'send tweet' button is pressed ==> 'test'
    */
  }

  const handleSubmit = (evt) => {
    // evt.preventDefault();

    // only submit a tweet with text
    if (newTweet.length > 0) {
      handleNewTweet(newTweet);
      // Reload page to refresh the feed.
      window.location.reload();
    }
  }

  return <form method="" action="">
    <h2 className="h4 mb-4">Send Tweet</h2>
    <TweetInput
      required
      id="newTweet"
      name="newTweet"
      className="form-control mb-4"
      placeholder="What's on your mind?"
      handleChange={handleChange}
    />
    <div className="text-left mt-1" id="counter">{charCount} / 140 </div>
    <button type="submit" onClick={handleSubmit}>Send Tweet</button>
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
