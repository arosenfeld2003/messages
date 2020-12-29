import React, {useState} from "react";
import axios from 'axios-on-rails';
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import FormInput from "../form-input/form-input";
import Button from "../button/button";
import {onSignUpRequest} from "../../redux/user/user-reducer";
import SignUpForm from "../sign-up-form/sign-up-form";

import "./sign-up-page.scss";

const SignUpPage = (props) => {

  const {isLoggedIn} = props;

  if (isLoggedIn === true) {
    return (
      <Redirect to="/" />
    )
  }

  return <div className="sign-up-page">
    <div className="text-center border border-light p-5">
      <SignUpForm />
      <p>Already have an account?
        <Link to="/login" className="btn btn-link">Login</Link>
      </p>
    </div>
  </div>

}

const mapStateToProps = (state) => ({
  isLoggedIn: state.user.logged_in
})

export default connect(mapStateToProps, null)(SignUpPage);
