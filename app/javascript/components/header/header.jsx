import React from "react";
import { connect } from "react-redux";
import Button from "../button/button";
import {onLogoutRequest} from "../../redux/user/user-reducer";

import "./header.scss";

const Header = (props) => {
    const {currentUser, handleLogoutRequest} = props;

    return <header className="main-header">
    <div className="container">
      <div className="row">
        <div className="col-6 p-3">
          <h1 className="logo">NewsPaper</h1>
        </div>
        <div className="col-6 p-3">
            <div className="row">
                <div className="col text-right">
                    <Button 
                        type="button"
                        className="btn btn-outline-secondary"
                        onClick={handleLogoutRequest}>Sign Out</Button>
                </div>
            </div>
        </div>
      </div>
    </div>
  </header>
}

const mapStateToProps = (state) => ({
    currentUser: state.user.currentUser
  })
  
  const mapDispatchToProps = (dispatch) => ({
    handleLogoutRequest: () => {
      dispatch(onLogoutRequest());
    }
  })
  
  export default connect(mapStateToProps, mapDispatchToProps)(Header);