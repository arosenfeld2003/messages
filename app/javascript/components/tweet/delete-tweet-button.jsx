import React, {useState, useEffect} from 'react';
import {onDeleteTweet} from '../../redux/tweet/tweet-reducer';
import {connect} from "react-redux";

const DeleteTweetButton = (props) => {

  const {handleDeleteRequest, deletedTweetId} = props;

  return <button className="delete-tweet btn-light" onClick={(e) => {
      const tweetId = {id: e.target.parentElement.id};
      // console.log(tweetId);
      handleDeleteRequest(tweetId);
    }}>
    Delete Tweet
  </button>
}

const mapStateToProps = (state) => ({
  deletedTweetId: state.deletedTweetId
})

const mapDispatchToProps = (dispatch) => ({
  handleDeleteRequest: (tweetId) => {
    console.log(tweetId)
    dispatch(onDeleteTweet(tweetId));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(DeleteTweetButton);