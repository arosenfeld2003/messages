import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Header from "../header/header";
import SubmitNewTweet from "../tweet/newTweet";
import Feed from "../tweet/feed";
import Profile from "../profile/profile";

const Home = (props) => {
  const {currentUser} = props;

  if (!currentUser) {
    <Redirect to="/welcome" />
  }

  return <div className="home-page">
    {
      // <Header />
    }
    <div className="main-content">
      <div className="container">
        <div className="row">
          <div className="col-4 p-3">
            <Profile user={currentUser} />
          </div>
          <div className="col p-3">
            <div>
              <SubmitNewTweet/>
            </div>

            <div>
              <Feed/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
  isLoggedIn: state.user.logged_in
})

export default connect(mapStateToProps, null)(Home);
