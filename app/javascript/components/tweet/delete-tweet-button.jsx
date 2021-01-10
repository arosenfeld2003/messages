import React, {useState, useEffect} from 'react';
import {onDeleteTweet} from '../../redux/tweet/tweet-reducer';

import {connect} from "react-redux";

const DeleteTweetButton = (props) => {
  const {tweet} = props;
  return <button className="delete-tweet btn-light" onClick={onDeleteTweet(tweet)}>Delete Tweet</button>
}

const mapStateToProps = (state) => ({
  deletedTweet: state.tweet
})

const mapDispatchToProps = (dispatch) => ({
  
})

export default connect(mapStateToProps, mapDispatchToProps)(DeleteTweetButton);