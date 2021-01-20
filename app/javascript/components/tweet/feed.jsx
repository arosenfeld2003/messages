import React, {useState, useEffect} from 'react';
import {connect} from "react-redux";
import { onGetUserFeed } from '../../redux/user/user-reducer';
import DeleteTweetButton from './delete-tweet-button';

const UpdateFeed = (props) => {
  const {user, fetchUserFeed, userFeed} = props;
  console.log(user);
  const loadUserFeed = function () {
    fetchUserFeed(user) || [];
  }

  useEffect(() => {
    loadUserFeed()
  }, [])

  /*
    {…}
​    config: Object { url: "feed", method: "get", baseURL: "http://localhost:3000/", … }
    data: (13) […]
      0: {…}
        body: "Hello?"
        created_at: "2021-01-10T00:35:25.476Z"
        handle: "axlerosenfeld"
        id: 3
        updated_at: "2021-01-10T00:35:25.476Z"
        user_id: 1
  */

  return (
    <div>
      <h3 className="profile-name">Feed</h3>
      {
        userFeed[0] !=  undefined ? userFeed.map(tweet => (
          <div className="card profile-card-4" key={tweet.id} id={tweet.id} style={{width: 18 + 'rem'}}>
            <div className="card-header">
              <a href="#">@{tweet.handle}</a>, {tweet.created_at.slice(0, 10)}
            </div>
            <div className="card-body">
              <p className="card-text">{tweet.body}</p>
              <a href="#" className="card-link">Comment</a>
              <a href="#" className="card-link">Retweet</a>
              <a href="#" className="card-link">Like</a>
            </div>
            {user.handle === tweet.handle &&
              <DeleteTweetButton/>
            }
          </div>
        )) : ''
      }
    </div>
  )
}

const mapStateToProps = (state) => ({
  user: state.user.currentUser,
  userFeed: state.user.userFeed,
})

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserFeed: (currentUser) => dispatch(onGetUserFeed(currentUser))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateFeed);