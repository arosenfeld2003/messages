import React from "react";
import {onLogoutRequest} from "../../redux/user/user-reducer";

const SignoutButton = () => {
  return <button className="signout btn-dark" onClick={onLogoutRequest}></button>
}

export default SignoutButton;

