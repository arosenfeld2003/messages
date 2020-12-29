import React from "react";
import { connect } from "react-redux";
import Header from "../header/header";
import Profile from "../profile/profile";

import "./dashboard.scss";

const Dashboard = ({user}) => {

  const handleClick = () => {
    alert("Clicked!");
  }

  return <div className="dashboard">
    <Header />
    <div className="main-content">
      <div className="container">
        <div className="row p-3">
          <div className="col-4">
            <Profile
              user={user}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
}

const mapStateToProps = (state) => ({
  user: state.user.profile
})

export default connect(mapStateToProps, null)(Dashboard);
