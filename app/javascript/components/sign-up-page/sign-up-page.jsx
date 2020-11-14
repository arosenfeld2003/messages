import React, {useState} from "react";
import axios from 'axios-on-rails';
import { Link } from "react-router-dom";
import FormInput from "../form-input/form-input";
import Button from "../button/button";

import "./sign-up-page.scss";

const SignUpPage = () => {

  const [userValues, setUserValues] = useState({});

  const handleChange = (evt) => {
    const { target } = evt;
    const { name, value } = target;
    setUserValues({ ...userValues, [name]: value });
  };

  const handleSignup = (evt) => {
    evt.preventDefault();

    axios.post("http://localhost:3000/users", {user: userValues})
    .then((res) => {
      console.log(res);
    }).catch((error) => {
      console.log(error);
    })

    console.log(userValues);
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

export default SignUpPage;
