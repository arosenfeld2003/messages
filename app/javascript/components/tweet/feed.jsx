import React, {useState, useEffect} from 'react';
import {connect} from "react-redux";
import { onGetUserFeed } from '../../redux/user/user-reducer';
import DeleteTweetButton from './delete-tweet-button';
import CommentsList from "../comments-list/comments-list";

const Feed = (props) => {
  const {user, fetchUserFeed, userFeed} = props;
  const loadUserFeed = function () {
    fetchUserFeed(user) || [];
  }

  useEffect(() => {
    loadUserFeed()
  }, [])

  return  <div>
    {
      !userFeed.length ? <p>Your posts will be here.</p> : <div>
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
                <button type="button" className="btn btn-link text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chat-square-text" viewBox="0 0 16 16">
                    <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                    <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/>
                  </svg>
                </button>

                <button type="button" className="btn btn-link text-info">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                    </svg>
                </button>

                <button type="button" className="btn btn-link text-danger">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                    <path d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                  </svg>
                </button>
                {user.handle === tweet.handle &&
                  <DeleteTweetButton tweet={tweet}/>
                }
                <CommentsList />
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
  user: state.user.currentUser,
  userFeed: state.user.userFeed,
})

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserFeed: (currentUser) => dispatch(onGetUserFeed(currentUser))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Feed);