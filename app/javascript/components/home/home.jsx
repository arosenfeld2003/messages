import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Header from "../header/header";
import Feed from "../tweet/feed";
import Followers from "../followers/user-followers";
import ProfileCard from "../profile-card/profile-card";
import SearchForm from "../search-form/search-form";
import SubmitNewTweet from "../tweet/newTweet";

const Home = (props) => {
  const {currentUser, userFeed} = props;

  if (!currentUser) {
    <Redirect to="/welcome" />
  }

  return <div className="home-page">
    <Header />
    <div className="main-content">
      <div className="container">
        <div className="row">
          <div className="col-4 p-3">
            <ProfileCard 
            user={currentUser}
            totalPosts={userFeed.length}/>
          </div>
          <div className="col p-3">
            <Followers user={currentUser}/>
          </div>
          <div className="col p-3">
            <Feed user={currentUser}/>
          </div>
          <div className="col p-3">
            <SubmitNewTweet />
          </div>
        </div>
      </div>
    </div>
  </div>
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
  isLoggedIn: state.user.logged_in,
  userFeed: state.user.userFeed
})

export default connect(mapStateToProps, null)(Home);
