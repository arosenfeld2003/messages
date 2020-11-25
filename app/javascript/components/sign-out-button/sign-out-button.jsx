import React, {useState} from "react";
import {onLogoutRequest} from "../../redux/user/user-reducer"

const SignoutButton = ({currentUser}) => {
  return <button className="signout btn-dark" onClick={onLogoutRequest}>Sign Out</button>
}

export default SignoutButton;

