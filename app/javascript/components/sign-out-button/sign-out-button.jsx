import React from 'react';
import {onLogoutRequest} from '../../redux/user/user-reducer';
import {connect} from 'react-redux';

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

