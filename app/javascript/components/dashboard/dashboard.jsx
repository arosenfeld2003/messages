import React from "react";
import { connect } from "react-redux";
import Header from "../header/header";
import ProfileCard from "../profile-card/profile-card";
import CreateUserForm from "../create-user-form/create-user-form";
import SearchForm from "../search-form/search-form";

import "./dashboard.scss";

const Dashboard = ({user}) => {

  return <div className="dashboard">
    <Header />
    <div className="main-content">
      <div className="container">
        <div className="row p-3">
          <div className="col-6">
            <div className="row p-3">
              <div className="col">
                <SearchForm />
              </div>
            </div>
            <div className="row p-3">
              <div className="col">
                <ProfileCard
                  user={user}
                />
              </div>
            </div>
          </div>
          <div className="col-6">
            <CreateUserForm />
          </div>
        </div>
      </div>
    </div>
  </div>
}

const mapStateToProps = (state) => ({
  user: state.user.profile,
})

export default connect(mapStateToProps, null)(Dashboard);
