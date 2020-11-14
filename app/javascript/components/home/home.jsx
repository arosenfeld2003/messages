import React, {useState} from "react";
import axios from 'axios-on-rails';
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Home = () => {

    return <div className="home-page">
      <header>
        <div className="user-info">
          <div className="main-text">Welcome</div>
          <div className="user-info__email">mila@gmail.com</div>
        </div>
      </header>
    </div>
}

export default Home;
