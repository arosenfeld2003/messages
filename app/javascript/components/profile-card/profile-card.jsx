import React, {useState, useEffect} from "react";
import { connect } from "react-redux";
import { onDeleteUser } from "../../redux/user/user-reducer";
import Button from "../button/button";
import FollowButton from "../../components/follow-button/follow-button";
import { useHistory } from "react-router-dom";
import { setProfileUpdateStatus } from "../../redux/user/user-actions";
import FollowersList from "../followers-list/followers-list";
import FollowingList from "../following-list/following-list";
import { onGetUserFollowers, onGetUserFollowing } from "../../redux/user/user-reducer";
import { onNewRelationship, onDeleteRelationship } from "../../redux/relationship/relationship-reducer";
import API from "../../api";

import "./profile-card.scss";

const ProfileCard = (props) => {
  const {
    currentUser,
    user,
    onChangeUpdateStatus,
    profile,
    totalPosts,
    userFollowers,
    userFollowing,
    currentUserFollowers,
    currentUserFollowing,
    fetchUserFollowers,
    fetchUserFollowing,
    isProfile,
    onCreateNewRelationship,
    onDeleteExistRelationship,
  } = props;

  const [followingListModal, setFollowingListModal] = useState(false);
  const [followersListModal, setFollowersListModal] = useState(false);
  const [profileFollowing, setProfileFollowing] = useState(null);
  const [profileFollowers, setProfileFollowers] = useState(null);
  
  const history = useHistory();

  const loadUserFollowers = () => {
    if(user) {
      fetchUserFollowers(user) || [];
    }
  }

  const loadUserFollowing = () => {
    if(user) {
      fetchUserFollowing(user) || [];
    }
  }

  const onGetProfileFollowers = (profile) => {
    API.get("relationships/followers", {params: {userId: profile.id}})
    .then((res) => {
      console.log(res);
      setProfileFollowers(res.data.followers);
    }).catch((error) => {
      console.log(error);
    })
  }
  
  const onGetProfileFollowing = (profile) => {
    API.get("relationships/followed", {params: {userId: profile.id}})
    .then((res) => {
      setProfileFollowing(res.data.following);
    }).catch((error) => {
      console.log(error);
    })
  }

  const updateFollowInfo = () => {
    loadUserFollowers();
    loadUserFollowing();

    // confusing??
    if(isProfile && isProfile === true) {
      if(user) {
        onGetProfileFollowers(user);
        onGetProfileFollowing(user);
      }
    }
  }

  useEffect(() => {
    updateFollowInfo();
  }, [user]);

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

    if (followersListModal === true) {
      setFollowersListModal(false);
    } else {
      setFollowersListModal(true);
    }
  }

  const handleFollowingModalStatus = () => {
    setFollowersListModal(false);
    if (followingListModal === true) {
      setFollowingListModal(false);
    } else {
      setFollowingListModal(true);
    }

  }

  const handleFollowAction = () => {
    onCreateNewRelationship(currentUser, user);
  }

  const handleUnfollowAction = () => {
    onDeleteExistRelationship(currentUser, user);
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
                <h4>{profileFollowers ? profileFollowers.length : currentUserFollowers.length}</h4>
              </div>
              <div className="profile-overview" onClick={handleFollowingModalStatus}>
                <p>FOLLOWING</p>
                <h4>{profileFollowing ? profileFollowing.length : currentUserFollowing.length}</h4></div>
            </div>
          </div>
        </div>

      <div className="row p-3">
        { currentUser !== user ?
          <FollowButton
            user={user}
            currentUser={currentUser}
            profileFollowers={userFollowers}
            profileFollowing={userFollowing}
            handleFollow={handleFollowAction}
            handleUnfollow={handleUnfollowAction}
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
    list={profileFollowers ? profileFollowers : currentUserFollowers}
    currentUser={user}
    profileFollowing={profileFollowing}
    handleClick={handleFollowersModalStatus}
    handleFollowAction={handleFollowAction}
    handleUnfollowAction={handleUnfollowAction}
  />
  <FollowingList 
    status={followingListModal}
    list={profileFollowing ? profileFollowing : currentUserFollowing}
    currentUser={user}
    handleClick={handleFollowingModalStatus}
    handleFollowAction={handleFollowAction}
    handleUnfollowAction={handleUnfollowAction}
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
  },
  onCreateNewRelationship: (user, currentUser) => {
    dispatch(onNewRelationship(user, currentUser));
  },
  onDeleteExistRelationship: (user, currentUser) => {
    dispatch(onDeleteRelationship(user, currentUser));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileCard);