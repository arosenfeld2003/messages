import React, {useState} from "react";
import axios from 'axios-on-rails';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

const GET_USER_REQUEST = 'GET_USER_REQUEST';
const GET_USER_SUCCESS = 'GET_USER_SUCCESS';

function getUser() {
  console.log('getUser() Action!!');
  return dispatch => {
    dispatch({ type: GET_USER_REQUEST });
    return axios.post("http://localhost:3000/users/sign_in", {user: this.user})
    .then((res) => {
      console.log(res);
    }).then(json => {
      dispatch(getUserSuccess());
    }).catch((error) => {
      console.log(error);
    })
  }
}

export function getUserSuccess(json) {
  return {
    type: GET_USER_SUCCESS,
    json
  }
}

class Welcome extends React.Component {
  render() {
    const { user } = this.props;
    const userInfo = <li>Name: {user.email}, Password: {user.password}</li>

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
