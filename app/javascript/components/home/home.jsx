import React, {useState} from "react";
import axios from "axios-on-rails";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
// import from "../sign-out-button/sign-out-button";
import {onLogoutRequest} from "../../redux/user/user-reducer";

const Home = (props) => {
  const {isLoggedIn, currentUser, handleLogoutRequest} = props

  if (!currentUser) {
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

    {
      // replace with a component
    }
    <div>
      <form method="" action="" >
        <h2 className="h4 mb-4">Tweet</h2>
        <FormInput
          tweet=""
          className="form-control mb-4"
          placeholder="What's Up Tweety Bird?"
        />
        <Button
          type="submit"
          className="btn btn-primary btn-block my-4 waves-effect waves-light"
        > Submit </Button>
      </form>
    </div>

    <div>
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
