import React from "react";
import SubmitNewTweet from "../tweet/newTweet";
import Feed from "../tweet/feed";
import Profile from "../profile/profile";

const ProfilePage = (props) => {
  const {profile} = props;

  return <div className="profile-page">
  <div className="main-content">
    <div className="container">
      <div className="row">
        <div className="col-4 p-3">
          <Profile user={profile} />
        </div>
        <div className="col p-3">
          <Feed/>
        </div>
        <div className="col p-3">
          <SubmitNewTweet/>
        </div>
      </div>
    </div>
  </div>
</div>

}

export default ProfilePage;