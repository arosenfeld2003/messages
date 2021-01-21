import React from "react";
import Button from "../button/button";
import Feed from "../tweet/feed";
import ProfileCard from "../profile-card/profile-card";

const ProfileContent = (props) => {
  const {profile} = props;

  // is user is admin don't show follow button (will add later)

  const handleFollowAction = () => {
    alert("Clicked!");
  }

  return <div className="main-content">
    <div className="container">
      <div className="row">
        <div className="col-4 p-3">
          <ProfileCard user={profile} />
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
              <Feed/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

}

export default ProfileContent;