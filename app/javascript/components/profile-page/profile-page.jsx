import React from "react";
import Header from "../header/header";
import ProfileContent from "../profile-content/profile-content";

const ProfilePage = (props) => {
  const profile = props.location.state.profile;

  return <div className="profile-page">
    <Header />
    <ProfileContent profile={profile}/>
</div>

}

export default ProfilePage;