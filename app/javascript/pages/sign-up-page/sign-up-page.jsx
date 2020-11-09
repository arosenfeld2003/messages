import React, {useState} from "react";
import axios from 'axios-on-rails';
import { Link } from "react-router-dom";

const SignUpPage = () => {

  const [userValues, setUserValues] = useState({});

  const handleChange = (evt) => {
    const { target } = evt;
    const { name, value } = target;
    setUserValues({ ...userValues, [name]: value });
  };

  const handleSignup = (evt) => {
    evt.preventDefault();

    const data = {
      user: userValues
    };

    axios.post("http://localhost:3000/users", data)
    .then((res) => {
      console.log(res);
    }).catch((error) => {
      console.log(error);
    })

    console.log(userValues);
  }

  return <div>
      <h2>Signup</h2>
      <form method="" action="" >
        <input id="email" name="email" placeholder="email" onChange={handleChange}/>
        <input id="password" name="password" placeholder="password" onChange={handleChange}/>
        <input id="password_confirmation" name="password_confirmation" placeholder="retype password" onChange={handleChange}/>
        <button type="submit" onClick={handleSignup}>Submit</button>
      </form>
      <Link to="/login">Login</Link>
  </div>

}

export default SignUpPage;
