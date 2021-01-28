import React, {useEffect} from "react";
import {connect} from "react-redux";
import {onDeleteUser} from "../../redux/user/user-reducer";
import Button from "../button/button";
import { useHistory } from "react-router-dom";
import { setProfileUpdateStatus } from "../../redux/user/user-actions";
import {onNewRelationship} from "../../redux/relationship/relationship-reducer";
import { Redirect } from "react-router-dom";
import "./profile-card.scss";

const ProfileCard = (props) => {

  const {
    currentUser,
    user,
    onDeleteProfile,
    onCreateNewRelationship,
    onChangeUpdateStatus,
    profileForAdmin
  } = props;
  const history = useHistory();

  const handleDeleteProfile = () => {
    onDeleteProfile(user.id)
  }

  const handleEditProfile = () => {
    onChangeUpdateStatus(null);
    let path = `dashboard/profile/edit/${user.id}`;
    history.push(path);
  }

  const handleFollowAction = () => {
    // console.log(user);
    // console.log(currentUser);
    // dispatch(onNewRelationship(currentUser, user));
    onCreateNewRelationship(currentUser, user);
  }

  if (!user) {
    return <div className="row">
      <div className="col">
        <p className="lead text-muted"><small><em>No user found yet.</em></small></p>
      </div>
    </div>
  }

  return <div className="profile-card-4 text-center">
    <div className="profile-content">
      <div className="profile-name">
        {user.handle}
        <p>{user.email}</p>
      </div>
      <div className="profile-description">Created at: <strong>{user.created_at}</strong></div>
      <div className="row">
        <div className="col">
          <div className="profile-overview">
            <p>TWEETS</p>
            <h4>1300</h4>
          </div>
        </div>
        <div className="col">
          <div className="profile-overview">
            <p>FOLLOWERS</p>
            <h4>250</h4>
          </div>
        </div>
        <div className="col">
          <div className="profile-overview">
            <p>FOLLOWING</p>
            <h4>168</h4></div>
        </div>
      </div>

      <div className="col">
        <div className="btn-group-vertical">
          <Button type="button" className="btn btn-outline-primary" onClick={handleFollowAction}>
            Follow
          </Button>
        </div>
      </div>

      {
        profileForAdmin ? <div className="row">
          <div className="col">
            <div className="btn-group-vertical">
              <a href="#" className="btn btn-outline-primary">See Profile</a>
              <Button type="button"
              className="btn btn-outline-primary"
              onClick={handleEditProfile}>Edit Profile</Button>
              <Button type="button"
                className="btn btn-outline-danger"
                onClick={handleDeleteProfile}>Delete profile
              </Button>
            </div>
          </div>
        </div> : ""
      }
    </div>
  </div>
}

const mapStateToProps = (state) => ({
  profileForAdmin: state.user.profile,
  currentUser: state.user.currentUser
})

const mapDispatchToProps = (dispatch) => ({
  onDeleteProfile: (userId) => {
    dispatch(onDeleteUser(userId));
  },
  onChangeUpdateStatus: (status) => {
    dispatch(setProfileUpdateStatus(status));
  },
  onCreateNewRelationship: (user, currentUser) => {
    dispatch(onNewRelationship(user, currentUser));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileCard);