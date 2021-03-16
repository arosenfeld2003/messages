import React, { useEffect } from "react";
import ProfileCard from "../profile-card/profile-card";
import Feed from "../tweet/feed";
import { connect } from "react-redux";
import { onGetProfileFeed } from "../../redux/profile/profile-reducer";
import { Redirect } from "react-router-dom";

const ProfileContent = (props) => {
  const {profile, fetchProfileFeed, profileFeed} = props;

  useEffect(() => {
    if (profile) {
      fetchProfileFeed(profile);
    }
  }, [profile])

  if (!profile) {
    <Redirect to="/" />
  }

  return <div className="main-content">
    <div className="container">
      <div className="row">
        <div className="col-4 p-3">
          <ProfileCard profile={profile} />
        </div>
        <div className="col-4 p-3">
          <Feed user={profile}/>
        </div>
      </div>
    </div>
  </div>
}

const mapStateToProps = (state) => ({
  profileFeed: state.profile.profileFeed
})

const mapDispatchToProps = (dispatch) => ({
  fetchProfileFeed: (profile) => dispatch(onGetProfileFeed(profile))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContent);