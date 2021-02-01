import React, {useEffect, useState} from "react";
import { connect } from "react-redux";
import { onDeleteUser } from "../../redux/user/user-reducer";
import Button from "../button/button";
import { useHistory } from "react-router-dom";
import { setProfileUpdateStatus } from "../../redux/user/user-actions";
import { onNewRelationship } from "../../redux/relationship/relationship-reducer";
import { Redirect } from "react-router-dom";
import "./profile-card.scss";

const ProfileCard = (props) => {
  const {
    currentUser,
    user,
    onDeleteProfile,
    onCreateNewRelationship,
    onChangeUpdateStatus,
    profileForAdmin,
    currentUserTweets,
    currentUserFollowers,
    currentUserFollowing
  } = props;
  const history = useHistory();

  const handleEditProfile = () => {
    onChangeUpdateStatus(null);
    let path = `/profile/edit/${user.id}`;
    history.push({ 
      pathname: path,
      state: { profile: user }
    });
  }

  const handleProfilePage = () => {
    let path = `/profile/${user.id}`;
    history.push({ 
        pathname: path,
        state: { profile: user }
    });
  }
  
  const handleFollowAction = () => {
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
      <div className="row">
          <div className="col text-right">
            <Button type="button"
            className="btn btn-default btn-sm"
            onClick={handleEditProfile}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16"></svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
                <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
              </svg>
            </Button>
        </div>
      </div>
      <div className="profile-name">
        {user.handle}
        <p>{user.email}</p>
      </div>
      <div className="profile-description">Created at: <strong>{user.created_at}</strong></div>
      <div className="row">
        <div className="col">
          <div className="profile-overview">
            <p>TWEETS</p>
            <h4>{user.tweets != undefined ? user.tweets : currentUserTweets.length}</h4>
          </div>
        </div>
        <div className="col">
          <div className="profile-overview">
            <p>FOLLOWERS</p>
            <h4>{user.followers != undefined ? user.followers : currentUserFollowers.length}</h4>
          </div>
        </div>
        <div className="col">
          <div className="profile-overview">
            <p>FOLLOWING</p>
            <h4>{user.following != undefined ? user.following : currentUserFollowing.length}</h4></div>
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
              <Button type="button"
                className="btn btn-outline-primary"
                onClick={handleProfilePage}>See Profile</Button>
            </div>
          </div>
        </div> : ""
      }
    </div>
  </div>
}

const mapStateToProps = (state) => ({
  profileForAdmin: state.user.profile,
  currentUser: state.user.currentUser,
  currentUserTweets: state.user.userFeed,
  currentUserFollowers: state.user.userFollowers,
  currentUserFollowing: state.user.userFollowing
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