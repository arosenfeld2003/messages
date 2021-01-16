import React, {useState} from "react";
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
    {
      // <Header />
    }
    <div className="main-content">
      <div className="container">
        <div className="row">
          <div className="col-3 p-3">
            <div class="card bg-white">
              <img class="card-img-top" src="..." alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title">{currentUser.email}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Your posts</li>
                <li class="list-group-item">Followers</li>
                <li class="list-group-item">Following</li>
              </ul>
            </div>
          </div>
          <div className="col p-3">
          <div class="col-sm">
            <h3>Newsfeed</h3>
            <div class="card bg-white">
              <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" class="card-link text-secondary">Read more...</a>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>

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
