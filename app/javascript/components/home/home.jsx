import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Header from "../header/header";
import Feed from "../tweet/feed";
import Followers from "../follow/user-followers";
import Following from "../follow/user-following";
import ProfileCard from "../profile-card/profile-card";
import SearchForm from "../search-form/search-form";
import SubmitNewTweet from "../tweet/newTweet";

const Home = (props) => {
  const {currentUser, userFeed, userFollowers, userFollowing} = props;

  if (!currentUser) {
    <Redirect to="/welcome" />
  }

  return <div className="home-page">
    <Header />
    <div className="main-content">
      <div className="container">
        <div className="row">
          <div className="col-3 p-3">
            <ProfileCard
              user={currentUser}
              totalPosts={userFeed.length}
              totalFollowers={userFollowers.length}
              totalFollowed={userFollowing.length}
            />
          </div>
          <div className="col-6 p-3">
            <SubmitNewTweet />
            <Feed user={currentUser}/>
          </div>
          <div className="col-3 p-3">
            Follow Suggestions
          </div>
        </div>
        <div className="row">
          <div className="col-4 p-3">
            <Followers user={currentUser}/>
          </div>
          <div className="col-4 p-3">
            <Following user={currentUser}/>
          </div>
        </div>
      </div>
    </div>
  </div>
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
  isLoggedIn: state.user.logged_in,
  userFeed: state.user.userFeed,
  userFollowers: state.user.userFollowers,
  userFollowing: state.user.userFollowing
})

export default connect(mapStateToProps, null)(Home);
