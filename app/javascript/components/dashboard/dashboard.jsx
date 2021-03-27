import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Header from "../header/header";
import ProfileCard from "../profile-card/profile-card";
import CreateUserForm from "../create-user-form/create-user-form";
import SearchForm from "../search-form/search-form";
import { onGetProfileFeed } from "../../redux/user/user-reducer";

import "./dashboard.scss";

const Dashboard = (props) => {
  const {
    currentUser,
    profileBySearch
  } = props;

  if (!currentUser) {
    return <Redirect to="/welcome" />
  }

  if (currentUser && !currentUser.is_admin) {
    return <Redirect to="/" />
  }

  if (profileBySearch) {
    return <Redirect to={`profile/${profileBySearch.id}`} />
  }

  return <div className="dashboard">
    <Header/>
    <div className="main-content">
      <div className="container">
        <div className="row p-3">
          <div className="col-6">
            <CreateUserForm />
          </div>
        </div>
      </div>
    </div>
  </div>
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
  profile: state.user.profileBySearch,
  profileBySearch: state.user.profileBySearch
})

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProfileFeed: (profile) => dispatch(onGetProfileFeed(profile))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
