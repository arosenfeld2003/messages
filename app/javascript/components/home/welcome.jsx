import React, {useState} from "react";
import axios from 'axios-on-rails';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

const GET_USER_REQUEST = "GET_USER_REQUEST";

function getUser() {
  console.log('getUser() Action!!');
  return {
    type: GET_USER_REQUEST
  }
}

class Welcome extends React.Component {
  render() {
    const { user } = this.props;
    const userInfo = <li>Name: {user.name}, Status: {user.isLoggedIn}</li>

    return (
      <React.Fragment>
        <button className="getUserBtn" onClick={() => this.props.getUser()}>Get User</button>
        <ul> {userInfo} </ul>
      </React.Fragment>
    )
  }
}

const structuredSelector = createStructuredSelector({
  user: state => state.user,
});

const mapDispatchToProps = { getUser };

export default connect(structuredSelector, mapDispatchToProps)(Welcome)
