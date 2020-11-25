import React, {useState} from "react";
import axios from "axios-on-rails";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import SignoutButton from "../sign-out-button/sign-out-button";

const Home = (props) => {
  const {isLoggedIn, currentUser} = props

  if (!isLoggedIn) {
    return (
      <Redirect to='/welcome'/>
    )
  }

  return <div className="home-page">
    <header>
      <div className="user-info">
        <div className="main-text">Welcome</div>
        <div className="user-info__email">{currentUser.email}</div>
      </div>
    </header>
    <div>
      <SignoutButton>Log Out</SignoutButton>
    </div>
  </div>

}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
  isLoggedIn: state.user.logged_in
})

const mapDispatchToProps = (dispatch) => ({
  handleLogoutRequest: (userValues) => {
    dispatch(onLogOutRequest(userValues));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
