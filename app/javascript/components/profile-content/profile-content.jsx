import React, { useEffect } from "react";
import Button from "../button/button";
import Feed from "../tweet/feed";
import ProfileCard from "../profile-card/profile-card";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { onGetProfileFeed } from "../../redux/user/user-reducer";

const ProfileContent = (props) => {
  const {profile, fetchProfileFeed, profileFeed} = props;

  const loadProfileFeed = function () {
    if (profile) {
      fetchProfileFeed(profile) || [];
    }
  }

  useEffect(() => {
    loadProfileFeed();
  }, [])

  // is user is admin don't show follow button (will add later)

  const handleFollowAction = () => {
    alert("Clicked!");
  }

  return <div className="main-content">
    <div className="container">
      <div className="row">
        <div className="col-4 p-3">
          <ProfileCard user={profile} totalPosts={profileFeed.length} />
        </div>
        <div className="col">
          <div className="row p-3">
            <div className="col">
              <Button type="button"
                className="btn btn-primary"
                onClick={handleFollowAction}>Follow</Button>
            </div>
          </div>
          <div className="row p-3">
            <div className="col">
            <div>
              {
                profileFeed.length !== 0 ? profileFeed.map(tweet => (
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
                      </div>
                    )) : <div className="row">
                          <div className="col">
                            <p className="lead text-muted"><small><em>No posts yet.</em></small></p>
                          </div>
                        </div>
                  }
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

}

const mapStateToProps = (state) => ({
  profileFeed: state.user.profileFeed,
})

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProfileFeed: (profile) => dispatch(onGetProfileFeed(profile))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContent);