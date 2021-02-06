import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Button from "../button/button";
import {onLogoutRequest} from "../../redux/user/user-reducer";
import {setUserProfile} from "../../redux/user/user-actions";
import {setNewTweetPopup} from "../../redux/tweet/tweet-actions";

import "./header.scss";

const Header = (props) => {
    const {handleLogoutRequest, resetProfile, handleNewTweetPopup} = props;

    const history = useHistory();

    const onResetProfile = () => {
      resetProfile();
      history.push("/");
    }

    const handleNewTweetForm = () => {
      handleNewTweetPopup(true);
    }

    return <header className="main-header">
    <div className="container">
      <div className="row">
        <div className="col-6 p-3">
          <Button
            type="button"
            className="header-logo"
            onClick={onResetProfile}>
            NewsPaper
          </Button>
        </div>
        <div className="col-6 p-3">
            <div className="row">
              <div className="col text-right">
                <Link to="/dashboard" className="btn btn-light">Dashboard</Link>
              </div>
              <div className="col text-right">
                <Button
                  type="button"
                  className="btn btn-outline-light"
                  onClick={handleNewTweetForm}>
                  New Tweet
                </Button>
                <Button
                  type="button"
                  className="btn btn-link text-light"
                  onClick={handleLogoutRequest}>
                  Sign Out
                </Button>
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
    },
    resetProfile: () => {
      dispatch(setUserProfile(null));
    },
    handleNewTweetPopup: (status) => {
      dispatch(setNewTweetPopup(status))
    }
  })
  
  export default connect(mapStateToProps, mapDispatchToProps)(Header);