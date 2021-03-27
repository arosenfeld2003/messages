import React, {useState, useEffect} from 'react';
import {connect} from "react-redux";
import { onFavoriteTweet, onGetLikedByList } from '../../redux/tweet/tweet-reducer';
import { onGetUserFeed } from '../../redux/user/user-reducer';
import DeleteTweetButton from './delete-tweet-button';
import FavoriteTweetButton from './favorite-tweet-button';
import Likes from './likes';
import CommentsList from "../comments-list/comments-list";

const Feed = (props) => {
  const {currentUser, fetchUserFeed, userFeed, user} = props;

  const loadUserFeed = function () {
    // if we want feed of other user
    if (user) {
      fetchUserFeed(user);
    } else {
      fetchUserFeed(currentUser);
    }
  }

  useEffect(() => {
    loadUserFeed();
  }, [user])

  return <div>
    {
      !userFeed  && !userFeed.length ? <p>Your feed will be here.</p> : <div>
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

                  <FavoriteTweetButton tweet={tweet} user={currentUser} />
                  <Likes tweet={tweet}/>

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
  isLoggedIn: state.user.logged_in,
})

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserFeed: (currentUser) => {
      dispatch(onGetUserFeed(currentUser));
    },
    handleGetLikedByList: (tweet) => {
      dispatch(onGetLikedByList(tweet));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Feed);