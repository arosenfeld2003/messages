import React, { useEffect } from "react";
import Header from "../header/header";
import ProfileContent from "../profile-content/profile-content";
import { connect } from "react-redux";
import { onGetProfile } from "../../redux/profile/profile-reducer";
import { Redirect } from "react-router-dom";

const ProfilePage = (props) => {
  const {handleProfile, currentProfile, currentUser} = props;
  const profileId = props.match.params.profile_id;

  useEffect(() => {
    if(profileId) {
      handleProfile(profileId);
    }
  }, [profileId]);

  if (!currentUser) {
    return <Redirect to="/" />
  }

  return <div className="profile-page">
    <Header />
    {
      currentProfile ? <ProfileContent profile={currentProfile}/>
      : <p className="lead text-muted"><small><em>User was not found.</em></small></p>
    }
  </div>

}

const mapStateToProps = (state) => ({
  currentProfile: state.profile.profile,
  currentUser: state.user.currentUser
})

const mapDispatchToProps = (dispatch) => ({
  handleProfile: (profileId) => {
    dispatch(onGetProfile(profileId));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);