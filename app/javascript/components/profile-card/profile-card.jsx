import React, {useState, useEffect} from "react";
import { connect } from "react-redux";
import { onDeleteUser } from "../../redux/user/user-reducer";
import Button from "../button/button";
import FollowButton from "../../components/follow-button/follow-button";
import { useHistory } from "react-router-dom";
import { setProfileUpdateStatus } from "../../redux/user/user-actions";
import { onNewRelationship } from "../../redux/relationship/relationship-reducer";
import FollowersList from "../followers-list/followers-list";
import FollowingList from "../following-list/following-list";
import { onGetUserFollowers, onGetUserFollowing } from "../../redux/user/user-reducer";

import "./profile-card.scss";

const ProfileCard = (props) => {
  const {
    currentUser,
    user,
    onCreateNewRelationship,
    onChangeUpdateStatus,
    profile,
    totalPosts,
    userFollowers,
    userFollowing,
    currentUserFollowers,
    currentUserFollowing,
    fetchUserFollowers,
    fetchUserFollowing
  } = props;

  const [followingListModal, setFollowingListModal] = useState(false);
  const [followersListModal, setFollowersListModal] = useState(false);
  
  const history = useHistory();

  const loadUserFollowers = () => {
    fetchUserFollowers(user) || [];
  }

  const loadUserFollowing = () => {
    fetchUserFollowing(user) || [];
  }

  useEffect(() => {
    loadUserFollowers();
    loadUserFollowing();
  }, [])

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

  const handleFollowersModalStatus = () => {
    setFollowingListModal(false);

    if(followersListModal === true) {
      setFollowersListModal(false);
    } else {
      setFollowersListModal(true);
    }
  }

  const handleFollowingModalStatus = () => {
    setFollowersListModal(false);
    if(followingListModal === true) {
      setFollowingListModal(false);
    } else {
      setFollowingListModal(true);
    }
    
  }

  if (!user) {
    return <div className="row">
      <div className="col">
        <p className="lead text-muted"><small><em>No user found yet.</em></small></p>
      </div>
    </div>
  }

  return <div>
    <div><div className="profile-card-4">
    <div className="profile-content">
      <div className="top-wrap">
        <div className="profile-name">
          {
            user.firstname || user.lastname ? <h3>{user.firstname} {user.lastname}</h3> : ''
          }
          <p>@{user.handle}</p>
          <p>{user.email}</p>
        </div>
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
      </div>
      <div className="profile-description">
          <p>Member since: <strong>{user.created_at.slice(0, 10)}</strong></p>
            <div className="profile-description-wrap text-center">
              <div className="profile-overview">
                <p>TWEETS</p>
                <h4>{totalPosts ? totalPosts : "0"}</h4>
              </div>
              <div className="profile-overview" onClick={handleFollowersModalStatus}>
                <p>FOLLOWERS</p>
                <h4>{user.followers != undefined ? user.followers : currentUserFollowers.length - 1}</h4>
              </div>
              <div className="profile-overview" onClick={handleFollowingModalStatus}>
                <p>FOLLOWING</p>
                <h4>{user.following != undefined ? user.following : currentUserFollowing.length - 1}</h4></div>
            </div>
          </div>
        </div>

      <div className="row p-3">
        { currentUser !== user ?
          <FollowButton
            user={user}
            currentUser={currentUser}
            userFollowers={userFollowers}
            profile={profile}
          />  : ""
        }
        {
          profile &&  profile !== currentUser? <div className="col">
              <div className="btn-group-vertical">
                <Button type="button"
                  className="btn btn-outline-primary"
                  onClick={handleProfilePage}>See Profile</Button>
              </div>
            </div> : ""
        }
      </div>
    </div>
  </div>
  <FollowersList 
    status={followersListModal}
    list={currentUserFollowers}
    currentUser={currentUser}
    handleClick={handleFollowersModalStatus}
  />
  <FollowingList 
    status={followingListModal}
    list={currentUserFollowing}
    currentUser={currentUser}
    handleClick={handleFollowingModalStatus}
  />
  </div>
}

const mapStateToProps = (state) => ({
  profile: state.user.profile,
  currentUser: state.user.currentUser,
  currentUserFollowers: state.user.userFollowers,
  currentUserFollowing: state.user.userFollowing,
  userFollowers: state.user.userFollowers,
  userFollowing: state.user.userFollowing
})

const mapDispatchToProps = (dispatch) => ({
  onDeleteProfile: (userId) => {
    dispatch(onDeleteUser(userId));
  },
  onChangeUpdateStatus: (status) => {
    dispatch(setProfileUpdateStatus(status));
  },
  fetchUserFollowers: (user) => {
    dispatch(onGetUserFollowers(user))
  },
  fetchUserFollowing: (user) => {
    dispatch(onGetUserFollowing(user))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileCard);