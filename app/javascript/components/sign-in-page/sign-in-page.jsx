import React, {useState} from "react";
import axios from 'axios-on-rails';
import { Link } from "react-router-dom";
import FormInput from "../form-input/form-input";
import Button from "../button/button";

import "./sign-in-page.scss";

const SignInPage = () => {

  const [userValues, setUserValues] = useState({});

  const handleChange = (evt) => {
    const { target } = evt;
    const { name, value } = target;
    setUserValues({ ...userValues, [name]: value });
  };

  const handleSignin = (evt) => {
    evt.preventDefault();

    axios.post("http://localhost:3000/users/sign_in", {user: userValues})
    .then((res) => {
      console.log(res);
    }).catch((error) => {
      console.log(error);
    })

    console.log(userValues);
  }

  return <div className="sign-in-page">
    <div className="text-center border border-light p-5">

      <form method="" action="" >
        <h2 className="h4 mb-4">Login</h2>
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
        <Button
          type="submit"
          className="btn btn-primary btn-block my-4 waves-effect waves-light"
          onClick={handleSignin}
        > Submit </Button>
      </form>

      <p>Don't have an account?
        <Link to="/signup" className="btn btn-link">Register</Link>
      </p>
    </div>
  </div>

}

export default SignInPage;
