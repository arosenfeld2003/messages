import React, {useState} from "react";
import axios from "axios-on-rails";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import SignoutButton from "../sign-out-button/sign-out-button";
import {onLogoutRequest} from "../../redux/user/user-reducer";
import SubmitNewTweet from "../tweet/newTweet";
import Feed from "../tweet/feed";
import FormInput from '../form-input/form-input';

const Home = (props) => {
  const {isLoggedIn, currentUser, handleLogoutRequest} = props;

  if (!currentUser) {
    return (
      <Redirect to='/welcome'/>
    )
  }

  return <div className="home-page">
    <header>
      <div className="user-info">
        <div className="main-text">Welcome</div>
        <div className="user-info__handle">{currentUser.handle}</div>
      </div>
    </header>

    <div>
      <SubmitNewTweet/>
    </div>

    <div>
      <Feed/>
    </div>


    <div>
      {/*
        <SignoutButton/>
      */}
      <button onClick={handleLogoutRequest}>
        Sign Out
      </button>
    </div>
  </div>
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
  isLoggedIn: state.user.logged_in
})

const mapDispatchToProps = (dispatch) => ({
  handleLogoutRequest: () => {
    dispatch(onLogoutRequest());
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
