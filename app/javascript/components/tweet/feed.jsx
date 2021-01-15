import React, {useState, useEffect} from 'react';
import {connect} from "react-redux";
import { onGetUserFeed } from '../../redux/user/user-reducer';
import DeleteTweetButton from './delete-tweet-button';

const UpdateFeed = (props) => {
  const {currentUser, fetchUserFeed, userFeed} = props;
  const loadUserFeed = function () {
    fetchUserFeed(currentUser) || [];
  }

  useEffect(() => {
    loadUserFeed()
  }, [])

  return (
    <div>
      <h3>Feed</h3>


        {userFeed[0] !=  undefined ?
          userFeed.map(tweet => (
            <div className="card" key={tweet.id} id={tweet.id} style={{width: 18 + 'rem'}}>
              <div className="card-body">
                <h5 className="card-title">Name/Handle/Time</h5>
                <p className="card-text">{tweet.body}</p>
                <a href="#" className="card-link">Comment</a>
                <a href="#" className="card-link">Retweet</a>
                <a href="#" className="card-link">Like</a>
              </div>
              <DeleteTweetButton/>
            </div>
          )) : ''}




    </div>
  )
}

const mapStateToProps = (state) => ({
  userFeed: state.user.userFeed,
  currentUser: state.user.currentUser,
})

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserFeed: (currentUser) => dispatch(onGetUserFeed(currentUser))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateFeed);