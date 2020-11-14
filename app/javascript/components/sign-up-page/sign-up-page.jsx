import React, {useState} from "react";
import axios from 'axios-on-rails';
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import FormInput from "../form-input/form-input";
import Button from "../button/button";
import {onSignUpRequest} from "../../redux/user/user-reducer";

import "./sign-up-page.scss";

const SignUpPage = (props) => {

  const {handleSignUpRequest, loggedIn} = props;
  const [userValues, setUserValues] = useState({});

  const handleChange = (evt) => {
    const { target } = evt;
    const { name, value } = target;
    setUserValues({ ...userValues, [name]: value });
  };

  const handleSignup = (evt) => {
    evt.preventDefault();
    handleSignUpRequest(userValues);
  }

  if (loggedIn === true) {
    return (
      <Redirect to="/" />
    )
  }

  return <div className="sign-up-page">
    <div className="text-center border border-light p-5">
      <form method="" action="">
        <h2 className="h4 mb-4">Signup</h2>
        <FormInput
          id="email"
          name="email"
          placeholder="email"
          handleChange={handleChange}
        />
        <FormInput
          id="password"
          name="password"
          placeholder="password"
          handleChange={handleChange}
        />
        <FormInput
          id="password"
          name="password"
          placeholder="password"
          handleChange={handleChange}
        />
        <Button
          type="submit"
          className="btn btn-primary btn-block my-4 waves-effect waves-light"
          onClick={handleSignup}
        > Submit </Button>
      </form>
      <p>Already have an account?
        <Link to="/login" className="btn btn-link">Login</Link>
      </p>
    </div>
  </div>

}

const mapStateToProps = (state) => ({
  loggedIn: state.user.logged_in
})

const mapDispatchToProps = (dispatch) => ({
  handleSignUpRequest: (userValues) => {
    dispatch(onSignUpRequest(userValues));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage);
