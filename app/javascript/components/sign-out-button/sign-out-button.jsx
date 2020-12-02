import React from "react";
import {onLogoutRequest} from "../../redux/user/user-reducer";

const SignoutButton = () => {
  return <button className="signout btn-dark" onClick={onLogoutRequest}></button>
}

const mapStateToProps = (state) => ({
  isLoggedIn: state.user.logged_in,
})

const mapDispatchToProps = (dispatch) => ({
  handleLogoutRequest: () => {
    dispatch(onLogoutRequest());
  },
  dispatch
})

export default connect(mapStateToProps, mapDispatchToProps)(SignoutButton);

