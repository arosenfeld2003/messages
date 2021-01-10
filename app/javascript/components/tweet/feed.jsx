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
      <ul>
        {userFeed[0] !=  undefined ?
          userFeed.map(tweet => (
            <li key={tweet.id}>
              {tweet.body}
              <DeleteTweetButton/>
            </li>

          )) : ''}
      </ul>
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