import React, {useState, useEffect} from 'react';
import {connect} from "react-redux";
import { onFavoriteTweet } from '../../redux/tweet/tweet-reducer';
import { onGetUserFeed } from '../../redux/user/user-reducer';
import DeleteTweetButton from './delete-tweet-button';
import FavoriteTweetButton from './favorite-tweet-button';
import CommentsList from "../comments-list/comments-list";

const Feed = (props) => {
  const {currentUser, fetchUserFeed, userFeed} = props;

  const loadUserFeed = function () {
    fetchUserFeed(currentUser) || [];
  }

  useEffect(() => {
    loadUserFeed()
  }, [])

  return  <div>
    {
      !userFeed.length ? <p>Your feed will be here.</p> : <div>
        <h3>Latest Posts</h3>
        {
          userFeed[0] !=  undefined ? userFeed.map((tweet, index) => (
            <div key={index}>
              <div className="card">
                <div className="card-header card-title"><strong>@{tweet.handle}</strong>, <small>{tweet.created_at.slice(0, 10)}</small></div>
                <div className="card-body">
                  <p className="card-text">{tweet.body}</p>
                </div>
                <div className="card-footer text-muted text-right">

                  <button type="button" className="btn btn-link text-info retweet">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                      </svg>
                  </button>

                  <FavoriteTweetButton tweet={tweet} user={currentUser}/>

                  {currentUser.handle === tweet.handle &&
                    <DeleteTweetButton tweet={tweet}/>
                  }

                  <CommentsList 
                    tweet={tweet}
                    currentUser={currentUser}
                  />
                </div>
              </div>
            </div>
          )) : ''
        }
      </div>
    }

  </div>
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
  userFeed: state.user.userFeed,
})

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserFeed: (currentUser) => dispatch(onGetUserFeed(currentUser))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Feed);