import React, {useState} from "react";
import axios from 'axios-on-rails';
import { Link } from "react-router-dom";

const SignInPage = () => {

  const [userValues, setUserValues] = useState({});

  const handleChange = (evt) => {
    const { target } = evt;
    const { name, value } = target;
    setUserValues({ ...userValues, [name]: value });
  };

  const handleSignin = (evt) => {
    evt.preventDefault();

    const data = {
      user: userValues
    };

    axios.post("http://localhost:3000/users/sign_in", data)
    .then((res) => {
      console.log(res);
    }).catch((error) => {
      console.log(error);
    })

    console.log(userValues);
  }

  return <div>
      <h2>Login</h2>
      <form method="" action="" >
        <input id="email" name="email" placeholder="email" onChange={handleChange}/>
        <input id="password" name="password" placeholder="password" onChange={handleChange}/>
        <button type="submit" onClick={handleSignin}>Submit</button>
      </form>
      <Link to="/signup">Sign Up</Link>
  </div>

}

export default SignInPage;
