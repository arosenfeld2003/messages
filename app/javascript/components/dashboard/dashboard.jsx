import React, { useEffect } from "react";
import { connect } from "react-redux";
import Header from "../header/header";
import ProfileCard from "../profile-card/profile-card";
import CreateUserForm from "../create-user-form/create-user-form";
import SearchForm from "../search-form/search-form";
import { onGetProfileFeed } from "../../redux/user/user-reducer";

import "./dashboard.scss";

const Dashboard = (props) => {
  const {
    user,
    profile,
    profileFeed,
    fetchProfileFeed,
    userFollowers,
    userFollowing,
    userFeed
  } = props;

  const loadProfileFeed = () => {
    if (profile) {
      // console.log(profile);
      fetchProfileFeed(profile) || [];
    }
  }

  useEffect(() => {
    loadProfileFeed();
  }, [profile])

  return <div className="dashboard">
    <Header

    />
    <div className="main-content">
      <div className="container">
        <div className="row p-3">
          <div className="col-6">
            <div className="row p-3">
              <div className="col">
                <SearchForm />
              </div>
            </div>
            <div className="row p-3">
              <div className="col">
                <ProfileCard
                  user={user}
                  totalPosts={profileFeed.length}
                  userFollowers={userFollowers}
                  userFollowing={userFollowing}
                />
              </div>
            </div>
          </div>
          <div className="col-6">
            <CreateUserForm />
          </div>
        </div>
      </div>
    </div>
  </div>
}

const mapStateToProps = (state) => ({
  user: state.user.profile,
  profileFeed: state.user.profileFeed,
  profile: state.user.profile,
  userFeed: state.user.userFeed,
  userFollowers: state.user.userFollowers,
  userFollowing: state.user.userFollowing
})

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProfileFeed: (profile) => dispatch(onGetProfileFeed(profile))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
