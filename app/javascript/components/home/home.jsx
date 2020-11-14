import React, {useState} from "react";
import axios from 'axios-on-rails';
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Home = (props) => {
  const {currentUser} = props;

  return <div className="home-page">
    <header>
      <div className="user-info">
        <div className="main-text">Welcome</div>
        <div className="user-info__email">{currentUser.email}</div>
      </div>
    </header>
  </div>
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser
})

export default connect(mapStateToProps, null)(Home);
