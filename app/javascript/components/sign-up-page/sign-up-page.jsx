import React, {useState} from "react";
import axios from 'axios-on-rails';
import { Link } from "react-router-dom";

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
        <input className="form-control mb-4" id="email" name="email" placeholder="email" onChange={handleChange}/>
        <input className="form-control mb-4" id="password" name="password" placeholder="password" onChange={handleChange}/>
        <input className="form-control mb-4" id="password_confirmation" name="password_confirmation" placeholder="retype password" onChange={handleChange}/>
        <button className="btn btn-primary btn-block my-4 waves-effect waves-light" type="submit" onClick={handleSignup}>Submit</button>
      </form>
      <p>Already have an account?
        <Link to="/login" className="btn btn-link">Login</Link>
      </p>
    </div>
  </div>

}

export default SignUpPage;
