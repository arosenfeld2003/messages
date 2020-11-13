import React, {useState} from "react";
import axios from 'axios-on-rails';
import { Link } from "react-router-dom";

class Auth extends React.Component {
  render() {
    return <h1>Success: {this.props.email} is signed in!</h1>;
  }
}

export default Auth